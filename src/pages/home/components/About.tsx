
const features = [
  {
    icon: 'ri-shield-check-line',
    title: 'Надёжость',
    desc: 'Работаем более 4-х лет, соблюдаем сроки и берём ответственность за результат.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Под ключ',
    desc: 'Берём проект от идеи до запуска — вам не нужно разбираться в технических деталях.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Поддержка',
    desc: 'Сопровождаем после запуска, помогаем с обновлениями и доработками.',
  },
  {
    icon: 'ri-lightbulb-line',
    title: 'Экспертиза',
    desc: 'Команда с опытом в IT, маркетинге и дизайне — знаем, что работает для бизнеса.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">О нас</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Команда <span className="text-emerald-500">АйтиБосс</span> —<br />
              ваш IT-партнёр
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Мы — IT-команда, специализирующаяся на создании бизнес-решений для автоматизации процессов.
              Помогаем предпринимателям и компаниям внедрять современные технологии: чат-боты, ИИ-инструменты,
              сайты и профессиональный дизайн сообществ.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Работаем с платформами Telegram, ВКонтакте и Макс. Создаём решения, которые экономят время,
              привлекают клиентов и автоматизируют рутину.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Telegram', 'ВКонтакте', 'Макс', 'Тильда', 'ИИ-боты'].map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-emerald-200 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 mb-4">
                  <i className={`${f.icon} text-xl`}></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="mt-16 rounded-3xl overflow-hidden relative h-64">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20IT%20team%20working%20together%20in%20a%20bright%20open%20office%2C%20laptops%20and%20monitors%20with%20code%20and%20dashboards%2C%20collaborative%20atmosphere%2C%20soft%20natural%20light%2C%20clean%20minimal%20workspace%2C%20professional%20tech%20startup%20environment%2C%20warm%20tones%2C%20wide%20panoramic%20view&width=1200&height=400&seq=about001&orientation=landscape"
            alt="Команда АвтоКонтур"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-transparent flex items-center px-10">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-widest mb-2">Наша миссия</p>
              <p className="text-white text-2xl font-bold max-w-sm leading-snug">
                Делаем технологии доступными для каждого бизнеса
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
