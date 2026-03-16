import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function AILeadSorterPage() {
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
            <span className="text-gray-900">ИИ-сортировщик лидов и заявок</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-robot-line"></i>
              ИИ-автоматизация
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              ИИ-сортировщик лидов и заявок
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Умная система на базе искусственного интеллекта для автоматической оценки и сортировки входящих лидов. Определяет потенциальных клиентов и распределяет их по приоритету.
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое ИИ-сортировщик лидов?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Интеллектуальная система, которая автоматически анализирует входящие заявки и лиды, оценивает их качество и потенциал, а затем распределяет по категориям. Это помогает отделу продаж сосредоточиться на самых перспективных клиентах.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Возможности системы</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Автоматическая оценка качества лидов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Определение потенциальных клиентов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Сортировка по приоритету и категориям</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Распределение лидов между менеджерами</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Интеграция с CRM-системами</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Автоматические уведомления менеджерам</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества для бизнеса</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Повышение конверсии за счёт работы с качественными лидами</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Экономия времени менеджеров на ручную сортировку</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Быстрая реакция на горячие заявки</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Равномерное распределение нагрузки</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Снижение потерь потенциальных клиентов</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Критерии оценки лидов</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Полнота предоставленной информации</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Соответствие целевой аудитории</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Бюджет и платёжеспособность</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Срочность потребности</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Источник лида</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Как это работает?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Вы определяете критерии оценки лидов для вашего бизнеса</li>
              <li>Мы настраиваем ИИ-систему под ваши требования</li>
              <li>Система автоматически анализирует каждую заявку</li>
              <li>Лиды распределяются по категориям и менеджерам</li>
              <li>Менеджеры получают уведомления о новых заявках</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-purple-600">15.000₽</span>
              </div>
              <p className="text-sm text-gray-600">Настройка системы сортировки лидов</p>
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