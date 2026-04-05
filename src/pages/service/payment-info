import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function PaymentInfoPage() {
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
            <span className="text-gray-900">Как оплатить наши услуги</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-bank-card-line"></i>
              Способы оплаты
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Как оплатить наши услуги?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Мы предлагаем удобные способы оплаты наших услуг. Выберите наиболее подходящий для вас вариант.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Способы оплаты</h2>
            
            {/* Card Payment */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500 flex-shrink-0">
                  <i className="ri-bank-card-line text-white text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Оплата по номеру карты</h3>
                  <p className="text-gray-600 text-sm mb-4">Самый быстрый и удобный способ оплаты</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <i className="ri-bank-card-2-line text-blue-600 text-xl"></i>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Номер карты</p>
                      <p className="font-mono text-xl font-bold text-gray-900">2202 2080 4663 7246</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Банк</p>
                        <p className="font-semibold text-gray-900">Сбербанк</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Получатель</p>
                        <p className="font-semibold text-gray-900">Иван А.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-900 flex items-start gap-2">
                  <i className="ri-information-line text-lg mt-0.5"></i>
                  <span>После оплаты сохраните чек и отправьте нам на WhatsApp для подтверждения</span>
                </p>
              </div>
            </div>

            {/* Bank Account Payment */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-500 flex-shrink-0">
                  <i className="ri-building-line text-white text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Оплата по расчётному счёту</h3>
                  <p className="text-gray-600 text-sm mb-2">Для юридических лиц и ИП</p>
                  <div className="bg-amber-100 rounded-lg px-3 py-2 inline-block">
                    <p className="text-sm text-amber-900 font-semibold flex items-center gap-2">
                      <i className="ri-alert-line"></i>
                      Цена БЕЗ СКИДКИ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5">
                <p className="text-gray-700 text-sm mb-3">
                  Для получения реквизитов и выставления счёта свяжитесь с нами через WhatsApp или Telegram.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/79996388186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    <i className="ri-whatsapp-line"></i>
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/+SahJe6ec3fk3YjNi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    <i className="ri-telegram-line"></i>
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Условия оплаты</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
              <div className="divide-y divide-gray-200">
                <div className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-money-dollar-circle-line text-emerald-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Сумма до 10.000₽</h4>
                    <p className="text-gray-600 text-sm">Оплата производится в полном объёме</p>
                  </div>
                </div>
                
                <div className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-percent-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Сумма выше 10.000₽</h4>
                    <p className="text-gray-600 text-sm">Возможна оплата по предоплате — 50% от стоимости</p>
                  </div>
                </div>

                <div className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-gift-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Комплексные услуги</h4>
                    <p className="text-gray-600 text-sm mb-2">При заказе нескольких услуг действуют скидки:</p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Бот для центра в Telegram + диагностика ПКШ = <strong>19.000₽</strong> (вместо 23.000₽)</li>
                      <li>• Бот для центра в Telegram + поздравление от Деда Мороза = <strong>14.500₽</strong> (вместо 16.500₽)</li>
                      <li>• Бот для центра в Telegram + VK = <strong>18.000₽</strong> (вместо 20.000₽)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <i className="ri-alert-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Важная информация</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <i className="ri-arrow-right-s-line text-amber-600 mt-0.5"></i>
                      <span>Скидки и места на услуги <strong>ограничены</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-arrow-right-s-line text-amber-600 mt-0.5"></i>
                      <span>Цены могут <strong>повыситься</strong> — успейте заказать по текущей стоимости!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-arrow-right-s-line text-amber-600 mt-0.5"></i>
                      <span>После оплаты обязательно отправьте подтверждение (чек/скриншот) на WhatsApp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Остались вопросы?</h3>
            <p className="text-gray-600 mb-6">Свяжитесь с нами удобным способом, и мы поможем вам с оплатой</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/79996388186"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Написать в WhatsApp
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
