import React from "react";
import styled from "styled-components";

import { Icon } from "ts-react-feather-icons";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

const Socials: React.FC = () => {
  return (
    <Row>
      <Icon name="github" color="#f3f3f3" size="32" />
      <Icon name="linkedin" color="#f3f3f3" size="32" />
    </Row>
  );
};

export default Socials;
