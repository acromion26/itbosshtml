import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function ReaddyWebsitesPage() {
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
            <span className="text-gray-900">Создание сайтов на Readdy</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-global-line"></i>
              Сайты
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Создание сайтов на Readdy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Современные сайты с искусственным интеллектом на платформе Readdy — расширенный функционал и безграничные возможности для вашего бизнеса.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://readdy.ai/api/search-image?query=futuristic%20AI%20powered%20website%20interface%20with%20neural%20network%20visualization%2C%20modern%20responsive%20web%20design%20on%20devices%2C%20intelligent%20automation%20features%2C%20emerald%20green%20and%20blue%20gradient%2C%20cutting%20edge%20technology%20aesthetic&width=800&height=450&seq=readdy001&orientation=landscape"
              alt="Сайт на Readdy"
              className="w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Создание сайта под ключ</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Сайт на Readdy — это ваше официальное представительство в интернете, которое работает 24/7 без выходных. Он помогает привлекать новых клиентов круглосуточно, презентовать товары и услуги, повышать доверие к бренду и автоматизировать продажи. Это мощный инструмент для формирования имиджа, сбора заявок, работы с географически удалённой аудиторией и опережения конкурентов.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества Readdy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Сайт на Readdy имеет различный и широкий функционал возможностей. Помимо базовых возможностей, платформа позволяет добавлять уникальные функции, которые обсуждаются с разработчиком индивидуально.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Базовые возможности</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-emerald-600">от 15.000₽</span>
                <span className="text-gray-600">за лендинг из 5 блоков</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Адаптивный сайт</strong> — корректное отображение на всех устройствах (ПК, планшеты, смартфоны)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Подбор картинок</strong> — качественные изображения под тематику вашего бизнеса</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Форма заказа</strong> — удобная форма для приёма заявок от клиентов</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Форма обратной связи</strong> — возможность клиентам связаться с вами</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Наполнение контентом</strong> — размещение ваших текстов и материалов</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                  <span><strong>Админ-панель</strong> — простое управление сайтом</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-emerald-200">
                <p className="text-sm text-gray-700">
                  <strong>Срок выполнения:</strong> 1 неделя
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Расширенные возможности Readdy</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-robot-line text-amber-600"></i>
                  ИИ-интеграции
                </h3>
                <p className="text-sm text-gray-600">Встроенные чат-боты, голосовые помощники и умные формы</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-database-line text-amber-600"></i>
                  Базы данных
                </h3>
                <p className="text-sm text-gray-600">Работа с большими объёмами данных и сложной логикой</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-apps-line text-amber-600"></i>
                  Интеграции
                </h3>
                <p className="text-sm text-gray-600">Подключение CRM, платёжных систем, аналитики и других сервисов</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-code-line text-amber-600"></i>
                  Кастомный функционал
                </h3>
                <p className="text-sm text-gray-600">Любые уникальные функции под ваши задачи</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Что понадобится от вас?</h2>
            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li><strong>Логин/пароль от Readdy</strong> — для доступа к вашему аккаунту на платформе</li>
              <li><strong>Техническое задание</strong> со структурой, текстами к блокам и референсами. Можно в свободной форме, но максимально подробно</li>
              <li><strong>Дополнительная информация:</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc">
                  <li>Логотип компании</li>
                  <li>Рисунки и фотографии</li>
                  <li>Тексты для размещения</li>
                  <li>Уникальное торговое предложение (акции, бонусы, спецпредложения)</li>
                  <li>Прайсы на услуги/товары</li>
                </ul>
              </li>
              <li><strong>Все пожелания</strong> обсуждаются и согласовываются с разработчиком на каждом этапе</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Почему выбирают Readdy?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-flashlight-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Быстрая разработка с ИИ:</strong> использование искусственного интеллекта ускоряет создание сайта</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-puzzle-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Гибкость:</strong> можно добавлять любые функции — всё обсуждается с разработчиком</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-rocket-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Современные технологии:</strong> актуальный стек разработки и лучшие практики</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-shield-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Надёжность:</strong> стабильная работа и высокая производительность</span>
              </li>
            </ul>

            <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8 mt-8">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-sky-600 text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Индивидуальный подход</p>
                  <p className="text-sm text-gray-700">
                    Каждый проект уникален. Мы обсуждаем все детали, подбираем оптимальные решения и реализуем именно то, что нужно вашему бизнесу. Стоимость дополнительных функций рассчитывается индивидуально.
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