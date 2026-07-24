import React from 'react'

function Header() {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-30 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div
          className="flex items-center justify-between bg-bg-surface/80 backdrop-blur-lg border border-border rounded-2xl px-6 py-3"
        >
          {/* <!-- Logo --> */}
          <a href="#hero" className="flex items-center space-x-2 group">
            <div
              className="w-10 h-10 rounded-lg overflow-hidden transition-transform group-hover:scale-105"
            >
              <img src="./images/icon.png" alt="SG" className="w-full h-full object-cover" />
            </div>
          </a>

          {/* <!-- Desktop Navigation --> */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#work"
              className="nav-link text-sm text-text-muted hover:text-text-primary transition-colors"
              >Work</a>
            <a
              href="#services"
              className="nav-link text-sm text-text-muted hover:text-text-primary transition-colors"
              >Services</a>
            <a
              href="#about"
              className="nav-link text-sm text-text-muted hover:text-text-primary transition-colors"
              >About</a>
            <a
              href="#contact"
              className="px-4 py-2 bg-accent-teal hover:bg-accent-teal/90 text-white text-sm font-medium rounded-lg transition-colors"
              >Contact</a>
          </div>

          {/* <!-- Mobile Menu Button --> */}
          <button
            id="mobile-menu-btn"
            className="md:hidden p-2 text-text-muted hover:text-text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className="hidden md:hidden mt-4 bg-bg-surface/95 backdrop-blur-lg border border-border rounded-2xl p-6 space-y-4"
        >
          <a
            href="#work"
            className="block text-text-muted hover:text-text-primary transition-colors"
            >Work</a>
          <a
            href="#services"
            className="block text-text-muted hover:text-text-primary transition-colors"
            >Services</a>
          <a
            href="#about"
            className="block text-text-muted hover:text-text-primary transition-colors"
            >About</a>
          <a
            href="#contact"
            className="block px-4 py-2 bg-accent-teal hover:bg-accent-teal/90 text-white text-sm font-medium rounded-lg transition-colors text-center"
            >Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Header