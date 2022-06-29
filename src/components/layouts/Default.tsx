import React from "react";
import styled from "styled-components";

interface DefaultProps {
  children: React.ReactNode;
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Default = (
  {
    children
  }: DefaultProps
) => {
  return <Layout>{children}</Layout>;
};

export default Default;
