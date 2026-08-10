import { brand } from "../data/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${brand.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="bg-bg pt-24">
      <div className="container-site max-w-3xl py-14">
        <h1 className="font-display text-3xl font-600 text-ink">Privacy Policy</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            {brand.name} respects your privacy. Information shared through enquiry
            forms or direct contact is used only to respond to product and
            service requests.
          </p>
          <p>
            We do not sell personal information. Contact details are retained
            only as needed for communication and customer support.
          </p>
          <p>
            For privacy-related questions, email us at {brand.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
