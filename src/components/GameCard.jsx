import Button from "./Button"
import oneStar from '../assets/imgs/z-ball.png';
import Tilt from 'react-parallax-tilt';

export default function GameCard({ video, title, description }) {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1200}
      transitionSpeed={1200}
      scale={1.01}
      className="h-full"
    >
      <div className="group relative size-full overflow-hidden rounded-xl border border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

        {/* Video background */}
        <div className="absolute inset-0 h-full bg-gray-950">
          <video
            src={video}
            className="size-full object-cover scale-110 opacity-35 transition-[transform,opacity,filter] duration-700 ease-out group-hover:scale-100 group-hover:opacity-60 group-hover:brightness-110"
            autoPlay
            muted
            playsInline
            loop
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-blue-50 transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          <div>
            <h4 className="card-title special-font leading-none">{title}</h4>
            <p className="mt-3 max-w-xs text-xs md:text-sm text-white/70 leading-relaxed">
              {description}
            </p>
          </div>
          <Button
            title="Visit Website"
            image={oneStar}
            containerClass="bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          />
        </div>

      </div>
    </Tilt>
  )
}
