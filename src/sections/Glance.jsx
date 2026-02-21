import goku from '../assets/imgs/goku.jpg';
import vegeta from '../assets/imgs/vegeta.jpg';
import picolo from '../assets/imgs/picolo.jpg';
import gohan from '../assets/imgs/gohan.jpg';
import trunks from '../assets/imgs/trunks.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const heroes = [
  { id: 'vegeta', src: vegeta, name: 'Vegeta', cls: 'translate-x-100 rounded-s-lg' },
  { id: 'goku', src: goku, name: 'Goku', cls: 'z-10 sm:h-[60vh] 2xl:h-[45vh] rounded-lg' },
  { id: 'picolo', src: picolo, name: 'Piccolo', cls: '-translate-x-100 rounded-e-lg' },
  { id: 'gohan', src: gohan, name: 'Gohan', cls: '-translate-y-80 rounded-lg' },
  { id: 'trunks', src: trunks, name: 'Trunks', cls: 'translate-x-5 -translate-y-80 rounded-lg' },
];

const ids = heroes.map((h) => `#${h.id}`);

export default function Glance() {

  useGSAP(() => {
    // Clip-path reveal
    gsap.set(ids, {
      clipPath: 'polygon(39% 0%, 61% 39%, 61% 61%, 39% 100%)',
      borderRadius: '0% 0% 40% 10%',
    });

    gsap.from(ids, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#heroes',
        start: '10% top',
        end: '80% bottom',
        scrub: true,
      },
    });

    // Slide in
    gsap.to(['#vegeta', '#picolo', '#gohan', '#trunks'], {
      x: 0,
      y: 0,
      stagger: 0.09,
      scrollTrigger: {
        trigger: '#heroes',
        start: 'top top',
        end: 'top 80%',
        toggleActions: 'play none play reverse',
      },
    });

    // Title entrance
    gsap.from('#glance-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#glance-title',
        start: 'top 85%',
      },
    });
  });

  return (
    <section className="min-h-screen bg-black" id="heroes">
      <div className="container mx-auto w-full flex flex-col">
        <div className="py-32 text-blue-50 text-lg text-center flex flex-col justify-start items-center px-4">

          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">The Defenders of Earth</p>
          <h2 id="glance-title" className="font-zentry uppercase text-center md:text-[6rem] text-4xl special-font mb-10">
            h<b>e</b>r<b>oe</b>s at <b>a</b> <b>g</b>lan<b>ce</b>
          </h2>

          {/* Hero cards */}
          <div className="w-full h-full flex flex-wrap justify-center items-center gap-5 2xl:max-w-[50vw]">
            {heroes.map(({ id, src, name, cls }) => (
              <div
                key={id}
                id={id}
                className={`relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden perspective-dramatic group cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${cls}`}
              >
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Name badge on hover */}
                <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-white text-sm font-robert-medium uppercase tracking-widest">{name}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="md:max-w-[50vw] p-3 text-sm font-circularweb text-center text-violet-50/70 mt-20 leading-relaxed">
            Join the heroes of Dragon Ball Z as they embark on epic adventures, face formidable foes, and push their limits to protect the universe.
          </p>
        </div>
      </div>
    </section>
  )
}
