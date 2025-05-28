import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import Merkelova from "../../public/guests/Merkelova.jpg";
import Kruze from "../../public/guests/Kruze.jpg";
import Kulinich from "../../public/guests/Kulinich.jpg";
import Hegai from "../../public/guests/Hegai.jpg";

const ITEMS = [
  {
    name: "Анастасия Маркелова",
    image: Merkelova,
    caption: `
    Фотограф.
<br/>Автор проекта о найденном архиве <a href="https://birdinflight.com/ru/mir/pozhalujsta-vernite-istoriya-semi-anglijskih-aristokratov-v-najdennyh-na-shri-lanke-fotografiyah.html">‘PLEASE RETURN’</a> (открывать с VPN) и основатель ресурса посвященного фотоархивам <a href="https://pleasesave.photography">PLEASE SAVE PHOTOGRAPHY</a>
<br/><a href="https://birdinflight.com">Статья о проекте PLEASE RETURN</a>
    `,
  },
  {
    name: "Яна Крузе",
    image: Kruze,
    caption: `Издатель, редактор и дизайнер фотокниг в издательстве dienacht Publishing (Лейпциг, Германия). Проводит воркшопы для фотографов по созданию фотокниг в dienacht °Lab. В прошлом куратор фотовыставок в Центре фотографии имени братьев в Люмьер в Москве (2013–2018).`,
  },
  {
    name: "Ксения Хегай",
    image: Hegai,
    caption: `Психолог, экзистенциальный аналитик (академия GLE-International)
    <br/>Создает проект Serenity Height: групповые терапевтические исследовательские практики (цветочная терапия и др), с помощью которых люди приходят к исполнению своей экзистенции.`,
  },
  {
    name: "Алёна Кулинич",
    image: Kulinich,
    caption: `Психолог (телесно-ориентированный подход), гештальт-консультант, фотограф.
    <br/>Чуткий куратор Комьюнити. Будет помогать создавать поддерживающее и бережное пространство чата.`,
  },
];

export default function Guests() {
  const [emblaRef] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  return (
    <div className="mx-[-10px]">
      <div className="">
        <div className="2xl:max-w-[1200px] mx-auto">
          <div className="2xl:ml-[-10px]">
            <div className="md:w-10/12 xl:w-9/12 sm:ml-[8.333333%] px-[10px]">
              <h2 className="uppercase text-black mb-[30px]">
                Приглашенные спикеры
              </h2>
            </div>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex mb-[-30px] pl-[10px]">
            {ITEMS.map(({ name, caption, image }, index) => (
              <div
                key={index}
                className="w-[60%] md:w-[45%] lg:w-[30%] mr-[10px] sm:mr-[20px] last:mr-[10px] mb-[30px] flex-shrink-0"
              >
                <div className="mb-[15px]">
                  <div className="relative pb-[116.6666666667%] bg-black/10">
                    <Image
                      alt={name}
                      src={image}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="pl-[5px]">
                  <div className="mb-[5px]">{name}</div>
                  <div
                    className="text-[12px] leading-[18px] max-w-[300px] text-black/65 editor select-none"
                    dangerouslySetInnerHTML={{ __html: caption }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
