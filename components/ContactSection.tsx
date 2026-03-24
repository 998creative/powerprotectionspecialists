const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#090c13]">
      <div className="pointer-events-none absolute right-[-14rem] top-20 h-96 w-96 rounded-full border border-white/10" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
            Tell us about your requirements and we&apos;ll come back with
            honest, unbiased advice.
          </p>
          <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-[#0f141f] p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">
              Direct Contact
            </p>
            <p className="text-base text-zinc-100">
              Email: contact@powerprotectionexperts.co.uk (placeholder)
            </p>
            <p className="text-base text-zinc-100">
              Phone: +44 (0)20 0000 0000 (placeholder)
            </p>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-[#0f141f] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-zinc-300">
              Name
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-md border border-white/15 bg-[#0b1018] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
            <label className="text-sm text-zinc-300">
              Company
              <input
                type="text"
                name="company"
                className="mt-2 w-full rounded-md border border-white/15 bg-[#0b1018] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
            <label className="text-sm text-zinc-300">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-md border border-white/15 bg-[#0b1018] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
            <label className="text-sm text-zinc-300">
              Phone
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-md border border-white/15 bg-[#0b1018] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm text-zinc-300">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-md border border-white/15 bg-[#0b1018] px-3 py-2 text-zinc-100 outline-none transition-colors focus:border-[#0066ff]"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0066ff] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0052cc]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
