"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:sankeerthbussa@gmail.com" className="text-gray-500 hover:text-white transition-colors text-sm">Email</a>
          <a href="https://www.linkedin.com/in/sankeerthbussa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
          <a href="https://github.com/sankeerth-bussa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
        </div>
        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Sankeerth Bussa. All rights reserved.</p>
      </div>
    </footer>
  );
}
