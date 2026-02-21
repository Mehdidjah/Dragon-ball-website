import {
  videoOne,
  videoTwo,
  videoThree,
  videoFour,
} from '../assets/videos/index.js';

import Button from '../components/Button.jsx';
import threeStar from '../assets/imgs/z-ball3.png';
import oneStar from '../assets/imgs/z-ball.png';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const bkgVideoRef = useRef(null);

  const videos = [videoOne, videoTwo, videoThree, videoFour];

  // Loading ends when the background video is ready
  const handleBkgVideoLoad = () => setLoading(false);

  // Video click transition
  useGSAP(
    () => {
      if (isClicked) {
        gsap.set('#next-video', { visibility: 'visible' });
        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          borderRadius: '0%',
          duration: 1,
          ease: 'power1.inOut',
        });
        gsap.from('#current-video', {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power2.inOut',
        });
        gsap.set('#bkg-video', { opacity: 0.5 });
      }
    },
    { dependencies: [videoIndex], revertOnUpdate: true }
  );

  // Hero clip-path scroll animation
  useGSAP(() => {
    gsap.set('#hero', {
      clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
      borderRadius: '0% 0% 40% 10%',
    });

    gsap.from('#hero', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0% 0% 0% 0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#hero',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const handleVideoClick = () => {
    const nextIndex = (videoIndex + 1) % videos.length;
    setVideoIndex(nextIndex);
    setIsClicked(true);
  };

  return (
    <div className="relative w-dvw h-dvh overflow-hidden">
      {/* Loading overlay */}
      {loading && (
        <div className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-100">
          <div className="three-body">
            <div>
              <img src={oneStar} alt="One Star Dragon Ball" className="left-5 bottom-10 absolute" />
            </div>
          </div>
        </div>
      )}

      <div className="relative w-full h-full z-50" id="hero">
        <div className="relative w-full h-full">
          {/* Clickable video preview (next video in dragon-ball mask) */}
          <div className="absolute top-0 left-0 size-64 z-40 w-full h-full overflow-hidden flex items-center justify-center">
            <div
              className="relative z-[60] size-64 cursor-pointer scale-50 hover:scale-100 transition-all duration-500 ease-out group/card"
              onClick={handleVideoClick}
            >
              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.1}
                className="size-full overflow-hidden rounded-full border-4 border-yellow-400/50 shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:shadow-[0_0_80px_rgba(250,204,21,0.6)] transition-shadow duration-500 animate-pulse-subtle"
              >
                <div
                  className="size-full mask-[url('/src/assets/imgs/z-ball3cut.png')] mask-no-repeat mask-cover opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20"
                >
                  <video
                    src={videos[(videoIndex + 1) % videos.length]}
                    id="current-video"
                    className="size-full object-cover origin-center"
                    muted
                    loop
                    playsInline
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>

        {/* Transitioning video (next) */}
        <video
          src={videos[videoIndex]}
          className="w-full h-full origin-center scale-0 object-cover absolute-center absolute z-35 pointer-events-none"
          id="next-video"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Background video */}
        <video
          ref={bkgVideoRef}
          src={videos[videoIndex]}
          id="bkg-video"
          className="w-full h-full origin-center object-cover absolute-center absolute z-30 pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleBkgVideoLoad}
        />

        {/* Top-left text */}
        <div className="absolute top-0 left-0 z-40 mt-24 px-10 w-full h-full pointer-events-none flex flex-col gap-3">
          <h1 className="opacity-90 special-font flex items-center uppercase font-zentry lg:text-[12rem] text-7xl sm:text-9xl">
            dr<b>a</b>g
            <img src={oneStar} alt="One Star Dragon Ball" className="inline-block lg:w-37 w-15 sm:w-26" />
            n
          </h1>
          <p className="text-white text-md font-regular max-w-100 mb-5 font-robert-regular">
            Enter the world of Dragon Ball Z,<br />
            where epic battles and legendary heroes come to life.
          </p>
          <Button title="Join the Adventure" image={threeStar} containerClass="bg-violet-50 text-black" />
        </div>

        {/* Bottom-right text (foreground) */}
        <div className="absolute bottom-0 right-0 z-40 mb-5 px-10">
          <h1 className="opacity-90 special-font uppercase font-zentry z-40 lg:text-[12rem] text-7xl sm:text-9xl">
            b<b>a</b>ll
          </h1>
        </div>
      </div>

      {/* Bottom-right text (shadow layer) */}
      <h1 className="special-font z-0 uppercase font-zentry font-black lg:text-[12rem] mb-5 px-10 text-7xl sm:text-9xl leading-none absolute bottom-0 right-0 text-black">
        b<b>a</b>ll
      </h1>
    </div>
  );
}