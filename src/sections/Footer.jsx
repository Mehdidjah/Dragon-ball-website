export default function Footer() {
  return (
    <footer className="w-dvw bg-[rgb(116,33,23)]">
      <div className="max-w-7xl mx-auto py-5 px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-center text-xs text-white/80">
          &copy; {new Date().getFullYear()} Dragon Ball Z. All rights reserved.
        </p>
        <p className="text-center text-xs text-white/60">
          Made by <span className="text-white font-semibold"> <a href="https://github.com/Mehdidjah">Mehdi </a></span>
        </p>
      </div>
    </footer >
  );
}
