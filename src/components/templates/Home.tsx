import Head from "next/head";
import React from "react";

import Socials from "../elements/Socials";
import Card from "../modules/Card";

import "../../i18n";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation<string>();

  return (
    <>
      <Head>
        <title>{t("seo_title")}</title>
        <meta name="description" content={t("seo_description")}></meta>
      </Head>
      <Card />
      <Socials />
    </>
  );
};

export default Home;
