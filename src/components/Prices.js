const PRICES_LIST = [
  {
    title: "Лекторий (самостоятельно)",
    caption: [
      "Лекция «Жизненная сила»",
      "Лекция «Фотография как инструмент познания»",
      "Вопрос/ответ с Анисией PDF с лекции",
      "Домашние задания без обратной связи",
      "Запись 3 месяц",
    ],
    paymentUrl: '',
    cost: {
      main: "16 500",
      caption: ["Мест нет"],
    },
  },
  {
    title: "Комьюнити",
    caption: [
      "Программа «Лектория»",
      "Общий чат участников c куратором Алёной",
      "Групповые встречи каждую неделю практикума с Алёной",
      "Запись 3 месяца",
    ],
    paymentUrl: '',
    cost: {
      main: "30 000₽",
      caption: ["Мест нет"],
    },
  },
  {
    title: "Комьюнити с Анисией",
    caption: [
      "Программа «Лектория»",
      "Общий чат участников с Анисией",
      "Групповые встречи каждую неделю практикума с Анисией",
      "Личная обратная связь от Анисии по домашним заданиям",
    ],
    paymentUrl: '',
    cost: {
      main: "50 000₽",
      caption: ["Мест нет"],
    },
  },
];

export default function Prices() {
  return (
    <div className="mx-[-10px]">
      <div className="sm:ml-[8.333333%] w-full sm:w-10/12 xl:w-9/12 px-[10px]">
        <div className="flex flex-col space-y-[10px]">
          {PRICES_LIST.map(({ title, caption, cost, paymentUrl }, key) => (
            <article
              key={key}
              className="bg-[#F0F0EA] p-[20px] flex flex-wrap sm:-mx-[20px]"
            >
              <div className="">
                <h2
                  className="uppercase mb-[10px]"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <ul className="text-black/65">
                  {caption.map((text, akey) => (
                    <li
                      key={akey}
                      className=""
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-auto sm:text-right sm:ml-auto flex flex-col mt-[30px] sm:mt-0">
                <div className="text-md">
                  {cost.main}
                </div>
                <div className="mb-[10px] text-black/65">
                  {cost.caption.map((text, akey) => (
                    <div key={akey}>{text}</div>
                  ))}
                </div>
                <div className="mt-auto w-full">
                  {paymentUrl && (
                    <a
                      href={paymentUrl}
                      className="inline-flex items-center antialiased h-[50px] sm:w-[170px] bg-black text-white hover:bg-black/75 w-full justify-center"
                    >
                      Перейти к оплате
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
