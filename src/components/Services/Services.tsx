import React from 'react'

function ServiceIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-current/10 flex items-center justify-center mb-4">
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </div>
  )
}

function Services() {
  return (
    <>

      <section id="services" className="py-24 px-6 bg-bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 reveal">
            <p className="text-xs font-mono text-accent-teal uppercase tracking-wider mb-4">
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Web Development Services
            </h2>
            <p className="text-text-muted text-lg max-w-2xl">
              I design and build fast, reliable web products—from polished
              interfaces to scalable backends and everything in between.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-purple">
                <ServiceIcon>
                  <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Custom Web Applications</h3>
              <p className="text-sm text-text-muted">
                Fast, maintainable applications built around your product and users
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-cyan">
                <ServiceIcon>
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">React & PHP Development</h3>
              <p className="text-sm text-text-muted">
                Modern React frontends and dependable PHP-powered backends
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-purple">
                <ServiceIcon>
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Design-to-Code Development</h3>
              <p className="text-sm text-text-muted">
                Precise, responsive interfaces brought from Figma to production
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-purple">
                <ServiceIcon>
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 11 2 2 4-4M8 17h8" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Forms & Workflow Systems</h3>
              <p className="text-sm text-text-muted">
                Intuitive multi-step forms with validation, logic, and state management
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-cyan">
                <ServiceIcon>
                  <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Dashboards & Admin Portals</h3>
              <p className="text-sm text-text-muted">
                Clear, data-rich tools for analytics, operations, and content management
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-purple">
                <ServiceIcon>
                  <rect width="14" height="20" x="5" y="2" rx="2" />
                  <path d="M9 18h6" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Responsive & Accessible UI</h3>
              <p className="text-sm text-text-muted">
                Inclusive, mobile-first experiences that work across devices
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-cyan">
                <ServiceIcon>
                  <path d="m13 2-2 2.5M18 7l2.5-2M14 8l2 2M5 19c-1.5 1-3 0-3 0s-1-1 0-3l3-3 3 3Z" />
                  <path d="M9 15 5 11l7-7c3-3 8-2 8-2s1 5-2 8l-7 7Z" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Speed & Performance</h3>
              <p className="text-sm text-text-muted">
                Faster load times, smoother interactions, and leaner application bundles
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-purple">
                <ServiceIcon>
                  <path d="m12 16 4-4-4-4M8 12h8M5 5v14M19 5v14" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Third-Party Integrations</h3>
              <p className="text-sm text-text-muted">
                Seamless connections to external APIs, platforms, and data sources
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-cyan">
                <ServiceIcon>
                  <path d="M12 2a3 3 0 0 0-3 3v2H7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v2a3 3 0 0 0 6 0v-2h2a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3Z" />
                  <path d="M9 12h6" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Backend & API Development</h3>
              <p className="text-sm text-text-muted">
                Secure, scalable APIs with clean architecture and authentication
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-purple">
                <ServiceIcon>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">End-to-End Product Development</h3>
              <p className="text-sm text-text-muted">
                Complete feature delivery across frontend, backend, and deployment
              </p>
            </div>

            <div
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-accent-teal/30 transition-all reveal"
            >
              <div className="text-accent-cyan">
                <ServiceIcon>
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
                </ServiceIcon>
              </div>
              <h3 className="text-base font-semibold mb-2">Database Architecture</h3>
              <p className="text-sm text-text-muted">
                Well-structured SQL and NoSQL data models built to scale
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
