"use client";

import { Fragment, FormEvent, useState } from "react";

type Step = 1 | 2 | 3;

const serviceOptions = [
  "UPS System Installation & Supply",
  "UPS Battery Replacement & Supply",
  "Standby Generator Installation",
  "UPS Maintenance & Support",
  "Free Power Protection Site Surveys",
  "Full Electrical Installation & Commissioning",
  "Other",
];

const sectorOptions = [
  "Hospitals & Healthcare",
  "Universities & Education",
  "Local Government",
  "Corporate Organisations",
  "IT Resellers & Contractors",
  "Small & Medium Businesses",
  "Other",
];

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Power+Protection+Services+Ltd%2C+Unit+2+Neates+Yard%2C+Hungerford%2C+Berkshire+RG17+0NB";

const ContactSection = () => {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    service: "",
    sector: "",
    location: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    preferredContact: "email",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validateStep = (currentStep: Step) => {
    const nextErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.service) {
        nextErrors.service = "Please select a service.";
      }
    }

    if (currentStep === 2) {
      if (!formData.sector) {
        nextErrors.sector = "Please select your sector.";
      }
      if (!formData.location.trim()) {
        nextErrors.location = "Please tell us where you are based.";
      }
    }

    if (currentStep === 3) {
      if (!formData.name.trim()) {
        nextErrors.name = "Please enter your name.";
      }
      if (formData.preferredContact === "email" && !formData.email.trim()) {
        nextErrors.email = "Please enter your email address.";
      }
      if (formData.preferredContact === "phone" && !formData.phone.trim()) {
        nextErrors.phone = "Please enter your phone number.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNextStep = () => {
    if (!validateStep(step)) {
      return;
    }
    setStep((prev) => (prev < 3 ? ((prev + 1) as Step) : prev));
  };

  const handlePreviousStep = () => {
    setErrors({});
    setStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep(3)) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#EEF3FB]">
      <div className="pointer-events-none absolute right-[-14rem] top-20 h-96 w-96 rounded-full border border-[#d3dced]" />
      <div className="mx-auto grid max-w-[1252px] gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            Get a Free UPS Quote
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3f4e6e]">
            Tell us about your UPS, generator or emergency lighting
            requirements and we&apos;ll respond within one business day with
            honest, unbiased advice.
          </p>
          <div className="mt-8 space-y-4 rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[#4f6287]">
              Direct Contact
            </p>
            <a
              href="mailto:contact@powerprotectionservices.co.uk"
              className="flex items-center gap-2 text-base text-[#0b1324] transition-colors hover:text-[#0066ff]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 stroke-current"
              >
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" strokeWidth="1.8" />
                <path d="M4.5 7.5 12 13l7.5-5.5" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span>contact@powerprotectionservices.co.uk</span>
            </a>
            <a
              href="tel:01488685207"
              className="flex items-center gap-2 text-base text-[#0b1324] transition-colors hover:text-[#0066ff]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 stroke-current"
              >
                <path
                  d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              <span>01488 685207</span>
            </a>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-start gap-2 text-base text-[#0b1324] transition-colors hover:text-[#0066ff]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 stroke-current"
              >
                <path
                  d="M12 21s-5.5-4.7-5.5-9.3a5.5 5.5 0 1 1 11 0C17.5 16.3 12 21 12 21Z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="11.7" r="2.1" strokeWidth="1.8" />
              </svg>
              <span className="leading-relaxed">
                Power Protection Services Ltd
                <br />
                Unit 2 Neates Yard
                <br />
                Hungerford
                <br />
                Berkshire RG17 0NB
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6 sm:p-8"
        >
          {!submitted ? (
            <>
              <div className="mb-6 flex w-full items-center">
                {[1, 2, 3].map((index) => {
                  const isActive = step === index;
                  const isComplete = step > index;

                  return (
                    <Fragment key={index}>
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                          isActive || isComplete
                            ? "bg-[#0066ff] text-white"
                            : "bg-[#e4ebf7] text-[#64799f]"
                        }`}
                      >
                        {index}
                      </span>
                      {index < 3 ? (
                        <span
                          className={`mx-3 h-1 flex-1 rounded-full ${
                            step > index ? "bg-[#0066ff]" : "bg-[#d4ddee]"
                          }`}
                        />
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>

              {step === 1 ? (
                <div>
                  <label className="text-sm text-[#41547a]">
                    Which service are you interested in?
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(event) => updateField("service", event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  {errors.service ? (
                    <p className="mt-2 text-sm text-[#b42318]">{errors.service}</p>
                  ) : null}
                </div>
              ) : null}

              {step === 2 ? (
                <div className="grid gap-4">
                  <label className="text-sm text-[#41547a]">
                    What sector are you in?
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={(event) => updateField("sector", event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    >
                      <option value="">Select your sector</option>
                      {sectorOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  {errors.sector ? (
                    <p className="-mt-2 text-sm text-[#b42318]">{errors.sector}</p>
                  ) : null}

                  <label className="text-sm text-[#41547a]">
                    Where are you based?
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={(event) => updateField("location", event.target.value)}
                      placeholder="Town / City / Region"
                      className="mt-2 h-12 w-full rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    />
                  </label>
                  {errors.location ? (
                    <p className="-mt-2 text-sm text-[#b42318]">{errors.location}</p>
                  ) : null}
                </div>
              ) : null}

              {step === 3 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm text-[#41547a]">
                    Name
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    />
                    {errors.name ? (
                      <span className="mt-2 block text-sm text-[#b42318]">{errors.name}</span>
                    ) : null}
                  </label>

                  <label className="text-sm text-[#41547a]">
                    Company (optional)
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(event) => updateField("company", event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    />
                  </label>

                  <label className="text-sm text-[#41547a]">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    />
                    {errors.email ? (
                      <span className="mt-2 block text-sm text-[#b42318]">{errors.email}</span>
                    ) : null}
                  </label>

                  <label className="text-sm text-[#41547a]">
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    />
                    {errors.phone ? (
                      <span className="mt-2 block text-sm text-[#b42318]">{errors.phone}</span>
                    ) : null}
                  </label>

                  <fieldset className="sm:col-span-2">
                    <legend className="text-sm text-[#41547a]">
                      How would you prefer to be contacted?
                    </legend>
                    <div className="mt-3 flex flex-wrap gap-5">
                      <label className="inline-flex items-center gap-2 text-sm text-[#0b1324]">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={(event) =>
                            updateField("preferredContact", event.target.value)
                          }
                          className="h-4 w-4 accent-[#0066ff]"
                        />
                        Email
                      </label>
                      <label className="inline-flex items-center gap-2 text-sm text-[#0b1324]">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={(event) =>
                            updateField("preferredContact", event.target.value)
                          }
                          className="h-4 w-4 accent-[#0066ff]"
                        />
                        Phone
                      </label>
                      <label className="inline-flex items-center gap-2 text-sm text-[#0b1324]">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="dont-mind"
                          checked={formData.preferredContact === "dont-mind"}
                          onChange={(event) =>
                            updateField("preferredContact", event.target.value)
                          }
                          className="h-4 w-4 accent-[#0066ff]"
                        />
                        I don&apos;t mind
                      </label>
                    </div>
                  </fieldset>

                  <label className="sm:col-span-2 text-sm text-[#41547a]">
                    Message (optional)
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      className="mt-2 w-full resize-y rounded-md border border-[#d3dced] bg-[#eef3fb] px-3 py-2 text-[#0b1324] outline-none transition-colors focus:border-[#0066ff]"
                    />
                  </label>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="btn-tertiary"
                  >
                    Back
                  </button>
                ) : null}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-primary"
                  >
                    Continue
                  </button>
                ) : (
                  <button type="submit" className="btn-primary">
                    Submit
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-[#d6dff0] bg-[#eef3fb] p-6">
              <p className="text-2xl font-semibold text-[#0b1324]">Thank you</p>
              <p className="mt-3 text-base leading-relaxed text-[#41547a]">
                Thank you for submitting. We will get back to you as soon as
                possible.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
