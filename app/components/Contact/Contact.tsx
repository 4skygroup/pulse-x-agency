import ContactForm from "./ContactForm";
import ContactInfoCards from "./ContactInfoCard";

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-pulse-pink px-6 py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Let&apos;s elevate your brand!
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
              Whether you are a talent looking for representation or a brand
              seeking impactful partnerships, our team is ready to help. Contact
              us using the method that works best for you.
            </p>
          </div>

          <ContactInfoCards />
        </div>

        {/* ── Right column ── */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

<div>
  <h2 className="text-t3 font-bold leading-tight tracking-tight text-white md:text-h6">
    Let&apos;s elevate your brand!
  </h2>
  <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
    Whether you are a talent looking for representation or a brand seeking
    impactful partnerships, our team is ready to help. Contact us using the
    method that works best for you.
  </p>
</div>;
