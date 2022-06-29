import React from "react";
import styled from "styled-components";

import "../../i18n";
import { useTranslation } from "react-i18next";

const Text = styled.div`
  width: 80%;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #f3f3f3;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #f3f3f3;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
`;

const Card = () => {
  const { t } = useTranslation<string>();

  return (
    <Text>
      <Heading>{t("title")}</Heading>
      <Paragraph>{t("about")}</Paragraph>
    </Text>
  );
};

export default Card;
