import dragonBall from '../assets/imgs/z-ball.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

  useGSAP(() => {
    gsap.from('#contact-inner', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact-inner',
        start: 'top 85%',
      },
    });
  });

  return (
    <section className="w-screen min-h-96 px-5 md:px-10 mb-10 md:mt-32 mt-5" id="contact">
      <div
        id="contact-inner"
        className="relative overflow-hidden text-blue-50 py-24 rounded-2xl
          bg-black bg-[url('/public/vegeta1.jpg')] bg-[132%_66%] bg-no-repeat
          bg-contain sm:bg-size-[50vw] shadow-2xl border border-white/10"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Dragon Ball Z</p>

          <h2 className="font-zentry uppercase text-center md:text-[6rem] leading-[.8] text-4xl special-font mt-4 max-w-md md:max-w-[41.5rem]">
            <b>j</b>oin the her<b>o</b>es of Drag<b>o</b>n Ball <b>z</b> <b>as</b> they <b>e</b>mbark on epic advent<b>u</b>res.
          </h2>

          <img
            src={dragonBall}
            alt="Dragon Ball"
            className="w-28 sm:w-34 mt-10 drop-shadow-2xl"
          />

          <div className="w-fit rounded-full px-7 py-3 mt-7 bg-violet-50 text-black cursor-pointer text-xs uppercase font-black group hover:shadow-lg hover:shadow-violet-500/30 transition-shadow duration-300">
            <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
              Become a hero
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
