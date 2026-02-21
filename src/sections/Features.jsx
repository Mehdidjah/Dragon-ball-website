import GameCard from "../components/GameCard.jsx";
import { kakarot, breakers, sparkingZero, superHeroes, xenoverse, fighterZ } from "../assets/videos/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Features() {

  useGSAP(() => {
    gsap.from('#features-header', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#features-header',
        start: 'top 85%',
      },
    });
  });

  return (
    <section className="min-h-dvh bg-black pb-48" id="features">
      <div className="container mx-auto md:px-10 px-4">

        {/* Section header */}
        <div id="features-header" className="py-32 px-2 font-circularweb text-blue-50">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Explore the Universe</p>
          <h3 className="text-2xl font-semibold mb-3">Into the Dragon Ball Z World</h3>
          <p className="opacity-50 max-w-md text-base leading-relaxed">
            Immerse yourself in the legendary universe of Dragon Ball Z — epic battles,
            powerful transformations, and unforgettable heroes await.
          </p>
        </div>

        {/* Games grid */}
        <div className="flex flex-col gap-7">

          {/* Featured large card */}
          <div className="h-96 w-full md:h-[65vh]">
            <GameCard
              video={kakarot}
              title={<><b>K</b>ak<b>a</b>rot</>}
              description="A sprawling action RPG that lets you relive the iconic Dragon Ball Z story, battling legendary villains across an open world."
            />
          </div>

          {/* 2-column grid */}
          <div className="grid w-full grid-cols-2 grid-rows-3 gap-7 h-[135vh]">
            <div className="md:col-span-1 md:row-span-2 col-span-2 row-span-1">
              <GameCard
                video={sparkingZero}
                title={<>Sp<b>a</b>r<b>k</b>ing <b>Ze</b>ro</>}
                description="A 3D team fighting game — the next evolution of the Budokai Tenkaichi series with over 150 playable characters."
              />
            </div>
            <GameCard
              video={xenoverse}
              title={<><b>X</b>en<b>o</b>verse</>}
              description="History is under attack — protect the Dragon Ball timeline from evil time-traveling invaders."
            />
            <GameCard
              video={fighterZ}
              title={<>Fig<b>ht</b>er <b>Z</b></>}
              description="Pick a team of three characters and battle in ultra-stylish 2.5D arena combat. Pure hype, every round."
            />
            <GameCard
              video={breakers}
              title={<>Bre<b>ak</b>ers</>}
              description="Asymmetric multiplayer — one player is a world-ending Raider, the rest must survive. Pure tension."
            />
            <GameCard
              video={superHeroes}
              title={<>Su<b>p</b>er <b>H</b>ero<b>e</b>s</>}
              description="A card-based turn strategy with Dragon Ball Super heroes, wrapped in a clean anime art style."
            />
          </div>
        </div>

      </div>
    </section>
  )
}
