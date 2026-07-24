import React from 'react'

function Hero() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section
        id="hero"
        className="min-h-screen flex items-start justify-center px-6 pt-24"
        style={{backgroundImage: "url(./images/square.svg)"}}
      >
        <div className="flex flex-col md:flex-row relative max-w-6xl mx-auto reveal w-full justify-between pt-10">
          <div className="flex flex-col justify-center md:justify-start text-center md:text-left gap-4 mt-0">
            <h1
              className="text-5xl mt-4 md:text-7xl font-bold mb-0 bg-gradient-to-r from-text-primary to-text-muted bg-clip-text text-transparent"
            >
              Allan Cabusora
            </h1>

            <p className="text-xl md:text-2xl text-text-muted mb-6">
              Web Developer / Full Stack Developer
            </p>

            <p className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
              I build modern, scalable and <br />high-performance web applications that deliver real value.
            </p>

            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              I'm a Full Stack Developer from Davao City, Philippines specializing in
              ReactJS and PHP (Laravel). I'm passionate about thoughtful design, seamless interactions, 
              and meticulous execution—creating interfaces that are technically robust and genuinely enjoyable to use.
            </p>

            <div className="flex sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#work"
                className="px-8 py-4 bg-accent-teal hover:bg-accent-teal/90 text-white font-medium rounded-lg transition-all hover:scale-105"
                >View Work</a>
              <a
                href="#contact"
                className="px-8 py-4 bg-bg-surface hover:bg-bg-surface/80 border border-border text-text-primary font-medium rounded-lg transition-all hover:scale-105"
                >Contact Me</a>
            </div>
          </div>
      
          {/* <!-- Pixel Avatar --> */}
          <div className="flex justify-center relative order-first md:order-last">

            <div className="absolute inset-0 pointer-events-none z-0">
              <div
                id="glow-1"
                className="absolute w-[50vw] h-[60vh] bg-accent-cyan/10 rounded-full blur-3xl animate-glow-pulse"
                style={{top: '10%', left: '-20%'}}
              ></div>
              <div
                id="glow-2"
                className="absolute w-96 h-96 bg-accent-green/10 rounded-full blur-3xl xanimate-glow-pulse"
                style={{top: '50%', right: '20%', animationDelay: '2s'}}
              ></div>
            </div>
            <div
              className="relative z-10 py-12 md:py-0 w-[240px] md:w-[460px] h-auto xbg-gradient-to-br from-accent-teal to-accent-cyan rounded-2xl p-1 -translate-1/2"
            >
              <div className="w-full h-full xbg-bg-surface rounded-xl overflow-hidden">
                <img 
                  src="./images/avatar.png" 
                  alt="Allan Cabusora - Mini" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Hero