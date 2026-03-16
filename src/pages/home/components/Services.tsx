import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    icon: 'ri-telegram-line',
    color: 'bg-sky-50 text-sky-500',
    border: 'border-sky-100',
    title: 'Чат-боты для Telegram',
    items: [
      { label: 'Чат-бот под ключ (clever.app)', slug: 'telegram-bot-clever' },
      { label: 'Чат-бот с ИИ (Pro Talk)', slug: 'telegram-bot-ai' },
      { label: 'Чат-бот диагностика ПКШ по методике Анжелы Мазаевой', slug: 'telegram-bot-diagnostics' },
    ],
  },
  {
    icon: 'ri-vk-line',
    color: 'bg-indigo-50 text-indigo-500',
    border: 'border-indigo-100',
    title: 'Чат-боты для ВКонтакте',
    items: [
      { label: 'Чат-бот под ключ (Senler)', slug: 'telegram-bot-vk' },
    ],
  },
  {
    icon: 'ri-message-3-line',
    color: 'bg-violet-50 text-violet-500',
    border: 'border-violet-100',
    title: 'Чат-боты для Макс',
    items: [
      { label: 'Чат-бот для Макс (clever.app)', slug: 'max-bot-turnkey' },
    ],
  },
  {
    icon: 'ri-robot-2-line',
    color: 'bg-emerald-50 text-emerald-500',
    border: 'border-emerald-100',
    title: 'Автоматизация с ИИ (n8n+CC)',
    items: [
      { label: 'Автопостинг телеграмм канала (ИИ ведение тг канала)', slug: 'ai-telegram-autoposting' },
      { label: 'Парсинг целевых лидов с помощью Google Maps', slug: 'ai-google-maps-parsing' },
      { label: 'Личный ИИ агент с памятью (ассистент для работы и рутины)', slug: 'ai-personal-assistant' },
      { label: 'ИИ голосовой агент (Общение с клиентами, сборка лидов, срм система)', slug: 'ai-voice-agent' },
      { label: 'ИИ - сортировщик лидов и заявок', slug: 'ai-lead-sorter' },
      { label: 'Кастомное ИИ решение (обсуждается индивидуально)', slug: 'ai-custom-solution' },
    ],
  },
  {
    icon: 'ri-palette-line',
    color: 'bg-rose-50 text-rose-500',
    border: 'border-rose-100',
    title: 'Дизайн и оформление',
    items: [
      { label: 'Оформление ВК сообщества от опытного дизайнера', slug: 'vk-community-design' },
      { label: 'Создание картинок от профессионального дизайнера', slug: 'professional-design' },
    ],
  },
  {
    icon: 'ri-global-line',
    color: 'bg-amber-50 text-amber-500',
    border: 'border-amber-100',
    title: 'Сайты',
    items: [
      { label: 'Создание сайтов на Тильде', slug: 'tilda-websites' },
      { label: 'Создание сайтов на Readdy', slug: 'readdy-websites' },
    ],
  },
  {
    icon: 'ri-customer-service-2-line',
    color: 'bg-teal-50 text-teal-500',
    border: 'border-teal-100',
    title: 'Сопровождение и помощь',
    items: [
      { label: 'Сопровождение по чат-боту в ТГ, ВК, Макс, ИИ ботам', slug: 'bot-support' },
      { label: 'Помощь с оплатой подписок сервисов', slug: 'subscription-help' },
      { label: 'Внесение изменений в бот и его поддержание', slug: 'bot-maintenance' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">Что мы делаем</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Полный спектр IT-решений для автоматизации и роста вашего бизнеса — от чат-ботов до дизайна сообществ.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl border ${cat.border} bg-white p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${cat.color} mb-4`}>
                <i className={`${cat.icon} text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <Link
                      to={`/service/${item.slug}`}
                      className="group flex items-start gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                      <span className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <i className="ri-arrow-right-s-line text-emerald-400 group-hover:text-emerald-600"></i>
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex flex-col justify-between text-white">
            <div>
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/20 mb-4">
                <i className="ri-customer-service-2-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Нужна консультация?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Расскажите о вашем проекте — подберём оптимальное решение под ваши задачи и бюджет.
              </p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap mt-6 inline-block bg-white text-emerald-600 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-emerald-50 transition-colors cursor-pointer text-center"
            >
              Написать нам
            </a>
          </div>
        </div>

        {/* Payment Info Block */}
        <div className="mt-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500 flex-shrink-0">
              <i className="ri-bank-card-line text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Как оплатить наши услуги?</h3>
              <p className="text-gray-600">Информация об оплате и доступных способах расчёта</p>
            </div>
          </div>
          <Link
            to="/service/payment-info"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Подробнее об оплате
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}