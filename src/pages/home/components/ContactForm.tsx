import { useState } from 'react';

type ContactMethod = 'email' | 'telegram' | 'phone';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [contactMethod, setContactMethod] = useState<ContactMethod>('email');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = data.get('message') as string;
    if (message && message.length > 500) return;

    setLoading(true);
    const params = new URLSearchParams();
    data.forEach((value, key) => params.append(key, value as string));
    params.append('contact_method', contactMethod);

    try {
      await fetch('https://readdy.ai/api/form/d6jkfruc9mmd5omn5of0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const contactOptions: { id: ContactMethod; label: string; icon: string }[] = [
    { id: 'email', label: 'Email', icon: 'ri-mail-line' },
    { id: 'telegram', label: 'Telegram', icon: 'ri-telegram-line' },
    { id: 'phone', label: 'Телефон', icon: 'ri-phone-line' },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <span className="inline-block text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">Контакты</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Готовы обсудить<br />
              <span className="text-emerald-500">ваш проект?</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Оставьте заявку — мы свяжемся с вами в течение рабочего дня, ответим на вопросы
              и предложим подходящее решение.
            </p>

            <div className="space-y-5">
              {[
                { icon: 'ri-telegram-line', label: 'Telegram', value: '@VkTG23', href: 'https://t.me/VkTG23' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <i className={`${c.icon} text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                    <p className="text-gray-800 text-sm font-semibold group-hover:text-emerald-600 transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 mb-4">
                  <i className="ri-check-line text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500 text-sm">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form
                data-readdy-form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Иван Иванов"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  />
                </div>

                {/* Contact method selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Как с вами связаться?</label>
                  <div className="flex gap-2 mb-3">
                    {contactOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setContactMethod(opt.id)}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                          contactMethod === opt.id
                            ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                            : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
                        }`}
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className={`${opt.icon} text-sm`}></i>
                        </div>
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {contactMethod === 'email' && (
                    <input
                      key="email"
                      type="email"
                      name="email"
                      required
                      placeholder="ivan@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    />
                  )}
                  {contactMethod === 'telegram' && (
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">@</span>
                      <input
                        key="telegram"
                        type="text"
                        name="telegram"
                        required
                        placeholder="username"
                        className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                      />
                    </div>
                  )}
                  {contactMethod === 'phone' && (
                    <input
                      key="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+7 (999) 000-00-00"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Услуга</label>
                  <select
                    name="service"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition cursor-pointer"
                  >
                    <option value="">Выберите услугу</option>
                    <option>Чат-бот для Telegram</option>
                    <option>Чат-бот для ВКонтакте</option>
                    <option>Чат-бот для Макс</option>
                    <option>Бот с ИИ</option>
                    <option>ИИ-автоматизация бизнеса</option>
                    <option>Сайт на Тильде</option>
                    <option>Оформление сообщества</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Сообщение
                    <span className={`ml-2 text-xs ${charCount > 450 ? 'text-red-400' : 'text-gray-400'}`}>{charCount}/500</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder="Расскажите о вашем проекте..."
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="whitespace-nowrap w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors cursor-pointer text-sm"
                >
                  {loading ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
