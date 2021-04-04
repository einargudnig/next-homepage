import Document, { Html, Head, Main, NextScript } from "next/document";

// import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKIN G_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-95HPC8T3GB"
          ></script>
          <scrpt
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-95HPC8T3GB', {
                page_path: window.location.pathname,
              });
            `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
