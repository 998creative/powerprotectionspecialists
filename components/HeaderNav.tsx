const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Why Us", href: "#why-us" },
];

const HeaderNav = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090b12]/85 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-base font-semibold tracking-[0.08em] text-white">
          POWER PROTECTION EXPERTS
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-[#0066ff] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0052cc]"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default HeaderNav;
