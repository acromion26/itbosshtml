import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function AIGoogleMapsParsingPage() {
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
            <span className="text-gray-900">Парсинг целевых лидов с Google Maps</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-robot-line"></i>
              ИИ-автоматизация
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Парсинг целевых лидов с Google Maps
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Автоматический сбор контактов потенциальных клиентов из Google Maps с помощью ИИ. Получайте базу целевых компаний с телефонами, адресами и другими данными для холодных продаж.
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое парсинг Google Maps?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Автоматизированная система сбора данных о компаниях из Google Maps. ИИ находит целевые организации по вашим критериям и собирает их контактную информацию: телефоны, адреса, сайты, время работы и отзывы.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Какие данные собираются?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Название компании</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Телефоны и контактные данные</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Адрес и геолокация</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Сайт и социальные сети</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Рейтинг и количество отзывов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Часы работы</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Категория бизнеса</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества для бизнеса</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Быстрый сбор целевой базы клиентов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Актуальные контакты из проверенного источника</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Фильтрация по городу, категории и рейтингу</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Экономия времени на ручной поиск</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Готовая база для холодных звонков и рассылок</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Как это работает?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Вы указываете критерии поиска: город, категория бизнеса, ключевые слова</li>
              <li>Система автоматически собирает данные из Google Maps</li>
              <li>ИИ фильтрует и структурирует информацию</li>
              <li>Вы получаете готовую базу в удобном формате (Excel, CSV)</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Для кого подходит?</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Отделы продаж для поиска новых клиентов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Маркетологи для анализа конкурентов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>B2B компании для холодных продаж</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Агентства для поиска партнёров</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-purple-600">13.000₽</span>
              </div>
              <p className="text-sm text-gray-600">Настройка системы парсинга</p>
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