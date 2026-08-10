import { brand } from "../data/site";

export const metadata = {
  title: "Terms",
  description: `Terms of use for ${brand.name}`,
};

export default function TermsPage() {
  return (
    <div className="bg-bg pt-24">
      <div className="container-site max-w-3xl py-10 sm:py-14">
        <h1 className="font-display text-2xl font-600 text-ink sm:text-3xl">Terms</h1>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:mt-6">
          <p>
            Product information on this website is provided for enquiry and
            reference purposes. Availability and specifications may vary and
            should be confirmed with our team before purchase decisions.
          </p>
          <p>
            {brand.name} focuses on agricultural product information and customer
            support. Online checkout is not currently offered on this website.
          </p>
          <p>
            For clarification on any product or service terms, contact us at{" "}
            {brand.phoneDisplay} or {brand.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
