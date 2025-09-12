//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import QuienesSomos from "../Sections/QuienesSomos/index";
import Background from "../Sections/Background/index";
import NuestraHistoria from "../Sections/NuestraHistoria/index";
import NuestrosServicios from "../Sections/NuestrosServicios/index";
import EventosRealizados from "../Sections/EventosRealizados/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <QuienesSomos />
      <Background />
      <NuestraHistoria />
      <NuestrosServicios />
      <EventosRealizados />
      <Contact />
    </Container>
  );
};

export default Home;
