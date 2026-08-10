import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";

async function fullText(p) {
  const parser = new PDFParse({ data: fs.readFileSync(p) });
  const r = await parser.getText();
  await parser.destroy();
  return r.text.replace(/\r/g, "").replace(/-- \d+ of \d+ --/g, "");
}

function parseCompositionStyle(text, category) {
  const parts = text.split(/\nComposition:\s*/);
  const products = [];
  for (let i = 1; i < parts.length; i++) {
    const before = parts[i - 1];
    const lines = before
      .trim()
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    let name = lines[lines.length - 1];
    if (!name || /catalog|draft|bhumiraj/i.test(name)) continue;
    const body = parts[i];
    const composition = body.split("\n")[0].trim();
    const description = (
      body.match(/Description:\s*([\s\S]*?)(?=\nFeatures:)/)?.[1] || ""
    )
      .replace(/\s+/g, " ")
      .trim();
    const features = (body.match(/Features:\s*([\s\S]*?)(?=\nPacking:)/)?.[1] || "")
      .split("\n")
      .map((l) => l.replace(/^[•\-*]\s*/, "").trim())
      .filter((l) => l && !/^Description/i.test(l));
    const packing = (body.match(/Packing:\s*([^\n]+)/)?.[1] || "").trim();
    products.push({ name, composition, description, features, packing, category });
  }
  return products;
}

function parseHerbicidePgrStyle(text, category) {
  let t = text
    .replace(/^BHUMIRAJ AGRO WORLD[\s\S]*?CATALOG\s*/i, "")
    .replace(/^PGR \(Plant Growth Regulator\) Product Catalog\s*/i, "")
    .trim();

  const blocks = t.split(/\n(?=[A-Za-z0-9][A-Za-z0-9\- ]{0,40}\nDescription\b)/);
  const products = [];
  for (const block of blocks) {
    const m = block.match(
      /^([A-Za-z0-9][A-Za-z0-9\- ]{0,40})\nDescription\n([\s\S]*?)\nFeatures\n([\s\S]*?)\nPacking\n([^\n]+)/i
    );
    if (!m) continue;
    products.push({
      name: m[1].trim(),
      composition: "",
      description: m[2].replace(/\s+/g, " ").trim(),
      features: m[3]
        .split("\n")
        .map((l) => l.replace(/^[•\-*]\s*/, "").trim())
        .filter(Boolean),
      packing: m[4].trim(),
      category,
    });
  }
  return products;
}

