import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon-16x16.png"
          />
          <link rel="alternate icon" href="/assets/favicon/favicon.ico" />
          <link rel="manifest" href="/assets/favicon/site.webmanifest"></link>

          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}',{
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
