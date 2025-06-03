export default function Footer() {
  return (
    <footer className="pb-[30px]">
      <div className="-mx-[10px]">
        <div className="lg:w-9/12 px-[10px] ml-[8.333333%]">
          <div className="flex flex-col lg:!flex-row justify-between lg:items-end">
            <div className="flex sm:space-x-[30px] flex-col sm:!flex-row order-last lg:order-first mt-[25px] lg:mt-0">
              <div className="order-last sm:order-first mt-[10px] sm:mt-0">
                {new Date().getFullYear()}
              </div>
              <>
                <div className="">
                  <a
                    className="hover:text-black/65"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/docs/Политика_конфеденциальности_практикум_память.docx"
                  >
                    Политика конфеденциальности
                  </a>
                </div>
                <div className="">
                  <a
                    className="hover:text-black/65"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/docs/Оферта_оказания_информационно_консультационных_услуг_.pdf"
                  >
                    Оферта
                  </a>
                </div>
                <div className="">
                  <a
                    className="hover:text-black/65"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/docs/Согласие_на_обработку_персональных_данных.pdf"
                  >
                    Согласие
                  </a>
                </div>
              </>
            </div>
            <div className="text-msm text-black/50">
              Индивидуальный предприниматель
              <br />
              Кузьмина Анастасия Сергеевна
              <br />
              ИНН 504712226552
              <br />
              ОГРНИП 324508100253676
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
