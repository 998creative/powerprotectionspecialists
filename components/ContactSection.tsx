const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0f]">
      <div className="pointer-events-none absolute right-[-14rem] top-20 h-96 w-96 rounded-full border border-white/10" />
      <div className="mx-auto grid max-w-[1252px] gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get a Free UPS Quote
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#c8c8d0]">
            Tell us about your UPS, generator or emergency lighting
            requirements and we&apos;ll respond within one business day with
            honest, unbiased advice.
          </p>
          <div className="mt-8 space-y-4 rounded-2xl border border-[#1e1e2e] bg-[#13131f] p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[#0066ff]">
              Direct Contact
            </p>
            <p className="text-base text-[#c8c8d0]">
              Email: contact@powerprotectionexperts.co.uk
            </p>
            <p className="text-base text-[#c8c8d0]">
              Phone: 01488 685207
            </p>
          </div>
        </div>

        <form className="rounded-2xl border border-[#1e1e2e] bg-[#13131f] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-[#c8c8d0]">
              Name
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-md border border-[#1e1e2e] bg-[#0f0f1a] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
            <label className="text-sm text-[#c8c8d0]">
              Company
              <input
                type="text"
                name="company"
                className="mt-2 w-full rounded-md border border-[#1e1e2e] bg-[#0f0f1a] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
            <label className="text-sm text-[#c8c8d0]">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-md border border-[#1e1e2e] bg-[#0f0f1a] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
            <label className="text-sm text-[#c8c8d0]">
              Phone
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-md border border-[#1e1e2e] bg-[#0f0f1a] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm text-[#c8c8d0]">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-md border border-[#1e1e2e] bg-[#0f0f1a] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0066ff] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0052cc]"
          >
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
