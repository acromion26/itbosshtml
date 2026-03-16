export default function SubscriptionHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-bank-card-line"></i>
            Сопровождение и помощь
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Помощь с оплатой подписок сервисов
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Помогаем оплачивать зарубежные сервисы и подписки — решаем проблемы с картами, валютой и доступом к платформам.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Что это такое?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Многие зарубежные сервисы и платформы стали недоступны для оплаты российскими картами. Мы помогаем решить эту проблему — оплачиваем подписки от своего имени или помогаем настроить альтернативные способы оплаты.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Вы получаете доступ к нужным сервисам без головной боли с картами и валютой.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Какие сервисы оплачиваем</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'ri-openai-line', title: 'ChatGPT / OpenAI', desc: 'Подписки на GPT-4, API-ключи' },
                { icon: 'ri-cloud-line', title: 'Облачные сервисы', desc: 'AWS, Google Cloud, Azure и другие' },
                { icon: 'ri-code-box-line', title: 'Инструменты разработки', desc: 'GitHub, Figma, Notion и прочие' },
                { icon: 'ri-advertisement-line', title: 'Рекламные платформы', desc: 'Google Ads, Facebook Ads' },
                { icon: 'ri-mail-line', title: 'Email-сервисы', desc: 'Mailchimp, SendGrid и аналоги' },
                { icon: 'ri-apps-line', title: 'Другие сервисы', desc: 'Любые зарубежные подписки' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 flex-shrink-0">
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

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Как это работает</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Вы сообщаете, что нужно оплатить', desc: 'Название сервиса, тариф и сумма' },
                { step: '2', title: 'Мы рассчитываем стоимость', desc: 'Сумма подписки + наша комиссия' },
                { step: '3', title: 'Вы переводите деньги', desc: 'На российскую карту в рублях' },
                { step: '4', title: 'Мы оплачиваем подписку', desc: 'И предоставляем доступ или чек' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества</h2>
            <div className="space-y-3">
              {[
                'Не нужно искать зарубежные карты и криптовалюту',
                'Оплата в рублях на российскую карту',
                'Быстрая обработка — обычно в течение дня',
                'Безопасность — работаем официально',
                'Помощь с настройкой доступа к сервису',
                'Регулярные платежи — можем оплачивать подписки ежемесячно',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0 mt-0.5">
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
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">Комиссия 10-15%</span>
              </div>
              <p className="text-gray-600 mb-6">
                Наша комиссия зависит от суммы и сервиса. Обычно 10-15% от стоимости подписки. Обсуждается индивидуально.
              </p>
              <div className="bg-white rounded-xl p-4 border border-indigo-100">
                <p className="text-sm text-gray-700 mb-2"><strong>Пример:</strong></p>
                <p className="text-sm text-gray-600">
                  ChatGPT Plus — $20/месяц<br />
                  Курс доллара — 95₽<br />
                  Стоимость подписки — 1.900₽<br />
                  Наша комиссия 15% — 285₽<br />
                  <strong className="text-gray-900">Итого: 2.185₽</strong>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Нужна помощь с оплатой?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Напишите нам — обсудим детали и поможем с подпиской
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://t.me/VkTG23"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap"
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