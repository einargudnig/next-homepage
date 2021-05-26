import Head from "next/head";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

import "../styles/base.css";

const languages = {
  en: require("../locale/en.json"),
  is: require("../locale/is.json"),
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaulLocale } = router;
  const messages = languages[locale];

  const og = pageProps.data?.og;
  const title = pageProps.data?.title;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={title || `Einar Guðni`} />
        <meta property="og:site_name" content="Einar Guðni Guðjónsson" />
        <meta
          property="og:description"
          content={
            og ? og.description : `Writing about things I find interesting.`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@einargudni" />
        <meta
          property="og:image"
          content={
            og
              ? og.image
              : `https://res.cloudinary.com/dik9usnqz/image/upload/v1617557816/A-EINARfin.png`
          }
        />

        <link rel="shortcut icon" href="/static/favicon.ico" />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>

        <title>{title || `Einar Guðni | Hi! 👋`}</title>
      </Head>

      <IntlProvider
        messages={messages}
        locale={locale}
        defaultLocale={defaulLocale}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
