import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function TildaWebsitesPage() {
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
            <span className="text-gray-900">Создание сайтов на Тильде</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-global-line"></i>
              Сайты
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Создание сайтов на Тильде
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональные сайты и лендинги на конструкторе Tilda — ваше круглосуточное представительство в интернете для привлечения клиентов и роста продаж.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://readdy.ai/api/search-image?query=modern%20responsive%20website%20design%20on%20multiple%20devices%20laptop%20tablet%20smartphone%2C%20clean%20business%20landing%20page%20interface%2C%20professional%20tilda%20website%20builder%20showcase%2C%20emerald%20green%20accents%2C%20minimalist%20elegant%20layout&width=800&height=450&seq=tilda001&orientation=landscape"
              alt="Сайт на Тильде"
              className="w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Зачем бизнесу сайт на Тильде?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Сайт на Тильде — это ваше официальное представительство в интернете, которое работает 24/7 без выходных. Он помогает привлекать новых клиентов круглосуточно, презентовать товары и услуги, повышать доверие к бренду и автоматизировать продажи. Это мощный инструмент для формирования имиджа, сбора заявок, работы с географически удалённой аудиторией и опережения конкурентов.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Что мы предлагаем?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Создание сайтов и лендингов на CMS Tilda под любые задачи и для любых сфер бизнеса. Разрабатываем как уникальный дизайн с нуля, так и копии существующих сайтов (полные или с изменениями). Все работы выполняются исключительно в рамках возможностей конструктора Tilda.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Что входит в базовый пакет?</h2>
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
                  <span><strong>Админ-панель</strong> — простое управление сайтом без знания кода</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-emerald-200">
                <p className="text-sm text-gray-700">
                  <strong>Срок выполнения:</strong> 1 неделя
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Что понадобится от вас?</h2>
            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li><strong>Логин/пароль от Тильды</strong> — для доступа к вашему аккаунту на платформе</li>
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

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества сайта на Тильде</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-time-line text-amber-600"></i>
                  Быстрый запуск
                </h3>
                <p className="text-sm text-gray-600">Сайт готов за неделю — начинайте привлекать клиентов уже сейчас</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-smartphone-line text-amber-600"></i>
                  Адаптивность
                </h3>
                <p className="text-sm text-gray-600">Идеальный вид на любых устройствах — от смартфонов до больших мониторов</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-edit-line text-amber-600"></i>
                  Простое управление
                </h3>
                <p className="text-sm text-gray-600">Редактируйте контент самостоятельно без программистов</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-search-line text-amber-600"></i>
                  SEO-оптимизация
                </h3>
                <p className="text-sm text-gray-600">Встроенные инструменты для продвижения в поисковых системах</p>
              </div>
            </div>

            <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-sky-600 text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Дополнительные возможности</p>
                  <p className="text-sm text-gray-700">
                    Многостраничные сайты, интеграция с CRM-системами, онлайн-оплата, калькуляторы стоимости и другие функции обсуждаются индивидуально. Стоимость зависит от сложности и количества страниц.
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