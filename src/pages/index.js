import Image from "next/image";

// import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

import Nav from "@/components/Nav";
import Prices from "@/components/Prices";
import Author from "@/components/Author";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
// import Guests from "@/components/Guests";

import firstImage from "../../public/images/am/IMG_3637_sm.jpg";
import secondImage from "../../public/images/am/IMG_5480_sm.jpg";

// const MarqueeLine = ({ reverse = false, className = "" }) => (
//   <Marquee
//     reverse={reverse}
//     className={className}
//     innerClassName="text-mlg md:text-lg uppercase cursor-default"
//   >
//     <div className="">Лекции</div>
//     <div className="">Поддерживающие встречи</div>
//     <div className="">Обсуждения</div>
//     <div className="">Чат</div>
//     <div className="">Дополнительные материалы</div>
//     <div className="">Подарки от дружественных брендов</div>
//     <div className="">Живая встреча в Москве</div>
//   </Marquee>
// );

export default function Home() {
  return (
    <main className={``}>
      <Nav />
      <div className="px-[10px] text-mmd md:text-md mb-[100px]">
        <div className="flex flex-wrap gap-x-[30px]">
          <a href="#participation" className="hover:italic">
            Участие
          </a>
          <a href="#author" className="hover:italic">
            Об авторе
          </a>
          <a href="#faq" className="hover:italic">
            FAQ
          </a>
          <a href="#reviews" className="hover:italic">
            Отзывы
          </a>
        </div>
      </div>
      <div className="px-[10px] mb-[50px] md:mb-[100px]">
        <div className="flex -mx-[10px] flex-wrap">
          <div className="ml-[8.333333%] md:ml-0 md:w-4/12 lg:w-3/12 px-[10px] self-end uppercase order-2 md:order-1">
            <div className="">Старт: 23 июня</div>
            <div className="">Длительность: 6 недель</div>
          </div>
          <div className="md:w-8/12 lg:w-7/12 px-[10px] md:order-2 mb-[30px] md:mb-0">
            <h1 className="text-mmd md:text-lg uppercase mb-[30px]">
              Практикум
              <br />
              &laquo;Фокус внимания — Я&raquo;
            </h1>
            <div className="uppercase max-w-prose">
              Внутри каждого из нас уже есть всё необходимое для того, чтобы
              осуществить свои мечты, остается только найти и дополнить свои
              ресурсы знаниями и уверенностью. Благодаря мягким терапевтическим
              техникам взаимодействия с фотографией есть возможность расшевелить
              свои невербальные глубокие переживания и обратить их в свою силу.
              Стать увереннее в себе и осознать ценность себя и своего времени
              на этой планете.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end mb-[50px] md:mb-[100px]">
        <div className="w-7/12 md:w-5/12 lg:w-3/12">
          <Image src={firstImage} alt="" priority={true} />
        </div>
        <div className="w-4/12 md:w-6/12">
          <Image src={secondImage} alt="" priority={true} />
        </div>
      </div>
      <div className="px-[10px]">
        <div className="2xl:max-w-[1200px] mx-auto">
          <div className="mx-[-10px] mb-[50px]">
            <div className="md:w-9/12 lg:w-6/12 px-[10px] ml-[8.3333%] editor">
              <div>
                <h2>О чем практикум?</h2>
                <br />
                Практикум — пространство и комьюнити для проживания нового
                опыта, где мы будем играть, бережно исследовать себя, свои
                эмоции и роли в разных сферах жизни с помощью фотографии.
                <br />
                <br />
                В этот раз практикум направлен на работу с собой.
                <br />
                <br />В процессе выполнения заданий каждый человек приходит к
                своим собственным уникальным осознаниям, но общая динамика
                направлена на изучение себя, своих желаний и возможностей, что
                впоследствии неизбежно приводит к важным изменениям.
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:max-w-[1200px] mx-auto">
          <div className="mx-[-10px] mb-[50px]">
            <div className="md:w-9/12 lg:w-6/12 px-[10px] ml-[8.3333%] editor">
              <div>
                <h2>Что эти практики подарили мне:</h2>
                <div>
                  <ul>
                    <li>Уверенность в себе</li>
                    <li>Знание и понимание своих желаний</li>
                    <li>Честный и открытый диалог с людьми</li>
                    <li>Радость и удовлетворение в жизни и работе</li>
                    <li>Эмоциональная стабильность и саморегуляция</li>
                    <li>Сотворчество в проектах и командах мечты</li>
                    <li>Возможность глубже чувствовать и понимать себя</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:max-w-[1200px] mx-auto">
          <div className="mx-[-10px] mb-[50px]">
            <div className="md:w-9/12 lg:w-6/12 ml-[8.333333%] px-[10px] editor">
              <h2 className="mb-[20px]">Вам подойдет практикум:</h2>
              <div>
                <ul>
                  <li>
                    Если вы <em>чувствуете внутреннюю растерянность</em> и
                    хотите лучше <em>понять свои желания</em>, чувства и границы
                    — особенно в периоды перемен или переоценки ценностей.
                  </li>
                  <li>
                    Если вам <em>сложно расслабиться</em> перед камерой, и вы с
                    оценкой смотрите на свои фотографии.
                  </li>
                  <li>
                    Если вам хочется с вниманием, интересом и любовью{" "}
                    <em>думать о себе</em>.
                  </li>
                  <li>
                    Если вы <em>чувствуете выгорание</em> или потерю контакта с
                    собой в творчестве, работе, отношениях.
                  </li>
                  <li>
                    Если вы фотограф и <em>ищите свой стиль</em> через
                    внутреннюю опору, а не сравнение и ожидания клиентов.
                  </li>
                  <li>
                    Если вам кажется, что вы и так хорошо себя знаете, но нужен
                    какой-то знак или маячок, что вы <em>на верном пути.</em>
                  </li>
                  <li>
                    Если <em>нужна перезагрузка</em>, и вы в поиске новых идей.
                  </li>
                  <li>
                    Если хочется <em>послушать истории</em> других и побыть в
                    безоценочном, безопасном пространстве.
                  </li>
                </ul>
              </div>
              <div className="">
                Совсем необязательно быть фотографом или уметь фотографировать.
                <br />
                <br />
                Если вы любите фотографию как искусство, с радостью
                просматриваете фотоальбомы и стараетесь фиксировать то, что с
                вами происходит в жизни, этот практикум даст вам еще глубже
                прочувствовать важность этих действий и поможет больше раскрыть
                вас самих.
                <br />
                <br />
                Если фотография вызывает у вас страх, неопределенные чувства или
                просто много неуверенности, то возможно вас ждет сильный
                переворот сознания.
                <br />
                <br />
                Если вы фотографируете регулярно, зарабатываете фотографией
                деньги или только учитесь, эта информация поможет вам
                перезагрузиться, услышать себя и выйти на новый уровень.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[-10px] mb-[50px]">
          <div className="w-full my-[100px]">
            {/* <MarqueeLine className="[--duration:50s] gap-[5em]" />
            <MarqueeLine className="[--duration:100s] gap-[5em]" />
            <MarqueeLine className="[--duration:75s] gap-[5em]" /> */}
          </div>
        </div>
        <div className="2xl:max-w-[1200px] mx-auto">
          <div className="mx-[-10px] mb-[50px]">
            <div className="md:w-10/12 lg:w-8/12 ml-[8.333333%] px-[10px] editor">
              <h2 className="mb-[20px]">Программа практикума:</h2>
              <div className="">
                Каждую неделю — <em>2 творческих задания</em> и <em>2 углублённых</em> варианта для тех,
                <br className="hidden md:block" />у кого есть интерес к усложнениям.
              </div>
              <div className="flex flex-wrap mx-[-10px]">
                <div className="sm:w-1/2 px-[10px]">
                  <h2>Первая неделя / Лекции</h2>
                  <h3>1. Лекция «Жизненная сила»</h3>
                  <ul>
                    <li>
                      Как работать с базовыми физиологическими настройками,
                      вернуть себе энергию, поддержать тело и психику.
                    </li>
                    <li>
                      Режим и дисциплина: почему бывает сложно. Как начать и
                      поддержать себя.
                    </li>
                    <li>
                      Ритуалы и повседневные действия, которые помогают не
                      выгорать и качественно восстанавливаться.
                    </li>
                    <li>
                      Практики, направленные на пополнение жизненных ресурсов.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Если вы найдете в себе силы и интерес выполнять задания из
                    этой лекции, к концу недели у вас появятся силы и желания,
                    которые ранее, возможно, были скрыты от вас.
                  </p>
                  <br />
                  <h3>2. Вопрос-ответ</h3>
                  <p>
                    Безопасное пространство для групповой работы. Разбор и
                    обсуждение насущных вопросов и эмоций.
                  </p>
                  <br />
                  <h3>3. Лекция «Фотография как инструмент познания»</h3>
                  <ul>
                    <li>
                      Почему мы боимся фотографироваться, где хранятся наши
                      воспоминания.
                    </li>
                    <li>
                      Проекции: как перестать оценивать себя глазами других
                      людей и обесценивать свой опыт.
                    </li>
                    <li>Узнавание себя — ключ к уверенности.</li>
                    <li>Работа с телом через фотографию.</li>
                    <li>Свет и технические особенности фотографии.</li>
                  </ul>
                  <br />
                  <h3>4. Вопрос-ответ</h3>
                  <p>
                    Безопасное пространство для групповой работы. Разбор и
                    обсуждение насущных вопросов и эмоций.
                  </p>
                  <br />
                </div>
                <div className="sm:w-1/2 px-[10px]">
                  <div>
                    <h2>Первая неделя</h2>
                    <h3>Я в кадре.</h3>
                    <p>
                      Как съемка себя влияет на самоощущение в жизни. Задания на исследование себя в кадре: лицо и тело. Рефлексия с получившимися фотографиями.
                    </p>
                  </div>
                  <div>
                    <h2>Вторая неделя</h2>
                    <h3>Социальные роли и чувства в них.</h3>
                    <p>
                      Как работа с предметами в кадре может помочь с осознанием и
                      высказыванием своих скрытых эмоций. Задания на
                      внимательность и работу с деталями.
                    </p>
                  </div>
                  <div>
                    <h2>Третья неделя</h2>
                    <h3>Внутренний ребёнок</h3>
                    <p>
                      Как работа с внутренним ребенком через фотографию и
                      исследование помогает вспомнить о ваших истинных мечтах и
                      желаниях.
                    </p>
                  </div>
                  <div>
                    <h2>Четвертая неделя</h2>
                    <h3>Среда обитания</h3>
                    <p>
                      Как документация своего быта и повседневности дарит нам
                      возможность взглянуть на привычное с большим интересом и
                      вдохновением.
                    </p>
                  </div>
                </div>
                <div className="sm:w-1/2 px-[10px] mt-[50px]">
                  <h2 className="mb-[10px]">Что понадобится в процессе</h2>
                  <p>
                    Ручка, бумага, скотч, камера телефона — это все что вам
                    необходимо для большей части заданий. Для некоторых заданий
                    понадобятся распечатанные фотографии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[50px]" id="reviews">
          <div className="2xl:max-w-[1200px] mx-auto">
            <Reviews />
          </div>
        </div>
        <div className="py-[50px]" id="participation">
          <div className="2xl:max-w-[1200px] mx-auto">
            <Prices />
          </div>
        </div>
        <div className="py-[50px]" id="author">
          <div className="2xl:max-w-[1200px] mx-auto">
            <Author />
          </div>
        </div>
        <div className="pt-[50px] mb-[200px]" id="faq">
          <div className="2xl:max-w-[1200px] mx-auto">
            <FAQ />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
