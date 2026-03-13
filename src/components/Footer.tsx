import Link from "next/link";
import Image from "next/image";
const footerLinks = {
  Explore: [
    { label: "About Us", href: "#about" },
    { label: "Craft Beers", href: "#beers" },
    { label: "Food Menu", href: "#menu" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
  ],
  Visit: [
    { label: "Location & Hours", href: "#location" },
    { label: "Book a Table", href: "#reservation" },
    { label: "Private Events", href: "#reservation" },
    { label: "Corporate Dining", href: "#reservation" },
  ],
  Connect: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Swiggy", href: "#" },
    { label: "Zomato", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-900/50">
            <Image
              src="/logo1.png"
              alt="Backstreet Brewery"
              width={48}
              height={48}
              className="group-hover:scale-110 transition-transform"
            />
              </div>
              <div>
                <div className="text-white font-display font-bold text-base leading-tight">
                  Backstreet
                </div>
                <div className="text-amber-400 text-[10px] font-semibold tracking-[0.15em] uppercase leading-tight">
                  Brewery
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Bengaluru&apos;s home for handcrafted beers, bold food, and unforgettable nights.
              Sarjapur Road.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  name: "Instagram",
                  href: "https://instagram.com",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  name: "Facebook",
                  href: "https://facebook.com",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  name: "Twitter/X",
                  href: "https://twitter.com",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-amber-900/20 transition-all"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-glow mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Backstreet Brewery, Bengaluru. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Kitchen open until midnight today
          </div>
          <div className="flex gap-4 text-gray-600 text-xs">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
