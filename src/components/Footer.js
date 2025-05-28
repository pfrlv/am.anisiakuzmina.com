export default function Footer() {
  return (
    <footer className="pb-[30px]">
      <div className="-mx-[10px]">
        <div className="w-11/12 px-[10px] ml-[8.333333%]">
          <div className="flex sm:space-x-[30px] flex-col sm:!flex-row">
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
                  href="/docs/Оферта_оказания_информационно_консультационных_услуг_практикум_память.docx"
                >
                  Оферта
                </a>
              </div>
            </>
          </div>
        </div>
      </div>
    </footer>
  );
}
