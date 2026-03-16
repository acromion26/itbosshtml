export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden">
      {/* Top wave divider */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0f2027" />
        </svg>
      </div>

      {/* Main block */}
      <div
        className="py-20 px-6"
        style={{
          background: 'linear-gradient(135deg, #0f2027 0%, #1a3a2a 50%, #0f2027 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} />
        <div className="absolute bottom-24 right-10 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #34d399, transparent)' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            {/* Stars row */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-star-fill text-emerald-400 text-xl"></i>
                </div>
              ))}
            </div>

            <span className="inline-block text-emerald-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Отзывы клиентов
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Что говорят о нас<br />
              <span className="text-emerald-400">наши клиенты</span>
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-base leading-relaxed">
              Реальные отзывы людей, которым мы помогли автоматизировать бизнес
              с помощью чат-ботов, ИИ и современных IT-решений.
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-10 mt-8 mb-2">
              {[
                { value: '4+', label: 'года на рынке' },
                { value: '100+', label: 'проектов' },
                { value: '5.0', label: 'средняя оценка' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-extrabold text-emerald-400">{s.value}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Iframe card */}
          <div className="relative">
            {/* Glow border */}
            <div className="absolute -inset-0.5 rounded-3xl opacity-40 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #10b981, #34d399, #10b981)' }} />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/60 bg-[#0f2027]">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-emerald-900/40 bg-[#0f2027]/80">
                <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400/70"></div>
                <span className="ml-3 text-slate-400 text-xs font-mono">itbossreviews.readdy.co</span>
              </div>
              <iframe
                src="https://itbossreviews.readdy.co"
                title="Отзывы клиентов АйтиБосс"
                className="w-full"
                style={{ height: '680px', border: 'none' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://itbossreviews.readdy.co"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-full transition-all cursor-pointer shadow-lg shadow-emerald-900/40 text-sm"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-star-line text-sm"></i>
              </div>
              Оставить отзыв
            </a>
            <a
              href="https://itbossreviews.readdy.co"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-2 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 font-semibold px-8 py-3 rounded-full transition-all cursor-pointer text-sm"
            >
              Открыть все отзывы
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-external-link-line text-sm"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="w-full overflow-hidden leading-none"
        style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a2a 50%, #0f2027 100%)' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
