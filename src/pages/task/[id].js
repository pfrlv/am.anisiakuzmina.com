import Link from "next/link";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

function replaceMediaTags(text) {
  const imgRegex = /img:\((https:\/\/drive\.google\.com\/thumbnail[^\)]+)\)/g;
  const videoRegex = /video:\((https:\/\/drive\.google\.com\/file\/[^\)]+)\)/g;
  const audioRegex = /audio:\((https:\/\/drive\.google\.com\/[^\)]+)\)/g;

  const replacedImgText = text.replace(imgRegex, (match, p1) => {
    return `<img src="${p1}" alt="" class="image">`;
  });

  const replacedVideoText = replacedImgText.replace(videoRegex, (match, p1) => {
    return `<div class="video"><iframe src="${p1}" frameborder="0" allowfullscreen></iframe></div>`;
  });

  const replacedAudioText = replacedVideoText.replace(
    audioRegex,
    (match, p1) => {
      return `<div class="audio"><iframe src="${p1}" frameborder="0" allowfullscreen></iframe></div>`;
    }
  );

  return replacedAudioText;
}

export default function Task({
  title,
  week,
  lead,
  content,
  time,
  hasReadPermission,
}) {
  const [transConent, setTransConent] = useState("");

  console.log(lead);
  
  
  useEffect(() => {
    if (!content) return;
    
    const _transConent = replaceMediaTags(content);
    setTransConent(_transConent);
  }, []);

  if (!content) return null;

  return (
    <main className={``}>
      <Nav />
      <div className="px-[10px] text-mmd md:text-md mb-[100px]">
        <div className="flex flex-wrap gap-x-[30px]">
          <a href="/#participation" className="hover:italic">
            Участие
          </a>
          <a href="/#author" className="hover:italic">
            Об авторе
          </a>
          <a href="/#faq" className="hover:italic">
            FAQ
          </a>
          <a href="/#reviews" className="hover:italic">
            Отзывы
          </a>
        </div>
      </div>
      <div className="px-[10px] mb-[50px] md:mb-[100px] border-b border-black/15 pb-[25px]">
        <div className="flex -mx-[10px] flex-wrap">
          <div className="ml-[8.333333%] md:ml-0 md:w-4/12 lg:w-3/12 px-[10px] self-end uppercase order-2 md:order-1">
            <div className="">{week}</div>
          </div>
          <div className="md:w-8/12 lg:w-7/12 px-[10px] md:order-2 mb-[30px] md:mb-0">
            <h1 className="text-mmd md:text-lg uppercase mb-[30px]">{title}</h1>
            <div className="uppercase max-w-prose">{lead}</div>
          </div>
        </div>
      </div>
      <div className="px-[10px] mb-[50px] md:mb-[100px]">
        <div className="flex -mx-[10px] flex-wrap">
          <div className="ml-[8.333333%] md:ml-0 md:w-4/12 lg:w-3/12 px-[10px] self-end uppercase order-2 md:order-1" />
          <div className="md:w-8/12 lg:w-7/12 px-[10px] md:order-2 mb-[30px] md:mb-0">
            <div
              className="editor"
              dangerouslySetInnerHTML={{ __html: transConent }}
            />
          </div>
        </div>
      </div>

      <div className="pb-[56.25%] absolute h-0 w-0 overflow-hidden">
        <iframe
          className="absolute w-full h-full top-0 left-0"
          src=""
          allow="autoplay"
        />
      </div>

      <div className="px-[10px]">
        <Footer />
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://justfields.com/project/1bvEodrW/json");
  const pages = await res.json();

  const paths = Object.keys(pages).map((id) => ({
    params: { id: id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://justfields.com/project/1bvEodrW/json");
  const pages = await res.json();

  const page = pages[params.id];

  if (!page || !page.title) {
    return {
      notFound: true,
    };
  }

  return {
    props: page,
    revalidate: 60,
  };
}

