import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

interface ServiceContent {
  title: string;
  description: string;
  content: React.ReactNode;
}

const servicesData: Record<string, ServiceContent> = {
  'telegram-bot-clever': {
    title: 'Чат-бот для Вашего центра в Telegram под ключ на базе платформы clever.app',
    description: 'Чат-бот в телеграмм - виртуальный администратор в Вашем детском центре',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Чат-бот в телеграмм - виртуальный администратор в Вашем детском центре</strong>
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Польза чат-бота для клиента:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Клиент получает всю нужную информацию о Вашем центре:</li>
        </ol>
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
          <img 
            src="https://sun9-41.userapi.com/s/v1/ig2/SIWRZPj70NWTooISAcPVC1MNFCX8ogIk3wkwOm2zyfkZC9TrBawxr6jwl_wIL36B-I2ilZefNTEioK8xLvgv9D-U.jpg?quality=95&as=32x37,48x55,72x83,108x125,160x185,240x277,360x416,480x555,540x624,640x740,720x832,1056x1221&from=bu&cs=1056x0"
            alt="Информация о центре в боте"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm text-gray-600 bg-gray-50">
            1. Информация о Вашем центре - его заслуги. 2. Список Ваших услуг - с их описанием. 3. Контактные данные Вашего центра. 4. Часы работы. 5. Отзывы. 6. Адрес. 7. Социальные сети центра. 8. Предлагает доп. функции и подарок
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>2. Клиент может записаться онлайн на любое направление в центре</li>
          <li>3. Клиент может получить подарок от Вашего центра прямо в боте</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Польза от чат-бота для центра:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Как только клиент запускает бот - соглашается на обработку его персональных данных, а также дает добро на получение рассылок (это происходит автоматически и прописано в правилах телеграмма)</li>
          <li>Дает возможность обрабатывать и общаться с клиентами автоматически 24 часа в сутки - без выходных</li>
          <li>Дает возможность получать заявки от клиентов в онлайн режиме:</li>
        </ol>
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
          <img 
            src="https://sun9-85.userapi.com/s/v1/ig2/Eq15YNTGFGEsfrGaYauyxuQh2gb1f2AIjwd8O9SfjUBUOKbLXEH-60GJByutG4Pk8ldLE5F1oU4CtBe6-BEw6x31.jpg?quality=95&as=32x17,48x26,72x38,108x57,160x85,240x128,360x191,480x255,540x287,640x340,720x383,1080x574,1104x587&from=bu&cs=1104x0"
            alt="Заявки от клиентов"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm text-gray-600 bg-gray-50">
            Вы получаете всю нужную информацию о клиенте - ФИ ребенка, номер телефона родителя, а также направление, на которое хочет записаться клиент
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>4. Бот дает возможность к безграничному количеству рассылок по всей аудитории. Рассылки создаются менее чем за минуту, а рассылаются автоматически за минуту.</li>
          <li>5. Бот сохраняет всех клиентов, которые воспользовались ботом, в своей СРМ системе, откуда Вы сможете за 1 нажатие - скачать файл со всеми Вашими клиентами и их персональными данными</li>
          <li>6. Бот можно в дальнейшем дополнять различными функциями, что позволит развивать функционал вашего бота и повышать актуальность вашего центра</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какая информация потребуется для создания бота для центра?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Все ссылки на социальные сети Вашего центра (телеграмм, сайт, whatsapp, Вконтакте, инстаграмм)</li>
          <li>2. Все контактные данные, по которым можно будет связаться (почта, номер телефона администратора(ов), (номер руководителя - по желанию) )</li>
          <li>3. Ссылка(и) на отзывы о вашем центре</li>
          <li>4. Информация о центре:</li>
          <li className="ml-6">4.1. Описание центра (заслуги центра)</li>
          <li className="ml-6">4.2. Адрес нахождения центре</li>
          <li className="ml-6">4.3 Время работы центра</li>
          <li className="ml-6">4.3. Услуги клуба: Список всех направлений центра и описание для каждого из направлений + по 1 фото к каждому из направлений</li>
          <li>5. Логотип центра / клуба</li>
          <li>6. Ваши пожелания</li>
          <li>7. Подарок, который мы установим в Ваш бот</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Важно! При составление текста, Вы должны учитывать то, что он же и будет использован при создании бота!
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Как начать с нами работу?</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Вносите полную оплату за разработку бота</li>
          <li>Готовите всю информацию по списку</li>
          <li>Сбрасываете всю информацию нам на WhatsApp</li>
          <li>Регистрируетесь на платформе по нашей ссылке + подтверждаете регистрацию на почте - только после предоставления всей информации по списку - <a href="https://app.cleverapp.pro/register?ref_id=1138" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">зарегистрироваться</a></li>
          <li>Сбрасываете данные, которые вы использовали при регистрации - логин и пароль</li>
          <li>Переходите по ссылке для подключения онлайн заявок</li>
          <li>Создаете ссылку для вашего бота</li>
        </ol>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость данного бота и условия:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Стоимость бота для центра - 10.000р</strong> (места ограничены)</li>
          <li>Сроки нашей работы в среднем - от 3 до 7 дней, в некоторых случаях сроки могут задержаться по объективным причинам - вы не предоставили какую-нибудь информацию или не отвечаете на наши смс</li>
          <li>Наша работа начинается, после выполнения вами 5 пункта условий - когда Вы предоставите нам всю информацию о центре, а также данные регистрации на платформе + на предоставлении информации у Вас есть 1 неделя, если срок задержится - мы вправе отложить Ваш заказ на позднее время</li>
          <li>К данному боту прилагается обучение - его вы получите после окончания настройки бота</li>
          <li>Если после оплаты Вы не выходите на связь больше полугода - команда имеет права не возвращать Вам средства за бот, но может продолжить работу над ботом, если вы оплатите штрафной тариф в размере 3000р</li>
          <li><strong>! ВАЖНО: Каждый чат-бот в телеграмме имеет ежемесячную плату за его работу, ее сбирает телеграмм и платформа, не наша команда! Ежемесячная подписка стоит 1100р !</strong></li>
        </ol>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'telegram-bot-diagnostics': {
    title: 'Чат-бот - диагностика по подготовке к школе по методике Анжелы Мазаевой в Telegram',
    description: 'Онлайн‑тест по методике Анжелы Мазаевой внутри чат‑бота: тест по подготовке к школе с автоматической проверкой',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Чат-бот диагностика - онлайн‑тест по методике Анжелы Мазаевой внутри чат‑бота: тест по подготовке к школе с автоматической проверкой. Подходит для оценки готовности по ключевым навыкам: речь, мышление, мелкая моторика и внимание
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Польза чат-бота для клиента:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>бот сам проводит онлайн тестирование</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>позволяет увидеть полную картину подготовки ребенка к школе, так как содержит важные вопросы по готовой методике</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>бот сам высчитывает баллы и выводит результат с рекомендациями в онлайн режиме:</span>
          </li>
        </ul>
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
          <img 
            src="https://sun9-59.userapi.com/s/v1/ig2/Pk4X6R4s2BqoUFiQeqjIJl6L57DaPnaTmzfDnh7K0j3TYfCsf6IfPSb1bRE0esGSqOhUW_c2hf1KVT9IvjXYRNZm.jpg?quality=95&as=32x47,48x71,72x107,108x160,160x237,240x356,360x534,480x712,540x801,640x949,720x1068,1080x1602,1178x1747&from=bu&cs=1178x0"
            alt="Результаты диагностики"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm text-gray-600 bg-gray-50">
            Также бот предлагает получить подарок, а также записаться на направление по ПКШ
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Польза от чат-бота для центра:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Как только клиент запускает бот - соглашается на обработку его персональных данных, а также дает добро на получение рассылок (это происходит автоматически и прописано в правилах телеграмма)</li>
          <li>Дает возможность обрабатывать и общаться с клиентами автоматически 24 часа в сутки - без выходных</li>
          <li>Дает возможность получать заявки от клиентов в онлайн режиме:</li>
        </ol>
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
          <img 
            src="https://sun9-17.userapi.com/s/v1/ig2/XIe2eT3Q06wI1_mz7Zk9ELPu-ref4qlKt_ZH9wsLdsTufeS2PdZMDsSGJlnvWwKchTs8pWLDusqj3dNr--S66QG2.jpg?quality=95&as=32x15,48x22,72x33,108x49,160x73,240x110,360x165,480x220,540x247,640x293,720x330,1080x495,1176x539&from=bu&cs=1176x0"
            alt="Заявки с баллами"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm text-gray-600 bg-gray-50">
            Бот выводит не только контакты клиента, но и количество баллов за тест
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>4. Бот дает возможность к безграничному количеству рассылок по всей аудитории. Рассылки создаются менее чем за минуту, а рассылаются автоматически за минуту.</li>
          <li>5. Бот сохраняет всех клиентов, которые воспользовались ботом, в своей СРМ системе, откуда Вы сможете за 1 нажатие - скачать файл со всеми Вашими клиентами и их персональными данными</li>
          <li>6. Бот можно в дальнейшем дополнять различными функциями, что позволит развивать функционал вашего бота и повышать актуальность вашего центра</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что Вы получите?</h3>
        <p className="text-gray-700 mb-3">Вы получите:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Чат-бот с авторской диагностикой</li>
          <li>Готовый сертификат</li>
          <li>Весь список методических вопросов в pdf файле</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какая информация потребуется для создания бота по ПКШ?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Фото логотипа центра, если имеется</li>
          <li>2. Все группы вашего центра - WhatsApp, VK группы</li>
          <li>3. Адрес вашего центра</li>
          <li>4. Все контактные данные, по которым можно будет связаться (почта, номер телефона администратора(ов)</li>
          <li>5. Выбрать, на какую сумму устанавливаем сертификат (в боте он автоматически будет на 2000р)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Как начать с нами работу?</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Вносите полную оплату за разработку бота</li>
          <li>Готовите всю информацию по списку</li>
          <li>Сбрасываете всю информацию нам на WhatsApp</li>
          <li>Регистрируетесь на платформе по нашей ссылке + подтверждаете регистрацию на почте - только после предоставления всей информации по списку - <a href="https://app.cleverapp.pro/register?ref_id=1138" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">зарегистрироваться</a></li>
          <li>Сбрасываете данные, которые вы использовали при регистрации - логин и пароль</li>
          <li>Переходите по ссылке для подключения онлайн заявок</li>
          <li>Создаете ссылку для вашего бота</li>
        </ol>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость данного бота и условия:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Стоимость бота - 13.000р</strong> (места ограничены)</li>
          <li>Сроки нашей работы в среднем - от 1 до 3 дней, в некоторых случаях сроки могут задержаться по объективным причинам - вы не предоставили какую-нибудь информацию или не отвечаете на наши смс + на предоставлении информации у Вас есть 1 неделя, если срок задержится - мы вправе отложить Ваш заказ на позднее время</li>
          <li>Наша работа начинается, после выполнения вами 5 пункта условий - когда Вы предоставите нам всю информацию по списку, а также данные регистрации на платформе</li>
          <li>К данному боту прилагается обучение - его вы получите после окончания настройки бота</li>
          <li>Если после оплаты Вы не выходите на связь больше полугода - команда имеет права не возвращать Вам средства за бот, но может продолжить работу над ботом, если вы оплатите штрафной тариф в размере 3000р</li>
          <li><strong>! ВАЖНО: Каждый чат-бот в телеграмме имеет ежемесячную плату за его работу, ее сбирает телеграмм и платформа, не наша команда! Ежемесячная подписка стоит 1100р !</strong></li>
        </ol>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'telegram-bot-vk': {
    title: 'Чат-бот для Вашего центра под ключ в VK (senler)',
    description: 'Чат-бот в VK - виртуальный администратор в Вашем детском центре',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Чат-бот в VK - виртуальный администратор в Вашем детском центре</strong>
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Польза чат-бота для клиента:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Клиент получает всю нужную информацию о Вашем центре:</li>
        </ol>
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
          <img 
            src="https://sun9-53.userapi.com/s/v1/ig2/k-ORt3zniM7FxATZFqXhbpBnx2oyTc8EdrTzNzy62FQJ5zgS0R4_4IWjfIPj-rZu0klu__hYds_nG4zmRiepV85i.jpg?quality=95&as=32x15,48x22,72x33,108x50,160x74,240x111,360x167,480x222,488x226&from=bu&cs=488x0"
            alt="Информация о центре в боте VK"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm text-gray-600 bg-gray-50">
            1. Информация о Вашем центре - его заслуги. 2. Список Ваших услуг - с их описанием. 3. Контактные данные Вашего центра. 4. Часы работы. 5. Отзывы. 6. Адрес. 7. Социальные сети центра. 8. Предлагает доп. функции и подарок
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>2. Клиент может записаться онлайн на любое направление в центре</li>
          <li>3. Клиент может получить подарок от Вашего центра прямо в боте</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Польза от чат-бота для центра:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Как только клиент запускает бот - соглашается на обработку его персональных данных, а также дает добро на получение рассылок (это происходит автоматически и прописано в правилах телеграмма)</li>
          <li>Дает возможность обрабатывать и общаться с клиентами автоматически 24 часа в сутки - без выходных</li>
          <li>Дает возможность получать заявки от клиентов в онлайн режиме:</li>
        </ol>
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
          <img 
            src="https://sun9-42.userapi.com/s/v1/ig2/FDyehgaYp7WpCkhqX4h4n-QzqQIq9aFGdG4aASjIw5ga2BRpCMu1lbxV_OERPI-H0FgEmxcdLP3cQ8bcix_ec08L.jpg?quality=95&as=32x15,48x23,72x34,108x51,160x75,240x113,360x169,480x225,540x253,640x300,720x338,1080x507,1178x553&from=bu&cs=1178x0"
            alt="Заявки от клиентов VK"
            className="w-full h-auto"
          />
          <p className="p-4 text-sm text-gray-600 bg-gray-50">
            Вы получаете всю нужную информацию о клиенте - ФИ ребенка, номер телефона родителя, а также направление, на которое хочет записаться клиент
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>4. Бот дает возможность к безграничному количеству рассылок по всей аудитории. Рассылки создаются менее чем за минуту, а рассылаются автоматически за минуту.</li>
          <li>5. Бот сохраняет всех клиентов, которые воспользовались ботом, в своей СРМ системе, откуда Вы сможете за 1 нажатие - скачать файл со всеми Вашими клиентами и их персональными данными</li>
          <li>6. Бот можно в дальнейшем дополнять различными функциями, что позволит развивать функционал вашего бота и повышать актуальность вашего центра</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какая информация потребуется для создания бота для центра?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Все ссылки на социальные сети Вашего центра (телеграмм, сайт, whatsapp, Вконтакте, инстаграмм)</li>
          <li>2. Все контактные данные, по которым можно будет связаться (почта, номер телефона администратора(ов), (номер руководителя - по желанию) )</li>
          <li>3. Ссылка(и) на отзывы о вашем центре</li>
          <li>4. Информация о центре:</li>
          <li className="ml-6">4.1. Описание центра (заслуги центра)</li>
          <li className="ml-6">4.2. Адрес нахождения центре</li>
          <li className="ml-6">4.3 Время работы центра</li>
          <li className="ml-6">4.3. Услуги клуба: Список всех направлений центра и описание для каждого из направлений + по 1 фото к каждому из направлений</li>
          <li>5. Логотип центра / клуба</li>
          <li>6. Ваши пожелания</li>
          <li>7. Подарок, который мы установим в Ваш бот</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Важно! При составление текста, Вы должны учитывать то, что он же и будет использован при создании бота!
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Как начать с нами работу?</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Вносите полную оплату за разработку бота</li>
          <li>Готовите всю информацию по списку</li>
          <li>Сбрасываете всю информацию нам на WhatsApp</li>
          <li>Добавляете наш рабочий аккаунт администратором в вашу группу в ВК</li>
          <li>Сбрасываете ваши данные от аккаунта senler (данные для входа на платформу senler - это ваши данные от аккаунта в VK. Нам они потребуются только для входа на платформу - мы не заходим на Ваш аккаунт VK, поэтому все ваши личные данные останутся в полной конфиденциальности)</li>
          <li>После сброса данных - нужно будет подтвердить вход на аккаунт через sms, отправленное на ваш номер</li>
        </ol>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость данного бота и условия:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Стоимость бота для центра - 10.000р</strong> (места ограничены)</li>
          <li>Сроки нашей работы в среднем - от 3 до 7 дней, в некоторых случаях сроки могут задержаться по объективным причинам - вы не предоставили какую-нибудь информацию или не отвечаете на наши смс + на предоставлении информации у Вас есть 1 неделя, если срок задержится - мы вправе отложить Ваш заказ на позднее время</li>
          <li>Наша работа начинается, после выполнения вами 5 пункта условий - когда Вы предоставите нам всю информацию о центре, а также данные от аккаунта senler</li>
          <li>К данному боту прилагается обучение - его вы получите после окончания настройки бота</li>
          <li>Если после оплаты Вы не выходите на связь больше полугода - команда имеет права не возвращать Вам средства за бот, но может продолжить работу над ботом, если вы оплатите штрафной тариф в размере 3000р</li>
          <li><strong>! ВАЖНО: каждый чат-бот в VK имеет ежемесячную плату, ее сбирает телеграмм и платформа, не наша команда! Ежемесячная подписка стоит 400р!</strong> (данная подписка позволяет пользоваться Вашим ботом до 100-200 клиентам в день). Также - есть бесплатный тариф работы Вашего бота - 1/2 клиента в день.</li>
        </ol>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'telegram-bot-ai-protalk': {
    title: 'Чат-бот с ИИ для Telegram (Pro Talk)',
    description: 'Умный чат-бот с искусственным интеллектом для автоматизации общения с клиентами',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Чат-бот с искусственным интеллектом Pro Talk — это современное решение для автоматизации общения с клиентами. Бот понимает естественный язык, отвечает на вопросы и помогает клиентам 24/7.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Возможности ИИ-бота:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Понимает вопросы клиентов на естественном языке</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Отвечает на часто задаваемые вопросы автоматически</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Консультирует по услугам и ценам</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Собирает заявки и контакты клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Работает 24/7 без выходных</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обучается на вашей базе знаний</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Преимущества для бизнеса:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Снижение нагрузки на операторов и администраторов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Мгновенные ответы клиентам в любое время</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Повышение конверсии за счёт быстрой обработки запросов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Сбор аналитики по запросам клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Интеграция с CRM-системами</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что потребуется для настройки?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Описание вашего бизнеса и услуг</li>
          <li>2. База знаний: часто задаваемые вопросы и ответы</li>
          <li>3. Прайс-лист и информация о продуктах/услугах</li>
          <li>4. Контактные данные для связи с клиентами</li>
          <li>5. Логотип и фирменный стиль (опционально)</li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость разработки — от 15.000р</strong></li>
          <li>Срок разработки: 3-5 дней</li>
          <li>Обучение работе с ботом включено</li>
          <li>Техническая поддержка в течение месяца</li>
          <li>Возможность доработки и расширения функционала</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'vk-bot-ai-protalk': {
    title: 'Чат-бот с ИИ для ВКонтакте (Pro Talk)',
    description: 'Умный чат-бот с искусственным интеллектом для автоматизации общения в ВКонтакте',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Чат-бот с искусственным интеллектом Pro Talk для ВКонтакте — это современное решение для автоматизации общения с подписчиками вашего сообщества. Бот понимает естественный язык, отвечает на вопросы и помогает клиентам 24/7.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Возможности ИИ-бота для VK:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Понимает вопросы клиентов на естественном языке</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Отвечает на часто задаваемые вопросы автоматически</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Консультирует по услугам и ценам</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Собирает заявки и контакты клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Работает 24/7 без выходных</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обучается на вашей базе знаний</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Преимущества для бизнеса:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Снижение нагрузки на администраторов сообщества</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Мгновенные ответы подписчикам в любое время</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Повышение вовлечённости аудитории</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Сбор аналитики по запросам клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Интеграция с CRM-системами</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что потребуется для настройки?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Описание вашего бизнеса и услуг</li>
          <li>2. База знаний: часто задаваемые вопросы и ответы</li>
          <li>3. Прайс-лист и информация о продуктах/услугах</li>
          <li>4. Контактные данные для связи с клиентами</li>
          <li>5. Права администратора в сообществе ВКонтакте</li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость разработки — от 15.000р</strong></li>
          <li>Срок разработки: 3-5 дней</li>
          <li>Обучение работе с ботом включено</li>
          <li>Техническая поддержка в течение месяца</li>
          <li>Возможность доработки и расширения функционала</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'max-bot-turnkey': {
    title: 'Чат-бот под ключ для Макс',
    description: 'Полнофункциональный чат-бот для платформы Макс с автоматизацией записи и рассылками',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Чат-бот для платформы Макс — это виртуальный администратор для вашего детского центра, который работает 24/7 и помогает автоматизировать общение с клиентами.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Возможности бота:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Предоставляет информацию о центре и услугах</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Принимает онлайн-записи на занятия</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Отправляет подарки и бонусы клиентам</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Собирает контакты и заявки</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Делает массовые рассылки</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Сохраняет клиентов в CRM-системе</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что потребуется?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Информация о центре и его услугах</li>
          <li>2. Контактные данные</li>
          <li>3. Логотип центра</li>
          <li>4. Список направлений с описаниями и фото</li>
          <li>5. Подарок для клиентов</li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость — 10.000р</strong></li>
          <li>Срок разработки: 3-7 дней</li>
          <li>Обучение работе с ботом включено</li>
          <li>Возможность расширения функционала</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'max-bot-diagnostics': {
    title: 'Чат-бот диагностика ПКШ для Макс',
    description: 'Онлайн-тест по подготовке к школе по методике Анжелы Мазаевой для платформы Макс',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Чат-бот диагностика для платформы Макс — онлайн‑тест по методике Анжелы Мазаевой с автоматической проверкой. Подходит для оценки готовности ребёнка к школе по ключевым навыкам.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Возможности бота:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Проводит онлайн-тестирование автоматически</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Оценивает готовность по методике Анжелы Мазаевой</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Высчитывает баллы и выдаёт результат с рекомендациями</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Предлагает записаться на занятия</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Собирает контакты и результаты тестов</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что входит в комплект?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Чат-бот с авторской диагностикой</li>
          <li>2. Готовый сертификат для клиентов</li>
          <li>3. Список методических вопросов в PDF</li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость — 13.000р</strong></li>
          <li>Срок разработки: 1-3 дня</li>
          <li>Обучение работе с ботом включено</li>
          <li>Возможность расширения функционала</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'max-bot-ai-protalk': {
    title: 'Чат-бот с ИИ для Макс (Pro Talk)',
    description: 'Умный чат-бот с искусственным интеллектом для платформы Макс',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Чат-бот с искусственным интеллектом Pro Talk для платформы Макс — это современное решение для автоматизации общения с клиентами. Бот понимает естественный язык и отвечает на вопросы 24/7.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Возможности ИИ-бота:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Понимает вопросы на естественном языке</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Отвечает на часто задаваемые вопросы</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Консультирует по услугам</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Собирает заявки и контакты</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обучается на вашей базе знаний</span>
          </li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость — от 15.000р</strong></li>
          <li>Срок разработки: 3-5 дней</li>
          <li>Обучение работе с ботом включено</li>
          <li>Техническая поддержка в течение месяца</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'ai-bots-protalk': {
    title: 'Боты с искусственным интеллектом (Pro Talk)',
    description: 'Умные чат-боты с ИИ для автоматизации общения с клиентами на любой платформе',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Pro Talk — это платформа для создания умных чат-ботов с искусственным интеллектом. Боты понимают естественный язык, обучаются на вашей базе знаний и автоматизируют общение с клиентами.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Возможности ИИ-ботов:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Понимание естественного языка — бот общается как живой человек</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Автоматические ответы на часто задаваемые вопросы</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Консультация по услугам и продуктам</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Сбор заявок и контактов клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Работа 24/7 без выходных и перерывов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обучение на вашей базе знаний и документации</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Интеграция с Telegram, ВКонтакте, Макс и другими платформами</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Преимущества для бизнеса:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Снижение нагрузки на операторов и администраторов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Мгновенные ответы клиентам в любое время суток</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Повышение конверсии за счёт быстрой обработки запросов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Сбор аналитики по запросам и потребностям клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Масштабируемость — бот может обслуживать тысячи клиентов одновременно</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что потребуется для настройки?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Описание вашего бизнеса, продуктов и услуг</li>
          <li>2. База знаний: FAQ, инструкции, документация</li>
          <li>3. Прайс-лист и информация о ценах</li>
          <li>4. Контактные данные для связи с клиентами</li>
          <li>5. Примеры типичных диалогов с клиентами</li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость разработки — от 15.000р</strong></li>
          <li>Срок разработки: 3-5 дней</li>
          <li>Обучение работе с ботом включено</li>
          <li>Техническая поддержка в течение месяца</li>
          <li>Возможность доработки и расширения функционала</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'n8n-automation': {
    title: 'Настройка автоматизации бизнес-процессов n8n',
    description: 'Автоматизация рутинных задач и интеграция сервисов с помощью платформы n8n',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          n8n — это мощная платформа для автоматизации бизнес-процессов. Мы настроим автоматические сценарии, которые избавят вас от рутинных задач и свяжут все ваши сервисы в единую систему.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что можно автоматизировать:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обработка заявок из форм и чат-ботов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Автоматическая отправка уведомлений в Telegram, WhatsApp, Email</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Синхронизация данных между CRM, таблицами и базами данных</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Автоматическое создание задач и напоминаний</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Сбор и обработка данных из разных источников</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Генерация отчётов и аналитики</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Интеграция с любыми сервисами через API</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Преимущества автоматизации:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Экономия времени — автоматизация рутинных задач</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Снижение ошибок — исключение человеческого фактора</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Повышение скорости обработки заявок</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Единая система для всех процессов</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Примеры сценариев:</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-5">
            <h4 className="font-bold text-gray-900 mb-2">Обработка заявок</h4>
            <p className="text-gray-700 text-sm">Заявка из формы → Запись в Google Таблицы → Уведомление в Telegram → Создание задачи в CRM</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <h4 className="font-bold text-gray-900 mb-2">Напоминания клиентам</h4>
            <p className="text-gray-700 text-sm">Проверка расписания → Автоматическая отправка напоминаний за день до занятия в WhatsApp</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <h4 className="font-bold text-gray-900 mb-2">Сбор аналитики</h4>
            <p className="text-gray-700 text-sm">Ежедневный сбор данных из разных источников → Формирование отчёта → Отправка в Telegram</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость разработки — от 15.000р</strong></li>
          <li>Срок разработки: 3-5 дней</li>
          <li>Обучение работе с системой включено</li>
          <li>Техническая поддержка в течение месяца</li>
          <li>Возможность доработки и расширения функционала</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'ai-assistant-requests': {
    title: 'ИИ-ассистент для обработки заявок',
    description: 'Умный ассистент с искусственным интеллектом для автоматической обработки заявок клиентов',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          ИИ-ассистент — это умная система, которая автоматически обрабатывает заявки клиентов, отвечает на вопросы, квалифицирует лиды и передаёт готовые заявки менеджерам.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Возможности ИИ-ассистента:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Автоматический приём и обработка заявок 24/7</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Квалификация лидов — определение готовности клиента к покупке</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Ответы на типовые вопросы клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Сбор необходимой информации о клиенте</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Автоматическая запись данных в CRM</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Уведомление менеджеров о новых заявках</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Аналитика и отчёты по заявкам</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Преимущества для бизнеса:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Ни одна заявка не останется без ответа</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Мгновенная реакция на обращения клиентов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Снижение нагрузки на менеджеров</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Повышение конверсии за счёт быстрой обработки</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Экономия на зарплате операторов</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Как это работает:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Клиент оставляет заявку</h4>
              <p className="text-gray-700 text-sm">Через форму на сайте, чат-бот или мессенджер</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">ИИ-ассистент обрабатывает заявку</h4>
              <p className="text-gray-700 text-sm">Задаёт уточняющие вопросы, собирает информацию</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Квалификация лида</h4>
              <p className="text-gray-700 text-sm">ИИ определяет готовность клиента и приоритет заявки</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">4</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Передача менеджеру</h4>
              <p className="text-gray-700 text-sm">Готовая заявка с полной информацией отправляется менеджеру</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость — от 20.000р</strong></li>
          <li>Срок разработки: 5-7 дней</li>
          <li>Обучение работе с системой включено</li>
          <li>Техническая поддержка в течение месяца</li>
          <li>Интеграция с вашей CRM и мессенджерами</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'vk-community-design': {
    title: 'Оформление вашей группы в ВК',
    description: 'Профессиональное оформление сообщества ВКонтакте от дизайнера',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Оформление сообщества Вашего детского центра в VK — включает в себя работу профессионального дизайнера, которая даст "новое дыхание" вашему сообществу
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Почему важно оформлять группу в VK?</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Первое впечатление имеет решающее значение.</li>
          <li>Грамотное оформление группы ВКонтакте не только привлекает внимание, но и повышает доверие к вашему бренду, помогая выделиться среди конкурентов.</li>
          <li>Профессионально оформленное сообщество способствует лучшему восприятию информации, экономит время пользователей и создает приятную атмосферу для взаимодействия</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Чем поможет наш дизайнер?</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Аватарка для сообщества</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обложка для сообщества</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Иконки меню (4-5 шт)</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Виджет (3 горизонтальных или 1 вертикальных)</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Оформление товаров (до 10 шт)</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какая информация потребуется нам от Вас?</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Опишите пожелания по стилю, цвету (можете привести примеры - сбросить понравившуюся группы по стилю и оформлению)</li>
          <li>Выберите, какое количество виджетов и меню Вы хотите себе и какую информацию Вы хотите, чтобы они отображали</li>
          <li>Напишите список направлений вашего центра для которых нужно создать оформление</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Как выстраивается работа с нами?</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Вы вносите полную оплату за оформление (с учетом вашего тарифа)</li>
          <li>Сбрасываете нам список информации из 3 пунктов, который мы привели выше + добавляете наш рабочий аккаунт администратором в ваше сообщество</li>
          <li>Сроки нашей работы в среднем - от 5 до 7 дней, в некоторых случаях сроки могут задержаться по объективным причинам - вы не предоставили какую-нибудь информацию или не отвечаете на наши смс + на предоставлении информации у Вас есть 1 неделя, если срок задержится - мы вправе отложить Ваш заказ на позднее время</li>
          <li>Если после оплаты Вы не выходите на связь больше полугода - команда имеет права не возвращать Вам средства за бот, но может продолжить работу над ботом, если вы оплатите штрафной тариф в размере 3000р</li>
        </ol>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какие существуют тарифы?</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Оформление картинок для вашего сообщества - 8.000р</strong> - без установки в сообщество</li>
          <li><strong>Оформление картинок для вашего сообщества + упаковка и установка данных картинок в ваше сообщество - 13.000р</strong> (потребуется добавить наш рабочий аккаунт - администратором в ваше сообщество, для внесения изменений)</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какая доп. информация нам потребуется для 2 тарифа?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Все ссылки на социальные сети Вашего центра (телеграмм, сайт, whatsapp, Вконтакте, инстаграмм)</li>
          <li>2. Все контактные данные, по которым можно будет связаться (почта, номер телефона администратора(ов), (номер руководителя - по желанию) )</li>
          <li>3. Ссылка(и) на отзывы о вашем центре</li>
          <li>4. Информация о центре:</li>
          <li className="ml-6">4.1. Описание центра (заслуги центра)</li>
          <li className="ml-6">4.2. Адрес нахождения центре</li>
          <li className="ml-6">4.3 Время работы центра</li>
          <li className="ml-6">4.3. Услуги клуба: Список всех направлений центра и описание для каждого из направлений</li>
          <li>5. Ваши пожелания</li>
        </ul>
        <p className="mt-4 text-gray-700 font-medium">
          Важно! При составление текста, Вы должны учитывать то, что он же и будет использован при заполнении сообщества
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'vk-speaker-design': {
    title: 'Оформление странички спикера в VK',
    description: 'Профессиональное оформление личной страницы спикера ВКонтакте от дизайнера',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Оформление сообщества для спикера в VK - включает в себя работу профессионального дизайнера, которая даст "новое дыхание" вашему сообществу
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Почему важно оформлять группу в VK?</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Первое впечатление имеет решающее значение.</li>
          <li>Грамотное оформление группы ВКонтакте не только привлекает внимание, но и повышает доверие к вашему бренду, помогая выделиться среди конкурентов.</li>
          <li>Профессионально оформленное сообщество способствует лучшему восприятию информации, экономит время пользователей и создает приятную атмосферу для взаимодействия</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Чем поможет наш дизайнер?</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Аватарка для сообщества</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обложка для сообщества</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Иконки меню (4-5 шт)</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Виджет (3 горизонтальных или 1 вертикальных)</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Оформление товаров (до 5 шт)</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какая информация потребуется нам от Вас?</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Опишите пожелания по стилю, цвету (можете привести примеры - сбросить понравившуюся группы по стилю и оформлению)</li>
          <li>Выберите, какое количество виджетов и меню Вы хотите себе и какую информацию Вы хотите, чтобы они отображали</li>
          <li>Напишите список ваших услуг</li>
          <li>Ваше деловое фото в хорошем качестве + Ваша ФИ и тезисное выражение, связанное с Вашей тематикой</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Как выстраивается работа с нами?</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Вы вносите полную оплату за оформление</li>
          <li>Сбрасываете нам список информации из 4 пунктов, который мы привели выше + добавляете наш рабочий аккаунт администратором в ваше сообщество</li>
          <li>Сроки нашей работы в среднем - от 5 до 7 дней, в некоторых случаях сроки могут задержаться по объективным причинам - вы не предоставили какую-нибудь информацию или не отвечаете на наши смс + на предоставлении информации у Вас есть 1 неделя, если срок задержится - мы вправе отложить Ваш заказ на позднее время</li>
          <li>Если после оплаты Вы не выходите на связь больше полугода - команда имеет права не возвращать Вам средства за бот, но может продолжить работу над ботом, если вы оплатите штрафной тариф в размере 3000р</li>
        </ol>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какие существуют тарифы?</h3>
        <p className="text-gray-700 mb-3">
          <strong>Оформление картинок для вашего сообщества + упаковка и установка данных картинок в ваше сообщество - 6.000р</strong> (потребуется добавить наш рабочий аккаунт - администратором в ваше сообщество, для внесения изменений)
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Какая доп. информация нам потребуется для оформление группы?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Все ссылки на Ваши социальные сети (телеграмм, сайт, whatsapp, Вконтакте, инстаграмм)</li>
          <li>2. Все контактные данные, по которым можно будет связаться</li>
          <li>3. Ссылка(и) на отзывы</li>
          <li>4. Информация о Вас</li>
          <li>5. Список ваших услуг + описание к ним</li>
          <li>5. Ваши пожелания</li>
        </ul>
        <p className="mt-4 text-gray-700 font-medium">
          Важно! При составление текста, Вы должны учитывать то, что он же и будет использован при заполнении сообщества
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'max-community-design': {
    title: 'Оформление сообщества в Макс',
    description: 'Профессиональное оформление сообщества на платформе Макс от дизайнера',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Оформление сообщества на платформе Макс — включает в себя работу профессионального дизайнера, которая создаст привлекательный и функциональный дизайн для вашего сообщества.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Почему важно оформлять сообщество?</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Первое впечатление имеет решающее значение для привлечения новых участников</li>
          <li>Профессиональное оформление повышает доверие к вашему бренду</li>
          <li>Грамотная визуальная структура помогает пользователям быстро находить нужную информацию</li>
          <li>Качественный дизайн выделяет вас среди конкурентов</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что входит в оформление?</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Аватар сообщества</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Обложка и баннеры</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Иконки для разделов меню</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Оформление постов и материалов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Визуальная структура сообщества</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что потребуется от вас?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>1. Описание вашего бренда и целевой аудитории</li>
          <li>2. Пожелания по стилю и цветовой гамме</li>
          <li>3. Примеры понравившегося оформления (если есть)</li>
          <li>4. Логотип и фирменный стиль (если есть)</li>
          <li>5. Список разделов и структура сообщества</li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость и условия:</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Стоимость оформления — от 8.000р</strong></li>
          <li>Срок выполнения: 5-7 дней</li>
          <li>Все исходники передаются клиенту</li>
          <li>Возможность внесения правок</li>
          <li>Установка оформления в сообщество — дополнительно 3.000р</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'tilda-websites': {
    title: 'Создание сайтов на Тильде',
    description: 'Разработка современных сайтов на конструкторе Tilda под ключ',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Сайт на Тильде — это ваше круглосуточное представительство в интернете, которое привлекает клиентов, презентует товары и услуги, повышает доверие к бизнесу и автоматизирует продажи. Он работает 24/7, формирует профессиональный имидж, собирает заявки, помогает работать с удалённой аудиторией и опережать конкурентов.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Почему вашему бизнесу нужен сайт на Тильде?</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Круглосуточное привлечение клиентов</strong> — сайт работает без выходных и перерывов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Презентация товаров и услуг</strong> — полная информация о вашем предложении</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Повышение доверия</strong> — профессиональный сайт формирует положительный имидж</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Автоматизация продаж</strong> — формы заявок и обратной связи работают автоматически</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Работа с удалённой аудиторией</strong> — клиенты из любой точки мира</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Преимущество перед конкурентами</strong> — выделяйтесь на фоне других</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что мы создаём:</h3>
        <p className="text-gray-700 mb-4">
          Создание сайтов и лендингов на CMS Tilda (Тильда) под любые задачи, для любых сфер, с уникальным дизайном или копия (как полная, так и с изменениями). Создание сайта происходит исключительно в рамках возможностей конструктора Tilda.
        </p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Базовый пакет — от 15.000р:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>5 блоков в лендинге</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Адаптивный дизайн (отлично выглядит на всех устройствах)</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Подбор качественных картинок</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Форма заказа</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Форма обратной связи</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Наполнение контентом</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Удобная админ-панель для управления</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-time-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Срок выполнения:</strong> 1 неделя</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что понадобится от вас:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Логин/пароль от Тильды</strong> — для работы на платформе</li>
          <li><strong>Техническое задание</strong> — структура сайта, тексты к блокам и референсы. Можно в свободной форме, но максимально подробно</li>
          <li><strong>Подготовьте дополнительную информацию:</strong>
            <ul className="ml-6 mt-2 space-y-1">
              <li>• Логотип</li>
              <li>• Рисунки и фотографии</li>
              <li>• Тексты для сайта</li>
              <li>• Уникальное торговое предложение (акции, бонусы, спецпредложения)</li>
              <li>• Прайс-листы</li>
            </ul>
          </li>
          <li><strong>Все пожелания</strong> обсудить и согласовать с разработчиком</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Как мы работаем:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Обсуждение проекта</h4>
              <p className="text-gray-700 text-sm">Вы рассказываете о своих целях и пожеланиях</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Разработка структуры</h4>
              <p className="text-gray-700 text-sm">Создаём структуру сайта и согласовываем с вами</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Дизайн и наполнение</h4>
              <p className="text-gray-700 text-sm">Создаём дизайн, подбираем изображения, наполняем контентом</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">4</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Сдача проекта</h4>
              <p className="text-gray-700 text-sm">Передаём готовый сайт и обучаем работе с ним</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'readdy-websites': {
    title: 'Создание сайтов на Readdy',
    description: 'Разработка современных сайтов с помощью ИИ на платформе Readdy под ключ',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Сайт на Readdy — это ваше круглосуточное представительство в интернете, которое привлекает клиентов, презентует товары и услуги, повышает доверие к бизнесу и автоматизирует продажи. Он работает 24/7, формирует профессиональный имидж, собирает заявки, помогает работать с удалённой аудиторией и опережать конкурентов.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Почему вашему бизнесу нужен сайт на Readdy?</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Круглосуточное привлечение клиентов</strong> — сайт работает без выходных и перерывов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Презентация товаров и услуг</strong> — полная информация о вашем предложении</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Повышение доверия</strong> — профессиональный сайт формирует положительный имидж</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Автоматизация продаж</strong> — формы заявок и обратной связи работают автоматически</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Работа с удалённой аудиторией</strong> — клиенты из любой точки мира</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Преимущество перед конкурентами</strong> — выделяйтесь на фоне других</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Уникальные возможности Readdy:</h3>
        <p className="text-gray-700 mb-4">
          Сайт на Readdy имеет различный и широкий функционал возможностей. Помимо базовых возможностей, можно добавлять различные функции — всё обсуждается с разработчиком.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>ИИ-генерация контента</strong> — искусственный интеллект помогает создавать уникальный контент</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Расширенный функционал</strong> — возможности выходят за рамки обычных конструкторов</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Гибкая настройка</strong> — любые функции под ваши задачи</span>
          </li>
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Базовый пакет — от 15.000р:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>5 блоков на сайте</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Адаптивный дизайн (отлично выглядит на всех устройствах)</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Подбор качественных картинок</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Форма заказа</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Форма обратной связи</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Наполнение контентом</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Удобная админ-панель для управления</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-sparkle-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Дополнительные функции</strong> — обсуждаются индивидуально</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-time-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Срок выполнения:</strong> 1 неделя</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что понадобится от вас:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Логин/пароль от Readdy</strong> — для работы на платформе</li>
          <li><strong>Техническое задание</strong> — структура сайта, тексты к блокам и референсы. Можно в свободной форме, но максимально подробно</li>
          <li><strong>Подготовьте дополнительную информацию:</strong>
            <ul className="ml-6 mt-2 space-y-1">
              <li>• Логотип</li>
              <li>• Рисунки и фотографии</li>
              <li>• Тексты для сайта</li>
              <li>• Уникальное торговое предложение (акции, бонусы, спецпредложения)</li>
              <li>• Прайс-листы</li>
            </ul>
          </li>
          <li><strong>Все пожелания</strong> обсудить и согласовать с разработчиком</li>
        </ol>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'design-images': {
    title: 'Создание картинок от профессионального дизайнера',
    description: 'Уникальные иллюстрации и графика для вашего бизнеса',
    content: <div className="space-y-8">
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Каждую картинку дизайнер выполнит со всеми пожеланиями, в любом стиле, в любой цветовой гамме, различного размера. Каждую картинку дизайнер рисует самостоятельно с нуля.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Что мы создаём:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Иллюстрации для сайтов и соцсетей</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Баннеры и обложки</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Иконки и графические элементы</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Инфографика</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Персонажи и маскоты</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span>Рекламные материалы</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Преимущества работы с нами:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Опыт работы в различных дизайнерских проектах</strong> — знаем, что работает</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Индивидуальный подход</strong> — учитываем все ваши пожелания</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Любой стиль</strong> — от минимализма до детальной проработки</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Любая цветовая гамма</strong> — подберём идеальные цвета</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Различные размеры</strong> — под любые задачи и платформы</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-star-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Уникальность</strong> — каждая картинка рисуется с нуля</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Процесс работы:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Обсуждение задачи</h4>
              <p className="text-gray-700 text-sm">Вы рассказываете, что нужно, в каком стиле, цветах и размере</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Создание эскиза</h4>
              <p className="text-gray-700 text-sm">Дизайнер создаёт первый вариант и показывает вам</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Правки и доработка</h4>
              <p className="text-gray-700 text-sm">Вносим изменения по вашим пожеланиям</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold flex-shrink-0">4</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Финальная версия</h4>
              <p className="text-gray-700 text-sm">Передаём готовую картинку в нужном формате</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость:</h3>
        <p className="text-gray-700 text-lg mb-3">
          <strong>Стоимость обсуждается индивидуально</strong>
        </p>
        <p className="text-gray-700">
          Цена начинается от <strong className="text-emerald-600">3.500р за картинку</strong> и зависит от сложности, стиля и детализации работы.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://t.me/+SahJe6ec3fk3YjNi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-telegram-line text-xl"></i>
          Примеры работ в TG-канале
        </a>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Заказать через WhatsApp
        </a>
      </div>
    </div>
  },
  'payment-info': {
    title: 'Как оплатить наши услуги?',
    description: 'Информация об оплате услуг и доступных способах расчёта',
    content: <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Оплата по номеру карты:</h3>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="text-2xl font-bold text-gray-900 mb-3">2202 2080 4663 7246</p>
          <ul className="space-y-1 text-gray-700">
            <li><strong>Банк:</strong> Сбербанк</li>
            <li><strong>Получатель:</strong> Иван. А.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Скидки при покупке нескольких услуг:</h3>
        <div className="space-y-3">
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
            <p className="text-gray-900 font-semibold mb-1">Бот для центра в telegram + диагностика ПКШ</p>
            <p className="text-gray-700"><strong className="text-emerald-600">19.000р</strong> <span className="text-gray-500 line-through">вместо 23.000р</span></p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
            <p className="text-gray-900 font-semibold mb-1">Бот для центра в telegram + поздравление от деда мороза</p>
            <p className="text-gray-700"><strong className="text-emerald-600">14.500р</strong> <span className="text-gray-500 line-through">вместо 16.500р</span></p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
            <p className="text-gray-900 font-semibold mb-1">Бот для центра в telegram и в VK</p>
            <p className="text-gray-700"><strong className="text-emerald-600">18.000р</strong> <span className="text-gray-500 line-through">вместо 20.000р</span></p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Условия оплаты:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Оплата до 10.000р</strong> — производится в полном объеме</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-check-line text-emerald-500 text-xl mt-0.5"></i>
            <span><strong>Если сумма выше 10.000р</strong> — возможен расчет по предоплате 50% от стоимости</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-information-line text-blue-500 text-xl mt-0.5"></i>
            <span>Также есть возможность оплаты по расчетному счету — но цена будет учитываться БЕЗ СКИДКИ!</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-alert-line text-amber-500 text-xl mt-0.5"></i>
            <span>Также учитывайте, скидки и места ограничены, цена может повыситься!</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-3">Готовы оформить заказ?</h3>
        <p className="text-white/90 mb-6">
          Свяжитесь с нами через WhatsApp, чтобы обсудить детали и оформить заказ
        </p>
        <a 
          href="https://wa.me/+79996388186" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          Написать в WhatsApp
        </a>
      </div>
    </div>
  },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Услуга не найдена</h1>
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Вернуться к услугам
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600 transition-colors cursor-pointer">
              Главная
            </Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <Link to="/#services" className="hover:text-emerald-600 transition-colors cursor-pointer">
              Услуги
            </Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-gray-900 font-medium">Описание услуги</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate('/#services')}
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors cursor-pointer"
        >
          <i className="ri-arrow-left-line"></i>
          Назад к услугам
        </button>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {service.content}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Готовы начать?</h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Свяжитесь с нами, чтобы обсудить детали вашего проекта и получить персональное предложение
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/+79996388186" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Написать в WhatsApp
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line text-xl"></i>
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}