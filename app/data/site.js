import {
  Sprout,
  Shield,
  Leaf,
  FlaskConical,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const img = {
  field: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  wheat: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
  soilHands: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
  seedling: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8",
  corn: "https://images.unsplash.com/photo-1601593768799-76d8aa4d1f76",
  tomato: "https://images.unsplash.com/photo-1592841200221-a6898f307baa",
  rice: "https://images.unsplash.com/photo-1536657464919-892534f60d6e",
  spray: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
  fruit: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
  leaves: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  harvest: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
  sunrise: "https://images.unsplash.com/photo-1492496913980-501348b61469",
  hero: "/assets/hero-banner.png",
  tractor: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
  farmer: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae",
  packaging: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
};

export const brand = {
  name: "Bhumiraj Agro World",
  shortName: "Bhumiraj",
  tagline: "Growing Better Harvests Together",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919510876266",
  email: "info@bhumirajagroworld.com",
  address: "Near APMC Market, Agricultural Zone, Gujarat, India",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  heroHeading:
    "Empowering Agriculture with Premium Seeds & Medicine Solutions",
  heroDescription:
    "High-quality agricultural products designed to improve crop health, increase productivity, and support sustainable farming.",
  logo: "/assets/bhumiraj.jpg",
};

export const categories = [
  {
    slug: "seeds",
    name: "Seeds",
    icon: Sprout,
    image: img.seedling,
    description:
      "Certified hybrid and research seeds selected for higher germination, stronger crops, and better yields.",
  },
  {
    slug: "crop-medicines",
    name: "Crop Medicines",
    icon: Shield,
    image: img.spray,
    description:
      "Trusted insecticides, fungicides, and herbicides to protect crops from pests and diseases.",
  },
  {
    slug: "plant-nutrition",
    name: "Plant Nutrition",
    icon: Leaf,
    image: img.leaves,
    description:
      "Balanced fertilizers and nutrition solutions that support healthy growth at every crop stage.",
  },
  {
    slug: "bio-products",
    name: "Bio Products",
    icon: FlaskConical,
    image: img.soilHands,
    description:
      "Eco-friendly bio solutions that improve soil health and support sustainable farming practices.",
  },
];

export const products = [
  {
    id: 1,
    slug: "hybrid-cotton-seeds-bg-ii",
    name: "Hybrid Cotton Seeds BG-II",
    category: "Seeds",
    categorySlug: "seeds",
    featured: true,
    featuredType: "seed",
    image: img.seedling,
    gallery: [img.seedling, img.field, img.harvest],
    shortDescription:
      "High-germination hybrid cotton seeds engineered for strong plant vigor and superior boll formation.",
    description:
      "Our Hybrid Cotton Seeds BG-II are carefully selected for Indian agro-climatic conditions. Farmers trust this variety for consistent germination, robust plant health, and improved productivity across the season.",
    features: [
      "High germination rate",
      "Strong plant vigor",
      "Suitable for major cotton belts",
    ],
    benefits: [
      "Improved yield potential",
      "Better crop uniformity",
      "Reliable performance in field conditions",
    ],
    recommendedCrops: ["Cotton"],
    applicationMethod:
      "Sow in well-prepared soil with adequate moisture. Follow local agronomist guidance for spacing and timing.",
    dosage: "As per pack recommendation and soil conditions",
    packaging: "450g / 1kg packs",
    storage:
      "Store in a cool, dry place away from direct sunlight and moisture.",
    safety:
      "Keep out of reach of children. Use only for agricultural purposes.",
    specs: [
      { label: "Type", value: "Hybrid BG-II" },
      { label: "Germination", value: "85%+" },
      { label: "Season", value: "Kharif" },
    ],
  },
  {
    id: 2,
    slug: "premium-crop-protector",
    name: "Premium Crop Protector",
    category: "Crop Medicines",
    categorySlug: "crop-medicines",
    featured: true,
    featuredType: "medicine",
    image: img.spray,
    gallery: [img.spray, img.leaves, img.field],
    shortDescription:
      "Broad-spectrum crop protection solution formulated to safeguard plants from major pests and diseases.",
    description:
      "Premium Crop Protector is designed for effective field performance with clear usage guidance. Ideal for farmers seeking dependable protection during critical crop stages.",
    features: [
      "Broad-spectrum protection",
      "Fast field action",
      "Trusted formulation",
    ],
    benefits: [
      "Reduces crop damage",
      "Supports healthier plant growth",
      "Helps protect harvest quality",
    ],
    recommendedCrops: ["Cotton", "Paddy", "Vegetables", "Pulses"],
    applicationMethod:
      "Dilute as directed and spray evenly during early morning or late evening.",
    dosage: "As recommended on product label",
    packaging: "100ml / 250ml / 500ml",
    storage: "Store sealed in original packaging in a cool dry place.",
    safety:
      "Wear protective gear while spraying. Do not inhale mist. Wash hands after use.",
    specs: [
      { label: "Category", value: "Crop Protection" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Foliar spray" },
    ],
  },
  {
    id: 3,
    slug: "hybrid-tomato-seeds",
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    categorySlug: "seeds",
    image: img.tomato,
    gallery: [img.tomato, img.seedling, img.harvest],
    shortDescription:
      "Premium hybrid tomato seeds for uniform fruiting and strong plant structure.",
    description:
      "Developed for reliable marketable yield with good fruit quality and plant health across greenhouse and open-field conditions.",
    features: ["Uniform fruiting", "Strong plant structure", "High vigor"],
    benefits: ["Better market quality", "Consistent harvests", "Farmer preferred"],
    recommendedCrops: ["Tomato"],
    applicationMethod: "Nursery sowing followed by transplanting at 25–30 days.",
    dosage: "As per packet instructions",
    packaging: "10g / 50g",
    storage: "Keep airtight in a cool dry place.",
    safety: "For agricultural use only.",
    specs: [
      { label: "Type", value: "Hybrid" },
      { label: "Crop", value: "Tomato" },
      { label: "Season", value: "Year-round" },
    ],
  },
  {
    id: 4,
    slug: "hybrid-maize-seeds",
    name: "Hybrid Maize Seeds",
    category: "Seeds",
    categorySlug: "seeds",
    image: img.corn,
    gallery: [img.corn, img.field, img.harvest],
    shortDescription:
      "High-yielding maize hybrid suited for productive farming systems.",
    description:
      "A reliable hybrid for farmers looking for strong germination, good cob development, and dependable seasonal performance.",
    features: ["High yield potential", "Good cob fill", "Strong germination"],
    benefits: ["Improved productivity", "Stable crop stand", "Better returns"],
    recommendedCrops: ["Maize"],
    applicationMethod: "Direct sowing in prepared rows with recommended spacing.",
    dosage: "As per pack guidance",
    packaging: "1kg / 4kg",
    storage: "Store dry and away from pests.",
    safety: "For sowing use only.",
    specs: [
      { label: "Type", value: "Hybrid" },
      { label: "Crop", value: "Maize" },
      { label: "Season", value: "Kharif / Rabi" },
    ],
  },
  {
    id: 5,
    slug: "broad-spectrum-fungicide",
    name: "Broad Spectrum Fungicide",
    category: "Crop Medicines",
    categorySlug: "crop-medicines",
    image: img.leaves,
    gallery: [img.leaves, img.wheat, img.spray],
    shortDescription:
      "Effective fungicide for controlling fungal diseases across major crops.",
    description:
      "Helps farmers manage leaf spot, blight, and related fungal challenges with clear dosage and application support.",
    features: ["Multi-crop use", "Effective disease control", "Easy to apply"],
    benefits: ["Protects foliage", "Supports healthier canopy", "Preserves yield"],
    recommendedCrops: ["Wheat", "Paddy", "Vegetables"],
    applicationMethod: "Foliar spray at first disease symptoms or as preventive schedule.",
    dosage: "As per label recommendation",
    packaging: "250ml / 500ml / 1L",
    storage: "Keep container tightly closed in a dry place.",
    safety: "Avoid contact with eyes and skin. Follow label precautions.",
    specs: [
      { label: "Type", value: "Fungicide" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Foliar" },
    ],
  },
  {
    id: 6,
    slug: "selective-herbicide",
    name: "Selective Herbicide",
    category: "Crop Medicines",
    categorySlug: "crop-medicines",
    image: img.wheat,
    gallery: [img.wheat, img.field, img.spray],
    shortDescription:
      "Targeted weed control solution to protect crop stands and reduce competition.",
    description:
      "Designed to manage unwanted weeds while supporting cleaner fields and healthier crop development.",
    features: ["Targeted weed control", "Field proven", "Easy mixing"],
    benefits: ["Cleaner fields", "Reduced crop competition", "Better resource use"],
    recommendedCrops: ["Wheat", "Maize", "Pulses"],
    applicationMethod: "Apply as directed based on weed stage and crop timing.",
    dosage: "As recommended on packaging",
    packaging: "500ml / 1L",
    storage: "Store upright in original container.",
    safety: "Do not spray near water bodies. Use protective clothing.",
    specs: [
      { label: "Type", value: "Herbicide" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Post-emergence" },
    ],
  },
  {
    id: 7,
    slug: "balanced-npk-nutrition",
    name: "Balanced NPK Nutrition",
    category: "Plant Nutrition",
    categorySlug: "plant-nutrition",
    image: img.packaging,
    gallery: [img.packaging, img.soilHands, img.leaves],
    shortDescription:
      "Complete plant nutrition blend supporting growth, flowering, and fruit development.",
    description:
      "A balanced nutrition formula that helps maintain crop vigor and productivity through critical growth stages.",
    features: ["Balanced nutrients", "Supports plant vigor", "Easy application"],
    benefits: ["Healthier growth", "Improved productivity", "Better crop quality"],
    recommendedCrops: ["All major field and horticulture crops"],
    applicationMethod: "Apply through soil or fertigation as advised by agronomist.",
    dosage: "Crop-stage dependent",
    packaging: "1kg / 5kg / 25kg",
    storage: "Keep dry and sealed.",
    safety: "Avoid inhalation of dust. Wash hands after handling.",
    specs: [
      { label: "Type", value: "NPK Blend" },
      { label: "Form", value: "Granular / Powder" },
      { label: "Usage", value: "Soil / Fertigation" },
    ],
  },
  {
    id: 8,
    slug: "organic-growth-booster",
    name: "Organic Growth Booster",
    category: "Bio Products",
    categorySlug: "bio-products",
    image: img.soilHands,
    gallery: [img.soilHands, img.seedling, img.leaves],
    shortDescription:
      "Bio-based growth booster that enhances root development and soil vitality.",
    description:
      "Formulated to support sustainable farming with improved plant resilience and healthier soil biology.",
    features: ["Bio-based formula", "Root development support", "Soil friendly"],
    benefits: ["Stronger roots", "Improved plant resilience", "Sustainable input"],
    recommendedCrops: ["Vegetables", "Fruits", "Field crops"],
    applicationMethod: "Drench or foliar application as recommended.",
    dosage: "As per product guidance",
    packaging: "500ml / 1L / 5L",
    storage: "Store in shade, avoid freezing.",
    safety: "Agricultural use only. Follow label instructions.",
    specs: [
      { label: "Type", value: "Bio Stimulant" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Soil / Foliar" },
    ],
  },
  {
    id: 9,
    slug: "premium-wheat-seeds",
    name: "Premium Wheat Seeds",
    category: "Seeds",
    categorySlug: "seeds",
    image: img.wheat,
    gallery: [img.wheat, img.field, img.harvest],
    shortDescription:
      "Quality wheat seeds selected for strong establishment and dependable yield.",
    description:
      "Ideal for Rabi cultivation with consistent performance and farmer-trusted quality standards.",
    features: ["Strong establishment", "Reliable yield", "Quality assured"],
    benefits: ["Better stand", "Improved harvest potential", "Trusted variety"],
    recommendedCrops: ["Wheat"],
    applicationMethod: "Sow in prepared beds with recommended seed rate.",
    dosage: "As per local recommendation",
    packaging: "20kg / 40kg",
    storage: "Store in moisture-free conditions.",
    safety: "For sowing purposes only.",
    specs: [
      { label: "Type", value: "Certified Seed" },
      { label: "Crop", value: "Wheat" },
      { label: "Season", value: "Rabi" },
    ],
  },
  {
    id: 10,
    slug: "micronutrient-mix",
    name: "Micronutrient Mix",
    category: "Plant Nutrition",
    categorySlug: "plant-nutrition",
    image: img.harvest,
    gallery: [img.harvest, img.leaves, img.packaging],
    shortDescription:
      "Essential micronutrient mix to correct deficiencies and support crop quality.",
    description:
      "Helps address micronutrient gaps that limit plant performance and marketable produce quality.",
    features: ["Corrects deficiencies", "Improves crop quality", "Easy to use"],
    benefits: ["Better plant health", "Improved produce quality", "Balanced nutrition"],
    recommendedCrops: ["Fruits", "Vegetables", "Cereals"],
    applicationMethod: "Foliar spray or soil application based on crop need.",
    dosage: "As advised on label",
    packaging: "250g / 1kg",
    storage: "Keep sealed and dry.",
    safety: "Avoid contact with eyes. Wash after use.",
    specs: [
      { label: "Type", value: "Micronutrients" },
      { label: "Form", value: "Powder" },
      { label: "Usage", value: "Foliar / Soil" },
    ],
  },
  {
    id: 11,
    slug: "bio-pest-manager",
    name: "Bio Pest Manager",
    category: "Bio Products",
    categorySlug: "bio-products",
    image: img.fruit,
    gallery: [img.fruit, img.leaves, img.spray],
    shortDescription:
      "Biological pest management solution for safer and sustainable crop protection.",
    description:
      "Supports integrated pest management strategies while reducing reliance on harsh chemical inputs.",
    features: ["Biological approach", "IPM compatible", "Crop safe when used correctly"],
    benefits: ["Supports sustainable farming", "Helps manage pests", "Field friendly"],
    recommendedCrops: ["Vegetables", "Cotton", "Pulses"],
    applicationMethod: "Spray at recommended intervals based on pest pressure.",
    dosage: "As per label",
    packaging: "250ml / 1L",
    storage: "Store cool and away from sunlight.",
    safety: "Follow all label directions carefully.",
    specs: [
      { label: "Type", value: "Bio Pesticide" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Foliar" },
    ],
  },
  {
    id: 12,
    slug: "paddy-rice-seeds",
    name: "Paddy (Rice) Seeds",
    category: "Seeds",
    categorySlug: "seeds",
    image: img.rice,
    gallery: [img.rice, img.field, img.sunrise],
    shortDescription:
      "Quality paddy seeds for strong nursery establishment and healthy field transplant.",
    description:
      "Selected for dependable germination and crop performance suited to major paddy growing regions.",
    features: ["Good germination", "Strong nursery stand", "Reliable variety"],
    benefits: ["Healthy transplants", "Better crop start", "Farmer trusted"],
    recommendedCrops: ["Paddy"],
    applicationMethod: "Nursery raising followed by transplanting.",
    dosage: "As per regional seed rate",
    packaging: "5kg / 10kg",
    storage: "Keep dry and pest-free.",
    safety: "Agricultural sowing use only.",
    specs: [
      { label: "Type", value: "Certified Seed" },
      { label: "Crop", value: "Paddy" },
      { label: "Season", value: "Kharif" },
    ],
  },
  {
    id: 13,
    slug: "systemic-insecticide",
    name: "Systemic Insecticide",
    category: "Crop Medicines",
    categorySlug: "crop-medicines",
    image: img.spray,
    gallery: [img.spray, img.leaves, img.field],
    shortDescription:
      "Systemic insect control for sucking pests across major field and horticulture crops.",
    description:
      "Designed for dependable pest management during critical crop stages with clear usage guidance.",
    features: ["Systemic action", "Sucking pest control", "Multi-crop use"],
    benefits: ["Protects new growth", "Reduces pest pressure", "Supports yield"],
    recommendedCrops: ["Cotton", "Vegetables", "Pulses"],
    applicationMethod: "Foliar spray as directed on the product label.",
    dosage: "As recommended on packaging",
    packaging: "100ml / 250ml / 500ml",
    storage: "Store sealed in a cool, dry place.",
    safety: "Wear protective gear. Follow all label precautions.",
    specs: [
      { label: "Type", value: "Insecticide" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Foliar" },
    ],
  },
  {
    id: 14,
    slug: "foliar-calcium-booster",
    name: "Foliar Calcium Booster",
    category: "Plant Nutrition",
    categorySlug: "plant-nutrition",
    image: img.fruit,
    gallery: [img.fruit, img.leaves, img.packaging],
    shortDescription:
      "Calcium nutrition support for stronger cell walls and better produce quality.",
    description:
      "Helps reduce deficiency-related disorders and supports firmer, healthier harvests.",
    features: ["Calcium enrichment", "Quality support", "Easy foliar use"],
    benefits: ["Better fruit firmness", "Healthier tissue", "Improved market quality"],
    recommendedCrops: ["Tomato", "Fruits", "Vegetables"],
    applicationMethod: "Foliar spray during fruit development stages.",
    dosage: "As advised on label",
    packaging: "250ml / 1L",
    storage: "Keep tightly closed away from sunlight.",
    safety: "Avoid eye contact. Wash hands after use.",
    specs: [
      { label: "Type", value: "Calcium Supplement" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Foliar" },
    ],
  },
  {
    id: 15,
    slug: "soil-conditioner-bio",
    name: "Soil Conditioner Bio",
    category: "Bio Products",
    categorySlug: "bio-products",
    image: img.soilHands,
    gallery: [img.soilHands, img.field, img.seedling],
    shortDescription:
      "Bio soil conditioner that improves soil structure and root-zone vitality.",
    description:
      "Supports sustainable soil health for stronger crop establishment and long-term productivity.",
    features: ["Improves soil structure", "Root-zone support", "Eco-friendly"],
    benefits: ["Better water retention", "Healthier roots", "Sustainable farming"],
    recommendedCrops: ["All major crops"],
    applicationMethod: "Soil drench or mix as recommended.",
    dosage: "Crop and soil dependent",
    packaging: "1L / 5L",
    storage: "Store in shade. Avoid freezing.",
    safety: "Agricultural use only.",
    specs: [
      { label: "Type", value: "Bio Conditioner" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Soil" },
    ],
  },
  {
    id: 16,
    slug: "chili-hybrid-seeds",
    name: "Chili Hybrid Seeds",
    category: "Seeds",
    categorySlug: "seeds",
    image: img.tomato,
    gallery: [img.tomato, img.seedling, img.harvest],
    shortDescription:
      "Hybrid chili seeds selected for vigorous plants and attractive fruit quality.",
    description:
      "A reliable choice for farmers seeking consistent fruiting and strong field performance.",
    features: ["High vigor", "Good fruit set", "Market preferred"],
    benefits: ["Better returns", "Uniform harvest", "Strong plant stand"],
    recommendedCrops: ["Chili"],
    applicationMethod: "Nursery sowing followed by transplanting.",
    dosage: "As per packet instructions",
    packaging: "10g / 50g",
    storage: "Keep airtight in a cool dry place.",
    safety: "For agricultural use only.",
    specs: [
      { label: "Type", value: "Hybrid" },
      { label: "Crop", value: "Chili" },
      { label: "Season", value: "Year-round" },
    ],
  },
  {
    id: 17,
    slug: "contact-fungicide-plus",
    name: "Contact Fungicide Plus",
    category: "Crop Medicines",
    categorySlug: "crop-medicines",
    image: img.wheat,
    gallery: [img.wheat, img.leaves, img.spray],
    shortDescription:
      "Protective contact fungicide for early disease management in field crops.",
    description:
      "Helps safeguard foliage during high-risk weather windows with practical spray guidance.",
    features: ["Contact protection", "Preventive use", "Field proven"],
    benefits: ["Limits disease spread", "Protects canopy", "Supports yield"],
    recommendedCrops: ["Wheat", "Vegetables", "Pulses"],
    applicationMethod: "Preventive foliar spray as per schedule.",
    dosage: "As per label recommendation",
    packaging: "250g / 500g",
    storage: "Keep dry in original packaging.",
    safety: "Avoid inhalation. Follow PPE guidelines.",
    specs: [
      { label: "Type", value: "Fungicide" },
      { label: "Form", value: "Powder / WP" },
      { label: "Usage", value: "Foliar" },
    ],
  },
  {
    id: 18,
    slug: "potassium-enrichment",
    name: "Potassium Enrichment",
    category: "Plant Nutrition",
    categorySlug: "plant-nutrition",
    image: img.packaging,
    gallery: [img.packaging, img.harvest, img.leaves],
    shortDescription:
      "Potassium-rich nutrition to support flowering, fruit fill, and stress tolerance.",
    description:
      "Helps crops achieve better quality and resilience during reproductive growth stages.",
    features: ["High potassium", "Quality enhancement", "Stress support"],
    benefits: ["Better fruit fill", "Improved quality", "Stronger plants"],
    recommendedCrops: ["Fruits", "Vegetables", "Cotton"],
    applicationMethod: "Foliar or fertigation as advised.",
    dosage: "Crop-stage dependent",
    packaging: "1kg / 5kg",
    storage: "Keep sealed and dry.",
    safety: "Avoid dust inhalation. Wash after handling.",
    specs: [
      { label: "Type", value: "Potassium Fertilizer" },
      { label: "Form", value: "Powder / Granular" },
      { label: "Usage", value: "Foliar / Fertigation" },
    ],
  },
  {
    id: 19,
    slug: "bio-nematicide",
    name: "Bio Nematicide",
    category: "Bio Products",
    categorySlug: "bio-products",
    image: img.seedling,
    gallery: [img.seedling, img.soilHands, img.field],
    shortDescription:
      "Biological nematicide support for healthier roots and improved crop establishment.",
    description:
      "An eco-conscious option for managing nematode pressure in susceptible crops.",
    features: ["Biological approach", "Root protection", "IPM friendly"],
    benefits: ["Healthier roots", "Better establishment", "Sustainable input"],
    recommendedCrops: ["Vegetables", "Banana", "Cotton"],
    applicationMethod: "Soil application as recommended on label.",
    dosage: "As per product guidance",
    packaging: "1L / 5L",
    storage: "Store cool and away from sunlight.",
    safety: "Follow label directions carefully.",
    specs: [
      { label: "Type", value: "Bio Nematicide" },
      { label: "Form", value: "Liquid" },
      { label: "Usage", value: "Soil" },
    ],
  },
  {
    id: 20,
    slug: "okra-hybrid-seeds",
    name: "Okra Hybrid Seeds",
    category: "Seeds",
    categorySlug: "seeds",
    image: img.harvest,
    gallery: [img.harvest, img.seedling, img.field],
    shortDescription:
      "Hybrid okra seeds for vigorous plants and continuous picking potential.",
    description:
      "Selected for strong germination and dependable pod production across growing conditions.",
    features: ["Strong germination", "Continuous picking", "High vigor"],
    benefits: ["Better market supply", "Reliable crop stand", "Farmer preferred"],
    recommendedCrops: ["Okra"],
    applicationMethod: "Direct sowing in prepared beds with adequate moisture.",
    dosage: "As per packet guidance",
    packaging: "100g / 250g",
    storage: "Store dry and airtight.",
    safety: "For sowing use only.",
    specs: [
      { label: "Type", value: "Hybrid" },
      { label: "Crop", value: "Okra" },
      { label: "Season", value: "Kharif / Summer" },
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Certified Products",
    description:
      "Quality-assured agricultural inputs sourced and presented with trust and transparency.",
    icon: "BadgeCheck",
  },
  {
    title: "High Germination Rate",
    description:
      "Seed varieties selected for strong establishment and dependable field performance.",
    icon: "Sprout",
  },
  {
    title: "Farmer Trusted",
    description:
      "Built around practical farming needs with guidance that supports better decisions.",
    icon: "Users",
  },
  {
    title: "Quality Assurance",
    description:
      "Every product category is curated for reliability, clarity, and crop-care effectiveness.",
    icon: "ShieldCheck",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Choose Product",
    description: "Browse seeds, crop medicines, nutrition, and bio products.",
  },
  {
    step: "02",
    title: "Consult Expert",
    description: "Talk to our team for crop-specific product guidance.",
  },
  {
    step: "03",
    title: "Improve Farming",
    description: "Apply the right solution with recommended practices.",
  },
  {
    step: "04",
    title: "Better Harvest",
    description: "Grow healthier crops and improve seasonal productivity.",
  },
];

export const testimonials = [
  {
    name: "Ramesh Patel",
    village: "Mehsana, Gujarat",
    review:
      "The hybrid seeds and guidance from Bhumiraj Agro World helped us get a stronger crop stand this season.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Savitri Devi",
    village: "Nashik, Maharashtra",
    review:
      "Genuine products and clear advice. Their crop medicines protected our vegetables during peak season.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Harinder Singh",
    village: "Ludhiana, Punjab",
    review:
      "Professional team and premium quality. Easy to enquire and get the right product for our wheat crop.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 400, suffix: "+", label: "Products" },
  { value: 12000, suffix: "+", label: "Happy Farmers" },
  { value: 24, suffix: "/7", label: "Support" },
];

export const values = [
  {
    title: "Quality First",
    description: "We prioritize product reliability and clear information for every farmer.",
  },
  {
    title: "Farmer Partnership",
    description: "We grow with the farming community through trust and practical support.",
  },
  {
    title: "Sustainable Progress",
    description: "We promote solutions that support productivity and responsible farming.",
  },
  {
    title: "Honest Guidance",
    description: "We help customers choose the right product with transparent recommendations.",
  },
];

export const contactInfo = [
  { icon: Phone, label: "Phone", value: brand.phone, href: brand.phoneHref },
  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { icon: MapPin, label: "Address", value: brand.address },
  { icon: Clock, label: "Working Hours", value: brand.hours },
];

export const images = img;

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(limit = 20) {
  const flagged = products.filter((p) => p.featured);
  if (flagged.length >= limit) return flagged.slice(0, limit);
  return products.slice(0, limit);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}
