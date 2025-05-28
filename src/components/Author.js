import Image from "next/image";
import aniskuss from "../../public/images/aniskuss.jpg";

export default function Author() {
  return (
    <section className="-mx-[10px]">
      <div className="sm:w-10/12 xl:w-9/12 sm:ml-[8.333333%] px-[10px]">
        <div className="flex mx-[-10px] flex-wrap">
          <div className="w-5/12 md:w-6/12 px-[10px] order-2 md:order-first mt-[30px] md:mt-0">
            <div className="max-w-[250px]">
              <div className="pb-[124.9676584735%] relative overflow-hidden">
                <Image
                  src={aniskuss}
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-[10px] sm:ml-auto">
            <div className="text-black/65 max-w-prose">
              Меня зовут Анисия.
              <br />
              <span className="inline-block w-[2em]" />
              Я фотографирую сколько себя помню, а осознанно, уже больше 15 лет специализируюсь на портретной и семейной фотографии и через работу с телом, эмоциями и невербаликой помогаю людям увидеть себя на фотографиях и справиться с травмой фотографирования и дисморфией.
              <br />
              <br />
              С 2024 года создаю практикумы и безоценочные пространства, смысл которых  с помощью игровых техник и через занятия искусством фотографии помочь людям почувствовать себя лучше, увереннее, счастливее. За год мои практикумы прошло более 500 человек.
              <br />
              <br />
              В 2016 году состоялась моя первая персональная выставка в ММОМА в рамках фотобиеннале 16’ с проектом «замри».
            </div>
            <div className="max-w-prose text-[12px] mt-[30px] leading-5">
              Сотрудничала с&nbsp;журналами Harper&rsquo;s Bazar, Esquire,
              Афиша, Меломан, The Blueprint, Tatler Russia. Снимала музыкантов
              и&nbsp;дирижеров, актеров и&nbsp;режиссеров для московской
              Филармонии, театра &laquo;Практика&raquo;, школы &laquo;Gogol
              School&raquo;. Снимала афиши театру ЦИМ. Работала с&nbsp;брендами
              Adidas, Brixton, Calvin Klein, Cos
              и&nbsp;с&nbsp;проектами/компаниями &laquo;KIX&nbsp;BOX&raquo;,
              &laquo;Сила Ветра&raquo;, &laquo;Kids Refugee&raquo;,
              &laquo;Рихтер&raquo;, &laquo;Тинькофф Журнал&raquo;,
              &laquo;BeatFest&raquo;, &laquo;Apex project bureau&raquo;.
              В&nbsp;2020 году представляла от&nbsp;России камеру Leica M10-R
              и&nbsp;являлась амбассадором Leica Camera Russia. С&nbsp;2017
              по&nbsp;2022 год фотографировала для проекта kamchatka.camp.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
