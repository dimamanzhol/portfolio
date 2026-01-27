export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-16 font-mono md:px-12 lg:px-24">
      {/* Header - Name */}
      <header className="mb-24 text-center animate-fade-in">
        <h1 className="text-sm font-normal uppercase tracking-widest text-white">
          dinmukhamed amanzhol
        </h1>
      </header>

      {/* About Section */}
      <section className="mx-auto mb-24 max-w-4xl animate-fade-in animate-delay-100">
        <p className="mb-6 text-2xl font-normal leading-relaxed text-white md:text-3xl lg:text-4xl">
          I’m a software engineer obsessed with building beautiful products.
          Started coding at 16. Designing at 15. Now I build products — from AI
          systems to landing pages — for companies that don’t play games. Sexy
          products. Real impact. Zero bullshit.
        </p>
        <p className="text-2xl font-normal text-[#6b6b6b] md:text-3xl lg:text-4xl">
          Based in Almaty, Kazakhstan.
        </p>
      </section>

      {/* Two Column Grid */}
      <section className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 animate-fade-in animate-delay-200">
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
                href="https://www.instagram.com/dimamanzhol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white transition-colors hover:text-[#9a9a9a]"
                tabIndex={0}
                aria-label="Visit Instagram profile"
              >
                Instagram
                <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dinmukhamed-amanzhol-686865359/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white transition-colors hover:text-[#9a9a9a]"
                tabIndex={0}
                aria-label="Visit LinkedIn profile"
              >
                LinkedIn
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
                aria-label="Visit X profile"
              >
                X
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-32 animate-fade-in animate-delay-300">
        {/* Project 1 - Armeta */}
        <article className="mb-24 grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Left - Project Preview */}
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-[#1a1a1a]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/armeta-portfolio.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right - Project Details */}
          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
                tabIndex={0}
                aria-label="Visit Armeta project"
              >
                armeta.ai
                <span aria-hidden="true">↗</span>
              </a>

              <h3 className="mb-4 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                About
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#9a9a9a]">
                Armeta is a modern, Next.js-based marketing website for an
                AI-powered platform that automates construction and engineering
                project reviews. The project is built as a high-performance,
                visually appealing single-page application showcasing Armeta's
                core value proposition.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Summary
                  </h4>
                  <ul className="space-y-1 text-sm text-[#9a9a9a]">
                    <li>• AI Construction Reviews</li>
                    <li>• Marketing Website</li>
                    <li>• Next.js</li>
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
                    aria-label="Visit live Armeta project"
                  >
                    armeta.ai
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
                  <p className="text-sm text-[#9a9a9a]">Armeta Team</p>
                </div>
              </div>
            </div>

            <a
              href="#project2"
              className="mt-8 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
              tabIndex={0}
              aria-label="Jump to next project"
            >
              Jump to next project
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </article>

        {/* Project 2 - Yoink */}
        <article
          id="project2"
          className="mb-24 grid gap-8 lg:grid-cols-[2fr_1fr]"
        >
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-[#1a1a1a]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/yoink-portfolio.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
                tabIndex={0}
                aria-label="Visit Yoink project"
              >
                yoink.app
                <span aria-hidden="true">↗</span>
              </a>

              <h3 className="mb-4 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                About
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#9a9a9a]">
                Yoink is an AI-powered web development platform that enables
                users to build, edit, and publish landing pages through a visual
                editor with AI assistance. It's a Next.js application with
                Supabase backend that provides a terminal-inspired interface for
                creating studio-quality websites.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Summary
                  </h4>
                  <ul className="space-y-1 text-sm text-[#9a9a9a]">
                    <li>• AI Web Builder</li>
                    <li>• Visual Editor</li>
                    <li>• Next.js + Supabase</li>
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
                    aria-label="Visit live Yoink project"
                  >
                    yoink.app
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
                  <p className="text-sm text-[#9a9a9a]">Yoink Team</p>
                </div>
              </div>
            </div>

            <a
              href="#project3"
              className="mt-8 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
              tabIndex={0}
              aria-label="Jump to next project"
            >
              Jump to next project
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </article>

        {/* Project 3 - Knewit */}
        <article
          id="project3"
          className="mb-24 grid gap-8 lg:grid-cols-[2fr_1fr]"
        >
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-[#1a1a1a]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/knewit-portfolio.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
                tabIndex={0}
                aria-label="Visit Knewit project"
              >
                knewit.com
                <span aria-hidden="true">↗</span>
              </a>

              <h3 className="mb-4 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                About
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#9a9a9a]">
                KnewIT is a modern coding school platform based in Kazakhstan,
                built as a Next.js application with a comprehensive landing page
                and student dashboard system.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Summary
                  </h4>
                  <ul className="space-y-1 text-sm text-[#9a9a9a]">
                    <li>• Coding School Platform</li>
                    <li>• Student Dashboard</li>
                    <li>• Landing Page</li>
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
                    aria-label="Visit live Knewit project"
                  >
                    knewit.com
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
                  <p className="text-sm text-[#9a9a9a]">Knewit Team</p>
                </div>
              </div>
            </div>

            <a
              href="#project4"
              className="mt-8 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
              tabIndex={0}
              aria-label="Jump to next project"
            >
              Jump to next project
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </article>

        {/* Project 4 - Prompt Optimizer */}
        <article
          id="project4"
          className="mb-24 grid gap-8 lg:grid-cols-[2fr_1fr]"
        >
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-[#1a1a1a]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/promptoptimizerdemodemo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
                tabIndex={0}
                aria-label="Visit Prompt Optimizer project"
              >
                promptoptimizer.ai
                <span aria-hidden="true">↗</span>
              </a>

              <h3 className="mb-4 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                About
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#9a9a9a]">
                AI tool that helps users craft better prompts for LLMs through
                intelligent optimization and real-time suggestions.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Summary
                  </h4>
                  <ul className="space-y-1 text-sm text-[#9a9a9a]">
                    <li>• AI Prompt Enhancement</li>
                    <li>• Real-time Suggestions</li>
                    <li>• Template Library</li>
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
                    aria-label="Visit live Prompt Optimizer project"
                  >
                    promptoptimizer.ai
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
                  <p className="text-sm text-[#9a9a9a]">Open Source</p>
                </div>
              </div>
            </div>

            <a
              href="#project5"
              className="mt-8 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
              tabIndex={0}
              aria-label="Jump to next project"
            >
              Jump to next project
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </article>

        {/* Project 5 - Stage */}
        <article
          id="project5"
          className="mb-24 grid gap-8 lg:grid-cols-[2fr_1fr]"
        >
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-[#1a1a1a]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/stagevision-portflio.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#6b6b6b] transition-colors hover:text-white"
                tabIndex={0}
                aria-label="Visit Stage project"
              >
                stage.app
                <span aria-hidden="true">↗</span>
              </a>

              <h3 className="mb-4 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                About
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#9a9a9a]">
                Revolutionary platform for live performances and virtual events,
                bringing artists and audiences together in immersive digital
                spaces.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-normal uppercase tracking-widest text-[#6b6b6b]">
                    Summary
                  </h4>
                  <ul className="space-y-1 text-sm text-[#9a9a9a]">
                    <li>• Live Performance Platform</li>
                    <li>• Virtual Events</li>
                    <li>• Real-time Streaming</li>
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
                    aria-label="Visit live Stage project"
                  >
                    stage.app
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
                  <p className="text-sm text-[#9a9a9a]">Stage Team</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
