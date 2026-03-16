import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function AIVoiceAgentPage() {
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
            <span className="text-gray-900">ИИ-голосовой агент</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-robot-line"></i>
              ИИ-автоматизация
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              ИИ-голосовой агент
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Умный голосовой помощник на базе искусственного интеллекта для автоматизации телефонных звонков. Общается с клиентами, собирает лиды и интегрируется с CRM-системой.
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое ИИ-голосовой агент?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Голосовой ИИ-агент — это интеллектуальная система, которая может вести телефонные разговоры с клиентами, отвечать на вопросы, собирать информацию и записывать на услуги. Звучит естественно и понимает человеческую речь.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Возможности голосового агента</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Автоматический приём входящих звонков</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Консультация клиентов по услугам</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Запись на услуги и бронирование</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Сбор контактных данных и заявок</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Интеграция с CRM-системой</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Работа 24/7 без выходных</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Естественная речь и понимание контекста</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества для бизнеса</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Снижение нагрузки на операторов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Мгновенная обработка звонков без очередей</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Экономия на зарплате операторов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Повышение конверсии за счёт быстрого ответа</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Автоматическая фиксация данных в CRM</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Сценарии использования</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Запись клиентов на услуги (салоны красоты, клиники, автосервисы)</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Консультация по товарам и услугам</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Сбор обратной связи от клиентов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Квалификация лидов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Напоминания о записях и встречах</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Как это работает?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Вы предоставляете информацию о вашем бизнесе и услугах</li>
              <li>Мы настраиваем голосового агента под ваши сценарии</li>
              <li>Агент начинает принимать звонки и общаться с клиентами</li>
              <li>Все данные автоматически сохраняются в CRM</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-purple-600">20.000₽</span>
              </div>
              <p className="text-sm text-gray-600">Настройка голосового ИИ-агента</p>
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