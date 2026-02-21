import shenron from '../assets/imgs/dragon-ball-shenron1.jpg';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Story() {

    useGSAP(() => {
        // Background color transition
        gsap.fromTo(
            '#story',
            { backgroundColor: 'rgb(0,0,0)' },
            {
                backgroundColor: 'rgb(116, 33, 23)',
                scrollTrigger: {
                    trigger: '#story',
                    start: 'top 80%',
                    end: 'bottom bottom',
                    scrub: true,
                },
            }
        );

        // Title entrance
        gsap.from('#story-title', {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#story-title',
                start: 'top 85%',
            },
        });
    });

    return (
        <section className="min-h-dvh bg-black pb-[500px]" id="story">
            <div className="container h-full mx-auto md:px-10 px-4 flex flex-col">
                <div className="relative py-32 px-5 h-dvh text-blue-50 text-lg text-center flex flex-col justify-start items-center">

                    {/* Label */}
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Dragon Ball Z</p>

                    <h2
                        id="story-title"
                        className="font-zentry mt-7 sm:mt-22 uppercase text-center md:text-[6rem] leading-[.8] text-4xl special-font drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
                    >
                        th<b>e</b> St<b>o</b>ry<br /> o<b>f</b> <b>7-</b><b>d</b>rag<b>o</b>n <b>balls</b>
                    </h2>

                    {/* Tilt image */}
                    <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} className="mt-10 w-full max-w-3xl mx-auto">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={shenron}
                                alt="Shenron the eternal dragon"
                                className="w-full h-full object-cover"
                            />
                            {/* Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 rounded-2xl" />
                        </div>
                    </Tilt>

                    {/* CTA row */}
                    <div className="w-full flex justify-end mt-10 md:mt-16">
                        <div className="flex flex-col items-start gap-4 max-w-xs">
                            <p className="text-left text-violet-50 font-circularweb text-sm sm:text-base leading-relaxed">
                                The seven Dragon Balls are magical orbs that, when gathered, summon a dragon to grant any wish before scattering across the world again.
                            </p>
                            <div className="w-fit rounded-full px-7 py-3 bg-violet-50 text-black cursor-pointer text-xs uppercase font-black group">
                                <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
                                    Discover Story
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
