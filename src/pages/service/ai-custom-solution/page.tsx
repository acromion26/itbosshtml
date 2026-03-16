import { Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function AICustomSolutionPage() {
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
            <span className="text-gray-900">Кастомное ИИ-решение</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="ri-robot-line"></i>
              ИИ-автоматизация
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Кастомное ИИ-решение
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Индивидуальная разработка ИИ-решений под уникальные задачи вашего бизнеса. Создаём системы автоматизации любой сложности с использованием искусственного интеллекта.
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое кастомное ИИ-решение?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Это индивидуально разработанная система на базе искусственного интеллекта, которая решает специфические задачи вашего бизнеса. Мы анализируем ваши процессы и создаём уникальное решение, которое идеально подходит под ваши требования.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Примеры кастомных решений</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>ИИ-системы для анализа больших данных</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Автоматизация уникальных бизнес-процессов</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Интеллектуальные системы прогнозирования</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>ИИ-помощники для специфических отраслей</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Системы распознавания и классификации</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Комплексная автоматизация с ИИ</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Процесс разработки</h2>
            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-emerald-600 flex-shrink-0">1.</span>
                <span><strong>Анализ задачи</strong> — изучаем ваши процессы и определяем требования</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-emerald-600 flex-shrink-0">2.</span>
                <span><strong>Проектирование решения</strong> — разрабатываем архитектуру системы</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-emerald-600 flex-shrink-0">3.</span>
                <span><strong>Разработка и обучение ИИ</strong> — создаём и настраиваем систему</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-emerald-600 flex-shrink-0">4.</span>
                <span><strong>Тестирование</strong> — проверяем работу на реальных данных</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-emerald-600 flex-shrink-0">5.</span>
                <span><strong>Внедрение</strong> — интегрируем решение в ваши процессы</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-emerald-600 flex-shrink-0">6.</span>
                <span><strong>Поддержка</strong> — обеспечиваем стабильную работу системы</span>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Преимущества индивидуального решения</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Решение точно соответствует вашим задачам</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Максимальная эффективность автоматизации</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Интеграция с вашими системами</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Конкурентное преимущество</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-star-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Возможность масштабирования</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Для кого подходит?</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Компании с уникальными бизнес-процессами</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Бизнес, которому не подходят готовые решения</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Организации, стремящиеся к инновациям</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-emerald-500 text-xl mt-0.5 flex-shrink-0"></i>
                <span>Проекты, требующие специфической автоматизации</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Стоимость</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <p className="text-lg text-gray-700 mb-3 font-semibold">
                Стоимость полностью индивидуальная
              </p>
              <p className="text-gray-600 mb-4">
                Цена зависит от сложности задачи, объёма работ, требуемых технологий и сроков реализации. Каждый проект уникален и требует индивидуальной оценки.
              </p>
              <p className="text-sm text-gray-600">
                Свяжитесь с нами для обсуждения вашей задачи и получения коммерческого предложения
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
              Обсудить проект в WhatsApp
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