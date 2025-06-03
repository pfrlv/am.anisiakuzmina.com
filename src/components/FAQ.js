import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "../../public/icons/arrow.png";

const FAQ_LIST = [
  {
    title: "Как будет устроено обучение?",
    caption: `
      Весь практикум пройдет <em>в онлайн формате</em>. В первую неделю будут две лекция и сессия вопрос/ответ в Zoom.
      В остальные 4 недели — мы будем играть, выполнять практические задания и обсуждать их в группах (в зависимости от триафа). Записи будут выкладываться в канал на платформе Тelegram. Также будет общий чат с участниками (в зависимости от тарифа).
    `,
  },
  {
    title: `Сколько времени нужно на обучение?`,
    caption: `
      В первую неделю —<em> 4 часа</em>, в остальные недели практикума — идеально будет выделить <em>от 15 минут до 1 часа в день</em>. Вы сможете самостоятельно регулировать время в зависимости от настроения и вдохновения.
    `,
  },
  {
    title: "Какое нужно оборудование?",
    caption: `
      Фотография в нашем практикуме это <em>инструмент познания себя</em>. Для всей практической части очень здорово подойдет камера в телефоне.
    `,
  },
  {
    title: `Кто будет куратором «Комьюнити»?`,
    caption: `
      <em>Алёна Кулинич</em> - Психолог (телесно-ориентированный подход) — гештальт-консультант, фотограф. Чуткий куратор «Комьюнити».
      <br /><br />
      Алёна проходила первый поток <em>“Фокуса внимания”</em> как участница а следующий практикум - “Память” курировала, создавая чуткое и поддерживающее пространство. Мы очень любим Алёну и счастливы познакомить вас с ней в тарифе “Комьюнити” 
      <br/>Алёна будет проводить еженедельные встречи и поддерживать в чате. 
    `,
  },
  {
    title: `Можно ли оформить рассрочку? Какие условия?`,
    caption: `
      <em>Да, можно. Для оформления необходимо:</em>
      <br />1. Перейти к оплате курса на сайте и выбрать способ оплаты «Рассрочка» после ввода своих данных
      <br />2. Выбрать подходящее количество месяцев рассрочки (от 3 до 12 месяцев)
      <br />3. Оформить рассрочку, в случае одобрения вам придёт доступ к практикуму
      <br />
      <br />
      <em>Условия:</em>
      <br />— Без процентов
      <br />— Первый платеж — ровно через месяц после оформления. Сразу ничего платить не нужно.
      Если вы хотите разбить оплату на несколько платежей — напишите Юле <a href="https://t.me/aniskuss_team" rel="noopener noreferrer" target="_blank" class="text-black hover:text-black/65">https://t.me/yulshlayko</a>
    `,
  },
  {
    title: `Что будет, если я не смогу присутствовать на лекциях онлайн?`,
    caption: `
      Ничего страшного. 
      <br /><em>Запись лекций и эфиров</em> будет выкладываться в канал сразу после проведения. 
      <br />И вы сможете смотреть лекции в удобное для вас время и задавать вопросы в чате (в зависимости от тарифа).
    `,
  },
];

const DropdownItem = ({ title, caption, initialActive }) => {
  const [active, setActive] = useState(initialActive);

  return (
    <div className="">
      <div
        className="uppercase select-none cursor-pointer py-[10px] hover:text-black/65 flex justify-between md:items-center"
        onClick={() => setActive(!active)}
      >
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <motion.div
          initial={false}
          animate={{ rotate: active ? "180deg" : 0 }}
          transition={{ ease: "circOut" }}
          className="w-[20px] h-[20px] relative"
        >
          <Image src={Arrow} fill style={{ objectFit: "cover" }} alt="" />
        </motion.div>
      </div>
      <motion.div
        layout
        animate={{ height: active ? "auto" : 0 }}
        initial={false}
        className="overflow-hidden"
      >
        <div
          className="text-black/65 pt-[5px] pb-[30px] max-w-prose"
          dangerouslySetInnerHTML={{ __html: caption }}
        ></div>
      </motion.div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="">
      <div className="mx-[-10px]">
        <div className="sm:w-10/12 lg:w-9/12 px-[10px] sm:ml-[8.333333%] mb-[30px]">
          <h2 className="uppercase mb-[10px]">
            Ответы на&nbsp;часто задаваемые вопросы
          </h2>
          <div className="sm:-mx-[20px]">
            <div className="bg-[#F0F0EA] py-[10px] px-[20px]">
              {FAQ_LIST.map(({ title, caption }, key) => (
                <DropdownItem
                  key={key}
                  title={title}
                  caption={caption}
                  initialActive={key === 0 ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-[10px] ml-[8.333333%]">
          <div className="text-black/65">
            Контакт тех.поддержки по&nbsp;любым вопросам&nbsp;&mdash; оплаты, доступы к&nbsp;практикуму,
            <br />
            любые вопросы по&nbsp;обучению{" "}
            <a
              href="https://t.me/aniskuss_team"
              rel="noopener noreferrer"
              target="_blank"
              className="text-black hover:text-black/65"
            >
              https://t.me/aniskuss_team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
