import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Restaura antiguas fotos de rostros y conserva tu historia."
          />
          <meta property="og:site_name" content="FixPix" />
          <meta
            property="og:description"
            content="Restaura antiguas fotos de rostros y conserva tu historia."
          />
          <meta property="og:title" content="Restaurador de fotos faciales" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Restaurador de fotos faciales" />
          <meta
            name="twitter:description"
            content="Restaura antiguas fotos de rostros y conserva tu historia."
          />
          <meta
            property="og:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