function titleCaseName(name) {
  const map = {
    AMAZON: "Amazon",
    AZOCA: "Azoca",
    AZODEN: "Azoden",
    "BHUMI CURE": "Bhumi Cure",
    DIFENCE: "Difence",
    HEERAMANI: "Heeramani",
    "BHUMI GOLD": "Bhumi Gold",
    HELIX: "Helix",
    "JUSTIN-50": "Justin 50",
    CLEANSER: "Cleanser",
    "FIRE-58": "Fire 58",
    "GlyChin-41": "Glychin 41",
    "BHUMI-71": "Bhumi 71",
    "Oxy Goal": "Oxy Goal",
    OPERA: "Opera",
    PERASUT: "Perasut",
    Pilot: "Pilot",
    GIBBROL: "Gibbrol",
    FINIX: "Finix",
    DESTROYER: "Destroyer",
    "FIPRON-3G": "Fipron 3G",
    "FURO-3G": "Furo 3G",
    "HYDRA-4G": "Hydra 4G",
    HYDRONIL: "Hydronil",
    "HULK-80": "Hulk 80",
    "KUNG-FU": "Kung Fu",
    LAAVA: "Laava",
    KINGDOM: "Kingdom",
    LINUX: "Linux",
    "LEO GOLD": "Leo Gold",
    LUPIN: "Lupin",
    "NEEM CURE": "Neem Cure",
    NEEMORA: "Neemora",
    NILPRID: "Nilprid",
    OFFICER: "Officer",
    "PRO-FIGHTER": "Pro Fighter",
    "PRO MITE": "Pro Mite",
    "PROFIN SUPER": "Profin Super",
    LORENCE: "Lorence",
  };
  if (map[name]) return map[name];
  return name
    .split(/[\s\-]+/)
    .map((w) => {
      if (/^\d/.test(w)) return w.toUpperCase();
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const imageAlias = {
  kingdom: "kingoom",
  officer: "br-officer",
  "bhumi-cure": "bhumi-care",
  heeramani: "heeramant",
  "fire-58": "fire",
  "sulfo-40": "suflo-50",
  "toragon-super": "toragon",
  "mr-m-45": "mr.m-45",
};

function findImage(folder, slug) {
  const dir = path.join("d:/agro-mohit/public/product image", folder);
  if (!fs.existsSync(dir)) return null;
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  const aliases = [slug, imageAlias[slug]].filter(Boolean);
  for (const a of aliases) {
    const hit = files.find((f) => {
      const key = path
        .parse(f)
        .name.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      return key === a;
    });
    if (hit) return `/product image/${folder}/${hit}`;
  }
  for (const a of aliases) {
    const compact = a.replace(/-/g, "");
    const hit = files.find((f) =>
      path
        .parse(f)
        .name.toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .includes(compact)
    );
    if (hit) return `/product image/${folder}/${hit}`;
  }
  return null;
}

const folderByCategory = {
  Insecticides: "Insecticide",
  Fungicides: "Fungicide",
  Herbicides: "Herbicide",
  PGR: "PGR",
};

const slugByCategory = {
  Insecticides: "insecticides",
  Fungicides: "fungicides",
  Herbicides: "herbicides",
  PGR: "pgr",
};

const fungicide = parseCompositionStyle(
  await fullText(
    "c:/Users/dell/Downloads/Bhumiraj_Fungicide_Product_Catalog_Draft.pdf"
  ),
  "Fungicides"
);
const herbicide = parseHerbicidePgrStyle(
  await fullText(
    "c:/Users/dell/Downloads/Bhumiraj_Herbicide_Catalog_Text_Only.pdf"
  ),
  "Herbicides"
);
const pgr = parseHerbicidePgrStyle(
  await fullText("c:/Users/dell/Downloads/Bhumiraj_PGR_Catalog_Text_Only.pdf"),
  "PGR"
);

let insecticide = [];
const insectPath = "c:/Users/dell/Downloads/Bhumiraj_All_Products_Catalog_V2.pdf";
if (fs.existsSync(insectPath)) {
  insecticide = parseCompositionStyle(await fullText(insectPath), "Insecticides");
}

const pdfProducts = [...insecticide, ...fungicide, ...herbicide, ...pgr];
console.log("Parsed counts:", {
  insecticide: insecticide.length,
  fungicide: fungicide.length,
  herbicide: herbicide.length,
  pgr: pgr.length,
});
console.log(
  "Names:",
  pdfProducts.map((p) => p.name).join(" | ")
);

const products = [];
let id = 1;
const usedImages = new Set();

for (const p of pdfProducts) {
  const slug = slugify(p.name);
  const folder = folderByCategory[p.category];
  const image = findImage(folder, slug);
  if (image) usedImages.add(image);
  products.push({
    id: id++,
    slug,
    name: titleCaseName(p.name),
    category: p.category,
    categorySlug: slugByCategory[p.category],
    featured: id <= 13,
    image,
    gallery: image ? [image] : [],
    composition: p.composition || "",
    description: p.description,
    features: p.features,
    packing: p.packing,
    packaging: p.packing,
    fromPdf: true,
  });
}

// Remaining image-only products
for (const [catName, folder] of Object.entries(folderByCategory)) {
  const dir = path.join("d:/agro-mohit/public/product image", folder);
  if (!fs.existsSync(dir)) continue;
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b));
  for (const file of files) {
    const img = `/product image/${folder}/${file}`;
    if (usedImages.has(img)) continue;
    const key = path
      .parse(file)
      .name.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    if (
      products.some(
        (p) =>
          p.slug === key ||
          p.slug === Object.keys(imageAlias).find((k) => imageAlias[k] === key)
      )
    )
      continue;
    if (key === "br-officer" && products.some((p) => p.slug === "officer"))
      continue;
    if (key === "kingoom" && products.some((p) => p.slug === "kingdom")) continue;
    if (key === "bhumi-care" && products.some((p) => p.slug === "bhumi-cure"))
      continue;
    if (key === "heeramant" && products.some((p) => p.slug === "heeramani"))
      continue;
    if (key === "fire" && products.some((p) => p.slug === "fire-58")) continue;

    products.push({
      id: id++,
      slug: key,
      name: key
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      category: catName,
      categorySlug: slugByCategory[catName],
      featured: false,
      image: img,
      gallery: [img],
      fromPdf: false,
    });
  }
}

fs.writeFileSync(
  "d:/agro-mohit/app/data/catalogProducts.js",
  "export const catalogProducts = " + JSON.stringify(products, null, 2) + ";\n"
);
console.log(
  "Wrote",
  products.length,
  "products; pdf:",
  products.filter((p) => p.fromPdf).length,
  "missing images:",
  products.filter((p) => p.fromPdf && !p.image).map((p) => p.name)
);
