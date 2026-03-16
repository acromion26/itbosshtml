export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20dark%20technology%20background%20with%20glowing%20green%20circuit%20lines%20and%20digital%20network%20nodes%2C%20deep%20dark%20navy%20background%2C%20futuristic%20IT%20automation%20concept%2C%20soft%20emerald%20green%20light%20rays%2C%20high%20tech%20minimal%20aesthetic%2C%20ultra%20wide%20cinematic&width=1440&height=900&seq=hero001&orientation=landscape"
          alt="hero background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-black/60 border border-emerald-400/60 text-emerald-300 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm max-w-[220px] sm:max-w-none">
          <i className="ri-flashlight-line flex-shrink-0"></i>
          <span className="leading-tight">IT-команда по автоматизации бизнеса</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          АйтиБосс —<br />
          <span className="text-emerald-400">умные решения</span><br />
          для вашего бизнеса
        </h1>
        <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Создаём чат-боты для Telegram, ВКонтакте и Макс, внедряем ИИ-автоматизацию,
          разрабатываем сайты и оформляем сообщества — всё под ключ.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-lg text-base"
          >
            Посмотреть услуги
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-all cursor-pointer text-base"
          >
            Связаться с нами
          </a>
        </div>

        {/* Gift banner */}
        <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-amber-400/20 to-yellow-300/20 border border-amber-400/50 backdrop-blur-sm px-6 py-3 rounded-2xl">
          <span className="text-2xl">🎁</span>
          <div className="text-left">
            <span className="text-amber-300 font-bold text-sm tracking-wide uppercase">Подарок при обращении</span>
            <p className="text-white font-semibold text-base leading-tight">Бесплатная консультация + льготная цена</p>
            <p className="text-white/60 text-xs mt-0.5">Первые 48 часов — скидка на все услуги</p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap ml-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-xs px-4 py-2 rounded-full transition-all cursor-pointer"
          >
            Получить
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { value: '250+', label: 'Проектов' },
            { value: '5', label: 'Платформ' },
            { value: '100%', label: 'Под ключ' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <i className="ri-arrow-down-line text-xl"></i>
      </div>
    </section>
  );
}