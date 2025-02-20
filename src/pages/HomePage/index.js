import React from "react";
import { styled } from "styled-components";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;

const TitleContainer = styled.h1`
  text-align: center;
`;
const HomePage = () => {

  const navigate = useNavigate();


  return (
    <Container>
      <TitleContainer>Fretboard Memorize</TitleContainer>
      <Button size="large" type="primary" onClick={()=>navigate("/fret")}>
        找品位
      </Button>
    </Container>
  );
};

export default HomePage;
