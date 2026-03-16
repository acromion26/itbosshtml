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
            <span className="text-gray-900">Чат-бот для Макс (clever.app)</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-tools-line"></i>
              В разработке
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Чат-бот для Макс (clever.app)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Данная услуга находится в разработке. Скоро мы предложим вам полнофункциональное решение для автоматизации общения в Макс.
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-time-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Скоро запуск!</h3>
                <p className="text-gray-600 mb-4">
                  Мы работаем над созданием мощного чат-бота для платформы Макс. Следите за обновлениями в наших социальных сетях.
                </p>
                <p className="text-sm text-gray-500">
                  Хотите узнать первыми о запуске? Свяжитесь с нами через WhatsApp или Telegram.
                </p>
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
              Связаться через WhatsApp
            </a>
            <a
              href="https://t.me/+SahJe6ec3fk3YjNi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-telegram-line text-xl"></i>
              Наш Telegram-канал
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
