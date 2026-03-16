export default function BotSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-500 to-emerald-600 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-customer-service-2-line"></i>
            Сопровождение и помощь
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Сопровождение чат-ботов
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Профессиональная поддержка ваших чат-ботов в Telegram, ВКонтакте, Макс и ИИ-ботов — мы следим за работой и оперативно решаем любые вопросы.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Что входит в сопровождение</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Сопровождение чат-бота — это комплексная техническая поддержка, которая обеспечивает бесперебойную работу вашего бота. Мы следим за его работоспособностью, оперативно устраняем ошибки и помогаем с настройками.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Вы можете сосредоточиться на бизнесе, а мы позаботимся о технической стороне.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Что мы делаем</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'ri-shield-check-line', title: 'Мониторинг работы', desc: 'Следим за работоспособностью бота 24/7' },
                { icon: 'ri-tools-line', title: 'Устранение ошибок', desc: 'Быстро исправляем технические проблемы' },
                { icon: 'ri-refresh-line', title: 'Обновления', desc: 'Устанавливаем обновления платформ и библиотек' },
                { icon: 'ri-question-answer-line', title: 'Консультации', desc: 'Отвечаем на вопросы по работе с ботом' },
                { icon: 'ri-settings-3-line', title: 'Настройка функций', desc: 'Помогаем настроить новые возможности' },
                { icon: 'ri-bar-chart-line', title: 'Аналитика', desc: 'Предоставляем отчёты о работе бота' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 flex-shrink-0">
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Поддерживаемые платформы</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: 'ri-telegram-line', title: 'Telegram', color: 'from-sky-500 to-blue-600' },
                { icon: 'ri-vk-line', title: 'ВКонтакте', color: 'from-indigo-500 to-purple-600' },
                { icon: 'ri-message-3-line', title: 'Макс', color: 'from-violet-500 to-purple-600' },
                { icon: 'ri-robot-2-line', title: 'ИИ-боты', color: 'from-emerald-500 to-teal-600' },
              ].map((item) => (
                <div key={item.title} className={`p-5 rounded-xl bg-gradient-to-br ${item.color} text-white text-center`}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20 mx-auto mb-3">
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества</h2>
            <div className="space-y-3">
              {[
                'Спокойствие — бот всегда работает, мы следим за этим',
                'Быстрая реакция — устраняем проблемы в течение нескольких часов',
                'Экономия времени — не нужно разбираться в технических вопросах',
                'Профессиональная помощь — опыт работы с сотнями ботов',
                'Регулярные отчёты — вы всегда в курсе состояния бота',
                'Предсказуемые расходы — фиксированная ежемесячная оплата',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость</h2>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">5.000₽</span>
                <span className="text-gray-600">/месяц</span>
              </div>
              <p className="text-gray-600 mb-6">
                Фиксированная ежемесячная оплата за сопровождение одного бота. При сопровождении нескольких ботов — скидки.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-teal-600"></i>
                  Мониторинг работы 24/7
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-teal-600"></i>
                  Устранение ошибок и сбоев
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-teal-600"></i>
                  Консультации по работе с ботом
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-teal-600"></i>
                  Ежемесячный отчёт о работе
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Нужна поддержка вашего бота?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Свяжитесь с нами для подключения сопровождения
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://t.me/VkTG23"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-telegram-line"></i>
                Написать в Telegram
              </a>
              <a
                href="https://t.me/+SahJe6ec3fk3YjNi"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap border border-white/20"
              >
                <i className="ri-eye-line"></i>
                Наш TG-канал
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}