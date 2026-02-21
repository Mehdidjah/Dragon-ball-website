import heros from '../assets/imgs/heros.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function About() {

  useGSAP(() => {
    // Title fade-in
    gsap.from('#about-title', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about-title',
        start: 'top 85%',
      },
    });

    // Image expand on scroll (pin)
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('#heroes-image', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  return (
    <section id="about" className="relative flex flex-col justify-start items-center w-full min-h-screen text-black mt-36">

      {/* Header text */}
      <div id="about-title" className="relative w-full text-center flex flex-col justify-center items-center gap-4 mb-8 px-4">
        <p className="text-xs uppercase tracking-widest text-black/50 font-general">Welcome to Dragon Ball Z</p>
        <h2 className="sm:text-8xl text-5xl text-black font-zentry text-center max-w-5xl special-font">
          Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure
        </h2>
        <div className="absolute -bottom-[80dvh] flex flex-col items-center justify-center w-full font-circularweb max-w-[34rem] text-center px-4">
          <p className="text-lg font-semibold">The ultimate adventure — awaits!</p>
          <p className="text-base text-gray-500 mt-2">
            Join your favorite heroes in a universe filled with epic battles,
            powerful transformations, and legendary quests.
          </p>
        </div>
      </div>

      {/* Clip expanding image */}
      <div className="w-screen h-dvh flex justify-center" id="clip">
        <div
          className="absolute top-0 z-10 w-96 h-[50vh] sm:h-[60vh] md:w-[30vw] overflow-hidden rounded-3xl shadow-2xl"
          id="heroes-image"
        >
          <img
            className="object-cover w-full h-full origin-center sm:object-[80%]"
            src={heros}
            alt="Dragon Ball Z Heroes"
          />
        </div>
      </div>
    </section>
  )
}
