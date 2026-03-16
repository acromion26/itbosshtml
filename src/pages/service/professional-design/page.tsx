import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function ProfessionalDesignPage() {
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
            <span className="text-gray-900">Создание картинок от дизайнера</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-palette-line"></i>
              Дизайн и оформление
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Создание картинок от профессионального дизайнера
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Уникальные иллюстрации и графика для вашего бизнеса — каждая картинка создаётся вручную с учётом всех ваших пожеланий.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20graphic%20designer%20workspace%20with%20digital%20tablet%20drawing%20colorful%20illustrations%2C%20creative%20design%20process%2C%20modern%20minimalist%20studio%20setup%2C%20vibrant%20colors%20and%20artistic%20tools%2C%20professional%20business%20graphics&width=800&height=450&seq=design001&orientation=landscape"
              alt="Профессиональный дизайн"
              className="w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что мы предлагаем?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Наш профессиональный дизайнер создаст для вас уникальные иллюстрации, которые идеально впишутся в ваш бренд и помогут выделиться среди конкурентов. Каждая картинка рисуется самостоятельно — никаких шаблонов и стоковых изображений.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Возможности</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Любой стиль:</strong> минимализм, реализм, мультяшный, корпоративный, hand-drawn и другие</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Любая цветовая гамма:</strong> подберём цвета под ваш бренд или создадим новую палитру</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Различные размеры:</strong> от иконок до больших баннеров — любой формат под ваши задачи</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Индивидуальный подход:</strong> учитываем все ваши пожелания и вносим правки до полного утверждения</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Опыт в различных проектах:</strong> работали с бизнесом разных сфер — от детских центров до IT-компаний</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Для чего подойдут наши иллюстрации?</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-pages-line text-rose-600"></i>
                  Для сайтов и лендингов
                </h3>
                <p className="text-sm text-gray-600">Уникальные иллюстрации для разделов, баннеров и декоративных элементов</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-smartphone-line text-rose-600"></i>
                  Для соцсетей
                </h3>
                <p className="text-sm text-gray-600">Посты, сторис, обложки для групп и каналов</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-advertisement-line text-rose-600"></i>
                  Для рекламы
                </h3>
                <p className="text-sm text-gray-600">Баннеры, креативы для таргета, рекламные материалы</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-presentation-line text-rose-600"></i>
                  Для презентаций
                </h3>
                <p className="text-sm text-gray-600">Инфографика, иконки, иллюстрации для слайдов</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-file-text-line text-rose-600"></i>
                  Для документов
                </h3>
                <p className="text-sm text-gray-600">Логотипы, фирменный стиль, брендбуки</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-shopping-bag-line text-rose-600"></i>
                  Для товаров
                </h3>
                <p className="text-sm text-gray-600">Упаковка, этикетки, мерч</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-emerald-600">от 3.500₽</span>
                <span className="text-gray-600">за картинку</span>
              </div>
              <p className="text-gray-700 mb-4">
                Стоимость обсуждается индивидуально в зависимости от сложности, размера и количества правок.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-emerald-600"></i>
                  Простые иконки и элементы — от 3.500₽
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-emerald-600"></i>
                  Иллюстрации средней сложности — от 5.000₽
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-emerald-600"></i>
                  Сложные композиции и баннеры — от 8.000₽
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-emerald-600"></i>
                  Пакетные предложения — скидка при заказе от 5 картинок
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-lightbulb-line text-sky-600 text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Как заказать?</p>
                  <p className="text-sm text-gray-700">
                    Напишите нам в WhatsApp, опишите задачу, приложите примеры стиля (если есть) — мы оценим стоимость и сроки, после чего приступим к работе. Обычно одна иллюстрация занимает 2-5 дней в зависимости от сложности.
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