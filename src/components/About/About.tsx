import React from 'react'

function About() {
  return (
    <>
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 reveal">
            <p className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              From Complex Ideas to Simple Experiences
            </h2>
          </div>

          <div className="space-y-6 text-lg text-text-muted leading-relaxed reveal">
            <p>
              I'm a full-stack developer from <strong className="text-text-primary">Davao City, Philippines</strong>, 
              focused on building modern, reliable web applications from end to end. 
              I work across technologies such as ReactJS on the frontend, with Node.js, Laravel, and REST APIs powering the backend.
            </p>

            <p>
              I've delivered complex projects ranging from investment platforms and Web3 governance applications 
              to medical information systems. Across every project, I prioritize 
              <strong className="text-text-primary"> usability, performance, scalability, and code quality</strong>.
            </p>

            <p>
              My work is guided by attention to detail and a strong appreciation for precision, structure, and timing. 
              I care deeply about writing clean, maintainable code and delivering complete 
              solutions that function reliably across the entire stack. 
              Every project is an opportunity to solve meaningful problems through elegant, carefully crafted software.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 reveal">
            <div className="bg-bg-surface border border-border rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-accent-magenta mb-2">10+</p>
              <p className="text-sm text-text-muted">Years Experience</p>
            </div>
            <div className="bg-bg-surface border border-border rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-accent-cyan mb-2">10+</p>
              <p className="text-sm text-text-muted">Projects Delivered</p>
            </div>
            <div className="bg-bg-surface border border-border rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-accent-purple mb-2">100%</p>
              <p className="text-sm text-text-muted">Commitment to Quality</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About