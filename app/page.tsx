export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-16 font-mono md:px-12 lg:px-24">
      {/* Header - Name */}
      <header className="mb-24 text-center">
        <h1 className="text-sm font-normal uppercase tracking-widest text-white">
          dinmukhamed amanzhol
        </h1>
      </header>

      {/* About Section */}
      <section className="mx-auto mb-24 max-w-4xl">
        <p className="mb-6 text-2xl font-normal leading-relaxed text-white md:text-3xl lg:text-4xl">
          I&apos;m a software engineer building sexy AI products. At 18, coding
          since 16, designing since 15. Currently building cool landing pages
          for companies solving real problems.
        </p>
        <p className="text-2xl font-normal text-[#6b6b6b] md:text-3xl lg:text-4xl">
          Based in Almaty, Kazakhstan.
        </p>
      </section>

      {/* Three Column Grid */}
      <section className="mx-auto grid max-w-5xl gap-12 md:grid-cols-4">
        {/* Services */}
        <div className="md:col-span-1">
          <h2 className="mb-6 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
            Services
          </h2>
          <ul className="space-y-2 text-sm text-[#9a9a9a]">
            <li>AI Products</li>
            <li>Landing Pages</li>
            <li>Web Applications</li>
            <li>UI/UX Design</li>
            <li>Front-end Development</li>
            <li>Interactive Design</li>
          </ul>
        </div>

        {/* Spacer for visual balance */}
        <div className="hidden md:block md:col-span-1" />

        {/* Experience */}
        <div className="md:col-span-1">
          <h2 className="mb-6 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
            Experience
          </h2>
          <ul className="space-y-2 text-sm text-[#9a9a9a]">
            <li>INO Center</li>
            <li>TrueSpace (EdTech)</li>
            <li>Onai Agency</li>
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-white transition-colors hover:text-[#9a9a9a]"
                tabIndex={0}
                aria-label="View CS & AI studies at IITU"
              >
                CS & AI at IITU
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-1">
          <h2 className="mb-6 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
            Contact
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-[#9a9a9a]">
            Want to discuss a project or idea? Get in touch.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:hello@dinmukhamed.com"
                className="inline-flex items-center gap-1 text-white transition-colors hover:text-[#9a9a9a]"
                tabIndex={0}
                aria-label="Send email"
              >
                hello@dinmukhamed.com
                <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dinmukhamed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white transition-colors hover:text-[#9a9a9a]"
                tabIndex={0}
                aria-label="Visit Twitter profile"
              >
                @dinmukhamed
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
