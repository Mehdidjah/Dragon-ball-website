import gokuLogo from '../assets/imgs/goku-logo.png';
import Button from './Button.jsx';
import threeStar from '../assets/imgs/z-ball3.png';
import { useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';

const navList = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'News', href: '#news' },
  { name: 'Prologue', href: '#prologue' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const headerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isFloating, setIsFloating] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsFloating(false);
      headerRef.current.classList.remove('floating-nav');
    } else {
      setIsFloating(true);
      headerRef.current.classList.add('floating-nav');
    }
  }, [currentScrollY]);

  return (
    <header
      ref={headerRef}
      className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] z-[60] px-6 py-3 transition-all duration-500 flex flex-col"
    >
      {/* Main row */}
      <div className="flex justify-between items-center w-full">
        {/* Logo + CTA */}
        <div className="flex items-center gap-4">
          <img src={gokuLogo} alt="Dragon Ball Z Logo" className="w-10" />
          <Button
            title="Games"
            image={threeStar}
            containerClass="flex text-xs flex-row-reverse bg-violet-50 text-black"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navList.map(({ name, href }) => (
              <li className="nav-hover-btn" key={name}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 text-white"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64 mt-3' : 'max-h-0'
          }`}
      >
        <ul className="flex flex-col gap-2 py-2">
          {navList.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="block text-white text-sm uppercase font-general tracking-wider px-2 py-1.5 hover:text-violet-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
