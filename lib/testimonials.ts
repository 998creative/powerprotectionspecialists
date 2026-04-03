export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Power Protection Services gave us independent options, not a one-brand sales pitch. They modelled multiple UPS and battery combinations against our actual load profile, explained the trade-offs clearly, and delivered an installation that was completed on programme with minimal disruption to teaching facilities.",
    name: "Head of IT Infrastructure",
    role: "University Sector",
    company: "Education Client",
  },
  {
    quote:
      "From initial survey to commissioning, everything was handled by one accountable team. The project plan, RAMS documentation and handover pack were all well structured, and their response times during and after installation have been consistently fast and reliable.",
    name: "Facilities Manager",
    role: "Healthcare",
    company: "NHS Partner Site",
  },
  {
    quote:
      "Their maintenance support has materially reduced risk across our estate. Preventive visits are proactive, reporting is clear, and any faults are prioritised quickly, which has given us far greater confidence in our backup power resilience during critical service windows.",
    name: "Operations Director",
    role: "Local Government",
    company: "Council Services",
  },
  {
    quote:
      "The project team planned around a live environment with strict uptime requirements and delivered without service interruption. They coordinated access carefully with our operations team, phased the works sensibly, and kept stakeholders updated at every stage of the project.",
    name: "Data Centre Manager",
    role: "Corporate Organisation",
    company: "Enterprise Client",
  },
  {
    quote:
      "They helped us select the right UPS and battery package for our customers’ load profiles rather than pushing the highest-cost option. That technical clarity has improved our own proposals, reduced lifecycle cost surprises, and strengthened client trust in our recommendations.",
    name: "Procurement Lead",
    role: "IT Reseller",
    company: "Channel Partner",
  },
  {
    quote:
      "Survey quality was excellent and the commissioning paperwork was complete and easy to audit. Their engineers documented test results and certification details to a high standard, which made compliance sign-off straightforward for our internal governance and external reviewers.",
    name: "Site Operations Manager",
    role: "Healthcare",
    company: "Private Hospital Group",
  },
];
