import Button from "./Button"
import oneStar from '../assets/imgs/z-ball.png';
import Tilt from 'react-parallax-tilt';

export default function GameCard({ video, title, description }) {
  return (
    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={0.98} className="h-full">
      <div className="group relative size-full overflow-hidden rounded-xl border border-white/10">

        {/* Video background */}
        <div className="absolute inset-0 h-full bg-gray-950">
          <video
            src={video}
            className="size-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60 scale-105 group-hover:scale-100 transition-transform duration-700"
            autoPlay
            muted
            playsInline
            loop
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-blue-50">
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
