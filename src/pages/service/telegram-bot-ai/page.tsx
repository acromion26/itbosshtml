import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function TelegramBotAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Главная</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to="/#services" className="hover:text-emerald-600 transition-colors">Услуги</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900">Чат-бот с ИИ (Pro Talk)</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-robot-line"></i>
              Искусственный интеллект
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Чат-бот с ИИ для Telegram (Pro Talk)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Умный чат-бот с искусственным интеллектом, который понимает естественный язык, отвечает на вопросы клиентов и создаёт видимость общения с реальным человеком 24/7.
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое чат-бот с ИИ?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Чат-бот с искусственным интеллектом Pro Talk — это современное решение для автоматизации общения с клиентами. Бот понимает естественный язык, отвечает на вопросы и создаёт ощущение живого диалога с реальным человеком.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Возможности ИИ-бота</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Понимает вопросы клиентов на естественном языке</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Отвечает на часто задаваемые вопросы автоматически</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Консультирует по услугам и ценам</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Собирает заявки и контакты клиентов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Работает 24/7 без выходных</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Обучается на вашей базе знаний</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Создаёт рассылки по аудитории</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Создаёт видимость общения с реальным человеком</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Польза чат-бота для клиента</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Клиент получает всю нужную информацию о вашем центре: заслуги, услуги с описанием, контакты, часы работы, отзывы, адрес, социальные сети</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Клиент может записаться онлайн на любое направление</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Клиент может получить подарок от вашего центра прямо в боте</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Польза от чат-бота для бизнеса</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Как только клиент запускает бот — соглашается на обработку персональных данных и получение рассылок</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Возможность обрабатывать и общаться с клиентами автоматически 24 часа в сутки без выходных</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Получение заявок от клиентов в онлайн режиме с полной информацией: ФИ ребёнка, номер телефона родителя, направление</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Безграничное количество рассылок по всей аудитории — создаются менее чем за минуту</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Бот сохраняет всех клиентов в CRM системе, откуда можно скачать файл со всеми данными</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Бот можно дополнять различными функциями для развития функционала</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества для бизнеса</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Снижение нагрузки на операторов и администраторов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Мгновенные ответы клиентам в любое время</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Повышение конверсии за счёт быстрой обработки запросов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Сбор аналитики по запросам клиентов</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Какая информация потребуется для создания бота?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Все ссылки на социальные сети вашего центра (Telegram, сайт, WhatsApp, ВКонтакте, Instagram)</li>
              <li>Все контактные данные (почта, номер телефона администраторов, номер руководителя по желанию)</li>
              <li>Ссылки на отзывы о вашем центре</li>
              <li>Информация о центре:
                <ul className="ml-6 mt-2 space-y-1 list-disc">
                  <li>Описание центра (заслуги)</li>
                  <li>Адрес нахождения</li>
                  <li>Время работы</li>
                  <li>Услуги: список всех направлений с описанием + по 1 фото к каждому</li>
                </ul>
              </li>
              <li>Логотип центра/клуба</li>
              <li>Ваши пожелания</li>
              <li>Подарок, который будет установлен в бот</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Как начать работу?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Вносите полную оплату за разработку бота</li>
              <li>Готовите всю информацию по списку</li>
              <li>Сбрасываете всю информацию на форму записи</li>
              <li>Регистрируетесь на платформе по нашей ссылке</li>
              <li>Сбрасываете данные, которые использовали при регистрации (логин и пароль)</li>
              <li>Создаёте ссылку для вашего бота</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость и условия</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-purple-600">10.000₽</span>
                <span className="text-gray-600">за разработку</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Места ограничены</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <i className="ri-time-line text-purple-600 mt-0.5"></i>
                  <span><strong>Сроки работы:</strong> от 3 до 7 дней (в некоторых случаях могут задержаться по объективным причинам)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-file-list-line text-purple-600 mt-0.5"></i>
                  <span><strong>Начало работы:</strong> после предоставления всей информации и данных регистрации на платформе</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-book-open-line text-purple-600 mt-0.5"></i>
                  <span><strong>Обучение:</strong> прилагается после окончания настройки бота</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-calendar-line text-purple-600 mt-0.5"></i>
                  <span>На предоставление информации у вас есть 1 неделя, если срок задержится — мы вправе отложить заказ</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-alert-line text-amber-600 text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Важно!</p>
                  <p className="text-sm text-gray-700">
                    Подписка на платформу Pro Talk — <strong>490₽/месяц + 2 млн токенов</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/79996388186"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Заказать через WhatsApp
            </a>
            <a
              href="https://t.me/+SahJe6ec3fk3YjNi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-telegram-line text-xl"></i>
              Примеры работ в Telegram
            </a>
          </div>

          {/* Back Link */}
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            Вернуться к услугам
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}