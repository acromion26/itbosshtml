export default function BotMaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cyan-500 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-tools-line"></i>
            Сопровождение и помощь
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Внесение изменений в бот и его поддержание
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Доработка функционала, добавление новых возможностей и регулярное обновление вашего чат-бота.
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
              Внесение изменений в бот — это доработка и улучшение функционала вашего чат-бота. Мы добавляем новые функции, меняем логику работы, обновляем тексты и дизайн, интегрируем новые сервисы.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ваш бот растёт вместе с бизнесом — мы помогаем адаптировать его под новые задачи и требования.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Что мы можем изменить</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'ri-add-circle-line', title: 'Новые функции', desc: 'Добавление новых возможностей и команд' },
                { icon: 'ri-edit-line', title: 'Изменение текстов', desc: 'Обновление сообщений и описаний' },
                { icon: 'ri-palette-line', title: 'Дизайн кнопок', desc: 'Изменение меню и интерфейса' },
                { icon: 'ri-link', title: 'Интеграции', desc: 'Подключение новых сервисов и API' },
                { icon: 'ri-database-2-line', title: 'Работа с данными', desc: 'Изменение логики сбора и хранения данных' },
                { icon: 'ri-notification-3-line', title: 'Уведомления', desc: 'Настройка рассылок и напоминаний' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 flex-shrink-0">
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

          {/* Examples */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Примеры изменений</h2>
            <div className="space-y-4">
              {[
                { title: 'Добавление оплаты', desc: 'Интеграция платёжной системы для приёма оплаты в боте' },
                { title: 'Новый раздел меню', desc: 'Создание нового раздела с каталогом товаров или услуг' },
                { title: 'Автоматические рассылки', desc: 'Настройка регулярных рассылок для подписчиков' },
                { title: 'Интеграция с CRM', desc: 'Подключение бота к вашей CRM-системе' },
                { title: 'Изменение логики', desc: 'Доработка сценариев общения и обработки команд' },
                { title: 'Добавление языков', desc: 'Перевод бота на другие языки' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества</h2>
            <div className="space-y-3">
              {[
                'Гибкость — бот адаптируется под ваши задачи',
                'Быстрая реализация — большинство изменений за 1-3 дня',
                'Профессиональный подход — опыт работы с разными платформами',
                'Тестирование — проверяем работу перед запуском',
                'Документация — объясняем, как работают новые функции',
                'Поддержка после изменений — помогаем разобраться',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600 flex-shrink-0 mt-0.5">
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
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">от 1.000₽</span>
                <span className="text-gray-600">/изменение</span>
              </div>
              <p className="text-gray-600 mb-6">
                Стоимость зависит от сложности изменений. Простые правки (тексты, кнопки) — от 1.000₽. Сложные доработки (интеграции, новые функции) — от 5.000₽.
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-cyan-600 mt-0.5"></i>
                  <div>
                    <strong>Простые изменения (1.000-3.000₽):</strong> изменение текстов, добавление кнопок, правка меню
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-cyan-600 mt-0.5"></i>
                  <div>
                    <strong>Средние изменения (3.000-7.000₽):</strong> новые разделы, рассылки, формы сбора данных
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-check-line text-cyan-600 mt-0.5"></i>
                  <div>
                    <strong>Сложные изменения (от 7.000₽):</strong> интеграции с API, платёжные системы, сложная логика
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Нужно доработать бот?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Расскажите, что хотите изменить — оценим стоимость и сроки
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://t.me/VkTG23"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap"
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
                Примеры работ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}