export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500">
                <i className="ri-robot-2-line text-white text-lg"></i>
              </div>
              <span className="font-bold text-lg tracking-tight">АйтиБосс</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              IT-команда по созданию бизнес-решений для автоматизации процессов. Чат-боты, ИИ, сайты и дизайн.
            </p>
            {/* TG Channel */}
            <a
              href="https://t.me/+SahJe6ec3fk3YjNi"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-400 text-xs font-semibold px-3 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-telegram-line text-sm"></i>
              Наш TG-канал
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                'Чат-боты для Telegram',
                'Чат-боты для ВКонтакте',
                'Чат-боты для Макс',
                'Автоматизация с ИИ (n8n+CC)',
                'Дизайн и оформление',
                'Сайты',
                'Сопровождение и помощь',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-emerald-400 transition-colors cursor-pointer">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">Отзывы</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors cursor-pointer">Читать отзывы</a>
              </li>
              <li>
                <a
                  href="https://itbossreviews.readdy.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Оставить отзыв
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">Связаться</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://t.me/VkTG23"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span className="w-5 h-5 flex items-center justify-center"><i className="ri-telegram-line"></i></span>
                  @VkTG23
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+SahJe6ec3fk3YjNi"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span className="w-5 h-5 flex items-center justify-center"><i className="ri-megaphone-line"></i></span>
                  TG-канал команды
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">&copy; 2026 АйтиБосс. Все права защищены.</p>
          <p className="text-slate-600 text-xs">IT-автоматизация бизнеса</p>
        </div>

        {/* Legal info */}
        <div className="border-t border-slate-800 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500">
              <span>Самозанятый Елизаров Иван Александрович.</span>
              <span>ИНН: 233408463816</span>
              <a href="mailto:ivanioizarov@gmail.com" className="hover:text-emerald-400 transition-colors cursor-pointer">ivanioizarov@gmail.com</a>
              <a href="tel:+79189534671" className="hover:text-emerald-400 transition-colors cursor-pointer">+7 918 953 46 71</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { label: 'Договор оферты', url: 'https://docs.google.com/document/d/1WbkggxR_dKj6qM4yKxZGYJ2GnGBPR8pT4u0_ISq0u40/edit?usp=sharing' },
              { label: 'СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ', url: 'https://docs.google.com/document/d/1KBZ8Q3WH2GuauSOrcLERMcJkRKO9fdY7BJq22InkdHg/edit?usp=sharing' },
              { label: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ', url: 'https://docs.google.com/document/d/1T1VZ6bCf8v6-GK8GUWad1swxlyx_7FeF9FI6PdABT0w/edit?usp=sharing' },
              { label: 'ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ', url: 'https://docs.google.com/document/d/1Kvyu6O4fM7hClEWsHL2-Au7PswAC9d-QvEv7JzGXOvg/edit?usp=sharing' },
            ].map((doc) => (
              <a
                key={doc.url}
                href={doc.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-xs text-slate-500 hover:text-emerald-400 underline underline-offset-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                {doc.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
