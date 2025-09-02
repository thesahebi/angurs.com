import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function WorkTogether() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Split the text into individual words
      const splitText = new SplitType(textRef.current!, {
        types: 'words',
        wordClass: 'word-reveal'
      });

      // Ensure initial state
      gsap.set(splitText.words, { 
        opacity: 0,
        y: 50
      });

      // Create the animation
      gsap.to(splitText.words, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Add hover effect for accent text
      const accentWords = document.querySelectorAll('.ubun-text');
      accentWords.forEach(word => {
        word.addEventListener('mouseenter', () => {
          gsap.to(word, {
            scale: 1.05,
            color: '#e95420',
            duration: 0.3,
            ease: "power2.out"
          });
        });

        word.addEventListener('mouseleave', () => {
          gsap.to(word, {
            scale: 1,
            color: '',
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="dark:bg-black  flex items-center">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:p-12 md:p-12 py-12 text-center">
          <p 
            ref={textRef}
            className="lg:text-8xl md:text-6xl text-5xl font-bold font-mono dark:text-white overflow-hidden"
          >
            Let's <span className="ubun-text inline-block">Team Up</span>{" "}
            <br />
             <span className="ubun-text inline-block">Together, We’ll Build Something Amazing</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkTogether;