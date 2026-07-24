import React from 'react'

function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-xs font-mono text-accent-teal uppercase tracking-wider mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Something On Your Mind?
            </h2>
            <p className="text-text-muted text-lg">
              Available for full-stack development projects and collaborations.
            </p>
          </div>

          <div
            className="bg-bg-surface border border-border rounded-2xl p-8 md:p-12 reveal"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <p className="text-sm font-mono text-text-muted uppercase mb-3">
                  Email
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <a
                    href="mailto:yiu.ascex@gmail.com"
                    className="text-lg text-text-primary hover:text-accent-purple transition-colors"
                    >yiu.ascex@gmail.com</a>
                  <button
                    id="copy-email-btn"
                    className="p-2 hover:bg-bg-primary rounded-lg transition-colors hidden"
                    aria-label="Copy email"
                    title="Copy email"
                  >
                    <svg
                      className="w-4 h-4 text-text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm font-mono text-text-muted uppercase mb-3">
                  Location
                </p>
                <p className="text-lg text-text-primary">
                  Davao City, Philippines 🇵🇭
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              <p className="text-sm font-mono text-text-muted uppercase mb-4">
                Links
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://github.com/AsCEX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-bg-primary hover:bg-bg-primary/80 border border-border rounded-lg transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/ascex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-bg-primary hover:bg-bg-primary/80 border border-border rounded-lg transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-bg-primary hover:bg-bg-primary/80 border border-border rounded-lg transition-all hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Resume</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-0 border-border text-center">
              <a
                href="mailto:yiu.ascex@gmail.com"
                className="inline-block px-8 py-4 bg-accent-teal hover:bg-accent-teal/90 text-white font-medium rounded-lg transition-all hover:scale-105"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact