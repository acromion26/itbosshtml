import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function VKCommunityDesignPage() {
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
            <span className="text-gray-900">Оформление ВК сообщества</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-palette-line"></i>
              Дизайн и оформление
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Оформление ВК сообщества от опытного дизайнера
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональное оформление вашего сообщества ВКонтакте — даст «новое дыхание» вашему бизнесу и повысит доверие клиентов.
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему важно оформлять группу в VK?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span><strong>Первое впечатление имеет решающее значение.</strong> Грамотное оформление группы ВКонтакте не только привлекает внимание, но и повышает доверие к вашему бренду.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Помогает <strong>выделиться среди конкурентов</strong> и создать узнаваемый стиль.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Профессионально оформленное сообщество способствует <strong>лучшему восприятию информации</strong>, экономит время пользователей и создаёт приятную атмосферу для взаимодействия.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Чем поможет наш дизайнер?</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-image-line text-rose-600 text-xl"></i>
                  <h3 className="font-bold text-gray-900">Аватарка для сообщества</h3>
                </div>
                <p className="text-sm text-gray-600">Яркий и запоминающийся логотип</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-landscape-line text-rose-600 text-xl"></i>
                  <h3 className="font-bold text-gray-900">Обложка для сообщества</h3>
                </div>
                <p className="text-sm text-gray-600">Стильный баннер с ключевой информацией</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-menu-line text-rose-600 text-xl"></i>
                  <h3 className="font-bold text-gray-900">Иконки меню (4-5 шт)</h3>
                </div>
                <p className="text-sm text-gray-600">Удобная навигация по разделам</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-layout-grid-line text-rose-600 text-xl"></i>
                  <h3 className="font-bold text-gray-900">Виджеты</h3>
                </div>
                <p className="text-sm text-gray-600">3 горизонтальных или 1 вертикальный</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100 md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-shopping-bag-line text-rose-600 text-xl"></i>
                  <h3 className="font-bold text-gray-900">Оформление товаров (до 10 шт)</h3>
                </div>
                <p className="text-sm text-gray-600">Красивые карточки для ваших услуг или продуктов</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Какая информация потребуется от вас?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Опишите пожелания по стилю, цвету (можете привести примеры — сбросить понравившиеся группы по стилю и оформлению)</li>
              <li>Выберите, какое количество виджетов и меню вы хотите и какую информацию они должны отображать</li>
              <li>Напишите список направлений вашего центра, для которых нужно создать оформление</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Как выстраивается работа?</h2>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>Вы вносите полную оплату за оформление (с учётом вашего тарифа)</li>
              <li>Сбрасываете нам список информации из 3 пунктов выше + добавляете наш рабочий аккаунт администратором в ваше сообщество</li>
              <li>Сроки нашей работы в среднем — от 5 до 7 дней (в некоторых случаях сроки могут задержаться по объективным причинам)</li>
              <li>На предоставление информации у вас есть 1 неделя, если срок задержится — мы вправе отложить ваш заказ на позднее время</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Тарифы</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-emerald-600">8.000₽</span>
                  <span className="text-gray-600">— Тариф 1</span>
                </div>
                <p className="text-gray-700 font-semibold mb-2">Оформление картинок для вашего сообщества</p>
                <p className="text-sm text-gray-600">Без установки в сообщество — вы получаете готовые файлы</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-emerald-600">13.000₽</span>
                  <span className="text-gray-600">— Тариф 2</span>
                </div>
                <p className="text-gray-700 font-semibold mb-2">Оформление + упаковка и установка</p>
                <p className="text-sm text-gray-600 mb-3">Полное оформление сообщества под ключ с установкой всех элементов</p>
                <div className="bg-white/60 rounded-lg p-4 mt-3">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Для тарифа 2 дополнительно потребуется:</p>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>Все ссылки на социальные сети вашего центра</li>
                    <li>Все контактные данные (почта, телефоны)</li>
                    <li>Ссылки на отзывы о вашем центре</li>
                    <li>Информация о центре: описание, адрес, время работы, услуги с описанием</li>
                    <li>Ваши пожелания</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-amber-600 text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Важно!</p>
                  <p className="text-sm text-gray-700">
                    При составлении текста учитывайте, что он же будет использован при заполнении сообщества. Если после оплаты вы не выходите на связь больше полугода — команда имеет право не возвращать средства, но может продолжить работу, если вы оплатите штрафной тариф в размере 3.000₽.
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