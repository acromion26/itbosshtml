import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function MaxBotPage() {
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
            <span className="text-gray-900">Чат-бот под ключ для Макс (clever.app)</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-messenger-line"></i>
              Чат-боты для Макс
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Чат-бот для Макс под ключ (clever.app)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Виртуальный администратор для вашего бизнеса — автоматизация общения с клиентами, приём заявок и рассылки 24/7.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://sun9-41.userapi.com/s/v1/ig2/SIWRZPj70NWTooISAcPVC1MNFCX8ogIk3wkwOm2zyfkZC9TrBawxr6jwl_wIL36B-I2ilZefNTEioK8xLvgv9D-U.jpg?quality=95&as=32x37,48x55,72x83,108x125,160x185,240x277,360x416,480x555,540x624,640x740,720x832,1056x1221&from=bu&cs=1056x0"
              alt="Чат-бот для Макс"
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
                src="https://sun9-85.userapi.com/s/v1/ig2/Eq15YNTGFGEsfrGaYauyxuQh2gb1f2AIjwd8O9SfjUBUOKbLXEH-60GJByutG4Pk8ldLE5F1oU4CtBe6-BEw6x31.jpg?quality=95&as=32x17,48x26,72x38,108x57,160x85,240x128,360x191,480x255,540x287,640x340,720x383,1080x574,1104x587&from=bu&cs=1104x0"
                alt="Пример заявки"
                className="w-full rounded-xl shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Вы получаете всю нужную информацию о клиенте</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Какая информация потребуется для создания бота?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Все ссылки на социальные сети вашего центра (Макс, сайт, WhatsApp, ВКонтакте, Instagram)</li>
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
              <li>Регистрируетесь на платформе по нашей ссылке + подтверждаете регистрацию на почте — <a href="https://app.cleverapp.pro/register?ref_id=1138" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">зарегистрироваться</a></li>
              <li>Сбрасываете данные, которые использовали при регистрации (логин и пароль)</li>
              <li>Переходите по ссылке для подключения онлайн заявок</li>
              <li>Создаёте ссылку для вашего бота</li>
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
                  <span><strong>Начало работы:</strong> после предоставления всей информации и данных регистрации на платформе</span>
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
                  <p className="text-sm text-gray-700">
                    Каждый чат-бот в Макс имеет ежемесячную плату за его работу — её собирает платформа clever.app. Ежемесячная подписка стоит <strong>700₽</strong>.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Способы оплаты</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Оплата по номеру карты</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <i className="ri-bank-card-line text-blue-600"></i>
                  <span className="font-mono text-lg font-semibold text-gray-900">2202 2080 4663 7246</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>Банк:</strong> Сбербанк</p>
                  <p><strong>Получатель:</strong> Иван А.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Условия оплаты:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-600 mt-0.5"></i>
                    <span>Оплата до 10.000₽ — производится в полном объёме</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-600 mt-0.5"></i>
                    <span>Если сумма выше 10.000₽ — возможен расчёт по предоплате 50% от стоимости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-emerald-600 mt-0.5"></i>
                    <span>Также есть возможность оплаты по расчётному счёту — но цена будет учитываться БЕЗ СКИДКИ</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="flex items-start gap-2">
                  <i className="ri-information-line text-amber-600 text-lg mt-0.5"></i>
                  <p className="text-sm text-gray-700">
                    <strong>Обратите внимание:</strong> скидки и места ограничены, цена может повыситься!
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
