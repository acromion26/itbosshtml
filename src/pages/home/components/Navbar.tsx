import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Услуги', href: 'services' },
              { label: 'О нас', href: 'about' },
              { label: 'Контакты', href: 'contact' },
              { label: 'Отзывы', href: 'reviews' },
            ].map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="whitespace-nowrap hidden md:inline-flex bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all cursor-pointer shadow-sm"
          >
            Связаться
          </a>

          {/* Mobile: spacer */}
          <div className="md:hidden flex-1" />
        </div>
      </header>

      {/* Mobile floating contact button */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500 shadow-lg text-white cursor-pointer transition-transform active:scale-95"
          aria-label="Связаться"
        >
          <i className={`${mobileOpen ? 'ri-close-line' : 'ri-customer-service-2-line'} text-xl`}></i>
        </button>

        {/* Dropdown */}
        {mobileOpen && (
          <div className="absolute top-14 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-52 animate-fade-in">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                <i className="ri-file-list-3-line text-base"></i>
              </div>
              Оставить заявку
            </a>
            <div className="h-px bg-gray-100 mx-4" />
            <a
              href="https://t.me/VkTG23"
              target="_blank"
              rel="nofollow noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                <i className="ri-telegram-line text-base"></i>
              </div>
              Telegram
            </a>
          </div>
        )}
      </div>
    </>
  );
}
