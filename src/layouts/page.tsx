import React, { useEffect } from 'react'
import Header from '../partials/Header/Header'
import Hero from '../components/Hero/Hero'
import MouseGlow from '../components/MouseGlow/MouseGlow';
import Works from '../components/Works/Works';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

function Page() {

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const revealElements = document.querySelectorAll(".reveal");

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");

          // Stop observing after it is revealed
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup when leaving the page
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
        <MouseGlow />

        {/* <!-- Main Content --> */}
        <main className="relative z-10">

            <Header />
            
            <Hero />

            <Works />

            <Services />

            <About />

            <Contact />
        </main>

    </>
  )
}

export default Page