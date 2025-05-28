import "@/styles/globals.css";

import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Анисия Кузьмина • Память</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />

        <meta
          property="og:title"
          content="Практикум по фотографии с Анисией Кузьминой"
        />
        <meta property="og:site_name" content="Фокус внимания" />
        {/* <meta property="og:description" content="Откройте для себя искусство создания фотографий, которые искренне отражают вашу индивидуальность и окружающий мир. Мои упражнения помогут вам не только улучшить технические навыки, но и глубже понять себя, свои предпочтения и эмоции. Начните свое путешествие к самопознанию и творческому росту прямо сейчас" /> */}
        <meta property="og:image" content="/meta/share.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(97269187, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

// AppWithPasswordProtection.getInitialProps = async (appContext) => {
//   const inititalProps = await App.getInitialProps(appContext);

//   const cookies = new Cookies(appContext.ctx.req.headers.cookie);
//   const password = cookies.get('src') ?? '';
  
//   if (password === process.env.ROUTER_PASSWORD) {
//     inititalProps.pageProps.hasReadPermission = true;
//   }

//   return { ...inititalProps };
// };

// export default AppWithPasswordProtection;