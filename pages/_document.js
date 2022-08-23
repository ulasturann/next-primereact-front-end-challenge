import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>PrimeTek | NextJS Front-end Challenge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
          {/* PrimeReact */}
          <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
          <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
          <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}