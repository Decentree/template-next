import React from "react";
import { AppProps } from "next/app";

import Head from "next/head";

import GlobalStyle from "../../shared/Global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:title" content="PROJECT_NAME" />
        <meta property="og:description" content="PROJECT_NAME" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:3000/" />
        <meta property="twitter:title" content="PROJECT_NAME" />
        <meta property="twitter:description" content="PROJECT_NAME" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
