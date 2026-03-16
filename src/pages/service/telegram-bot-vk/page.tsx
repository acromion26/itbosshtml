import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function TelegramBotVKPage() {
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
            <span className="text-gray-900">Чат-бот под ключ (Senler)</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-vk-line"></i>
              Чат-боты для ВКонтакте
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Чат-бот для ВКонтакте под ключ (Senler)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Виртуальный администратор для вашего сообщества ВК — автоматизация общения с клиентами, приём заявок и рассылки 24/7.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://sun9-53.userapi.com/s/v1/ig2/k-ORt3zniM7FxATZFqXhbpBnx2oyTc8EdrTzNzy62FQJ5zgS0R4_4IWjfIPj-rZu0klu__hYds_nG4zmRiepV85i.jpg?quality=95&as=32x15,48x22,72x33,108x50,160x74,240x111,360x167,480x222,488x226&from=bu&cs=488x0"
              alt="Чат-бот ВКонтакте"
              className="w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Польза чат-бота для клиента</h2>
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

            <div className="my-8">
              <img 
                src="https://sun9-42.userapi.com/s/v1/ig2/FDyehgaYp7WpCkhqX4h4n-QzqQIq9aFGdG4aASjIw5ga2BRpCMu1lbxV_OERPI-H0FgEmxcdLP3cQ8bcix_ec08L.jpg?quality=95&as=32x15,48x23,72x34,108x51,160x75,240x113,360x169,480x225,540x253,640x300,720x338,1080x507,1178x553&from=bu&cs=1178x0"
                alt="Пример заявки"
                className="w-full rounded-xl shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Вы получаете всю нужную информацию о клиенте</p>
            </div>

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
              <li>Сбрасываете всю информацию нам на WhatsApp</li>
              <li>Добавляете наш рабочий аккаунт администратором в вашу группу в ВК</li>
              <li>Сбрасываете ваши данные от аккаунта Senler (данные для входа на платформу Senler — это ваши данные от аккаунта в VK. Нам они потребуются только для входа на платформу — мы не заходим на ваш аккаунт VK, поэтому все ваши личные данные останутся в полной конфиденциальности)</li>
              <li>После сброса данных нужно будет подтвердить вход на аккаунт через SMS, отправленное на ваш номер</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость и условия</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-emerald-600">10.000₽</span>
                <span className="text-gray-600">за разработку</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Места ограничены</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <i className="ri-time-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Сроки работы:</strong> от 3 до 7 дней (в некоторых случаях могут задержаться по объективным причинам)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-file-list-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Начало работы:</strong> после предоставления всей информации и данных от аккаунта Senler</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-book-open-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Обучение:</strong> прилагается после окончания настройки бота</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-calendar-line text-emerald-600 mt-0.5"></i>
                  <span>На предоставление информации у вас есть 1 неделя, если срок задержится — мы вправе отложить заказ</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-alert-line text-amber-600 text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Важно!</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Каждый чат-бот в VK имеет ежемесячную плату — её собирает платформа, не наша команда. Ежемесячная подписка стоит <strong>400₽</strong> (данная подписка позволяет пользоваться вашим ботом до 100-200 клиентам в день).
                  </p>
                  <p className="text-sm text-gray-700">
                    Также есть бесплатный тариф работы вашего бота — 1-2 клиента в день.
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