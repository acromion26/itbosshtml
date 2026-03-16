import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function AIPersonalAssistantPage() {
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
            <span className="text-gray-900">Личный ИИ-агент с памятью</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-robot-line"></i>
              ИИ-автоматизация
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Личный ИИ-агент с памятью
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Умный персональный ассистент на базе искусственного интеллекта, который помогает автоматизировать рутинные задачи, управлять информацией и повышать вашу продуктивность.
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое личный ИИ-агент?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Персональный ИИ-ассистент — это интеллектуальная система, которая запоминает ваши предпочтения, автоматизирует повторяющиеся задачи и помогает эффективно управлять информацией. Это как личный помощник, который работает 24/7 и постоянно учится вашим привычкам.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Возможности ИИ-агента</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Автоматизация повторяющихся задач</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Управление расписанием и напоминаниями</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Обработка и сортировка входящей информации</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Ищет информацию и сортирует её для вас</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Интеграция с вашими рабочими инструментами</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Персонализация под ваши задачи</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества для работы</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Экономия времени на рутинных операциях</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Повышение продуктивности</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Снижение количества ошибок</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Быстрый доступ к нужной информации</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Освобождение времени для важных задач</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Примеры использования</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Автоматическая обработка электронной почты</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Планирование встреч и задач</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Сбор и структурирование информации</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Создание отчётов и документов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Мониторинг важных событий</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Как это работает?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Вы описываете свои задачи и рабочие процессы</li>
              <li>Мы настраиваем ИИ-агента под ваши потребности</li>
              <li>Агент начинает автоматизировать рутинные операции</li>
              <li>Система учится и адаптируется к вашим привычкам</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <p className="text-lg text-gray-700 mb-2">
                Стоимость обсуждается индивидуально в зависимости от задач и требуемого функционала
              </p>
              <p className="text-sm text-gray-600">
                Свяжитесь с нами для расчёта стоимости под ваши потребности
              </p>
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