import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 1rem;
`;

const TitleContainer = styled.h2`
  text-align: center;
`;
const FindFret = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleContainer>找品位</TitleContainer>
      <Button onClick={() => navigate("/")}>回主页</Button>
    </Container>
  );
};

export default FindFret;
