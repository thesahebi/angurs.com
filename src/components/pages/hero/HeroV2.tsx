import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function HeroV2() {
  // Add proper typing to the refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Create a timeline for smooth sequential animations
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1
      }
    });

    // Initial setup - set elements to invisible
    gsap.set([titleRef.current, subtitleRef.current, taglineRef.current, buttonRef.current, imageRef.current], {
      opacity: 0,
      y: 50
    });

    // Animation sequence
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(imageRef.current,
      { opacity: 0, y: 50, scale: 1.2 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 },
      "-=0.6"
    );

    // Handle button hover animations using GSAP instead of event listeners
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3
      });

      // Create hover effect using GSAP's from/to
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 0.3
        });
      });

      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3
        });
      });
    }

    // Cleanup function
    return () => {
      if (buttonRef.current) {
        const button = buttonRef.current;
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="relative pt-100 py-12 sm:py-16 lg:pt-40 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p ref={taglineRef} className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">
              A Digital Creative Agency
            </p>
            <h1 ref={titleRef} className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Angurs Talented Force LLC
            </h1>
            <p ref={subtitleRef} className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">
              Angurs Web Boost Solutions: Helping Small Businesses Get Online
              and Grow
            </p>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <a
                ref={buttonRef}
                href="tel:+16309234653"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-ubun font-pj rounded-xl"
                role="button"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <img
            ref={imageRef}
            className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
            src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default HeroV2;