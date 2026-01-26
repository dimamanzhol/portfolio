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
                href="mailto:dimamanzhol@gmail.com"
                className="inline-flex items-center gap-1 text-white transition-colors hover:text-[#9a9a9a]"
                tabIndex={0}
                aria-label="Send email"
              >
                dimamanzhol@gmail.com
                <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/dimamanzhol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white transition-colors hover:text-[#9a9a9a]"
                tabIndex={0}
                aria-label="Visit Twitter profile"
              >
                @dimamanzhol
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-32">
        {/* Project 1 */}
        <article className="mb-24 grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Left - Project Preview */}
          <div className="aspect-video w-full bg-[#f5f5f5]">
            {/* Placeholder for project image/video */}
            <div className="flex h-full items-center justify-center text-[#9a9a9a]">
              Project Preview
            </div>
          </div>

          {/* Right - Project Details */}
          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
                tabIndex={0}
                aria-label="Visit project website"
              >
                projectname.com
                <span aria-hidden="true">↗</span>
              </a>

              <h3 className="mb-4 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                About
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#9a9a9a]">
                Website designed to feel fast without sacrificing animations.
                Each page features an initial load animation, ensuring instant
                navigation while maintaining a smooth experience.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Summary
                  </h4>
                  <ul className="space-y-1 text-sm text-[#9a9a9a]">
                    <li>• Interactive animation</li>
                    <li>• Reveal animations</li>
                    <li>• Smooth transitions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    View project
                  </h4>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-[#9a9a9a]"
                    tabIndex={0}
                    aria-label="Visit live project"
                  >
                    projectname.com
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Year
                  </h4>
                  <p className="text-sm text-[#9a9a9a]">2025</p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    With
                  </h4>
                  <p className="text-sm text-[#9a9a9a]">Client Name</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
              tabIndex={0}
              aria-label="Jump to next project"
            >
              Jump to next project
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </article>

        {/* Project 2 */}
        <article className="mb-24 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="aspect-video w-full bg-[#f5f5f5]">
            <div className="flex h-full items-center justify-center text-[#9a9a9a]">
              Project Preview
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
                tabIndex={0}
                aria-label="Visit project website"
              >
                anotherproject.com
                <span aria-hidden="true">↗</span>
              </a>

              <h3 className="mb-4 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                About
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#9a9a9a]">
                Description of another project. What problem it solves and the
                approach taken to build it.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Summary
                  </h4>
                  <ul className="space-y-1 text-sm text-[#9a9a9a]">
                    <li>• Feature one</li>
                    <li>• Feature two</li>
                    <li>• Feature three</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    View project
                  </h4>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-[#9a9a9a]"
                    tabIndex={0}
                    aria-label="Visit live project"
                  >
                    anotherproject.com
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Year
                  </h4>
                  <p className="text-sm text-[#9a9a9a]">2024</p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    With
                  </h4>
                  <p className="text-sm text-[#9a9a9a]">Client Name</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
              tabIndex={0}
              aria-label="Jump to next project"
            >
              Jump to next project
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
