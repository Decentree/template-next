import React from "react";
import styled from "styled-components";

import { Icon } from "ts-react-feather-icons";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

const Socials = () => {
  return (
    <Row>
      <a href="https://github.com/Decentree" target="_blank">
        <Icon name="github" color="#f3f3f3" size="32" />
      </a>
      <a href="https://www.linkedin.com/company/decentree" target="_blank">
        <Icon name="linkedin" color="#f3f3f3" size="32" />
      </a>
    </Row>
  );
};

export default Socials;
