import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import eventosrealizados from "../../assets/eventosrealizados.png";
import party2 from "../../assets/party2.png";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const EventosRealizadosSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Party2 = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Party = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const EventosRealizadosText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const EventosRealizados = () => {
  return (
    <EventosRealizadosSection id="eventosrealizados">
      <Waves src={wave} alt="" />
      <Party2>
        <img src={party2} alt="" />
      </Party2>
      <Main>
        <div>
          <Title>Eventos Realizados</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={eventosrealizados} alt="" width="1500" height="1500" />
          </Rocket>
          <EventosRealizadosText>
          <Text>
            En Alma Eventos creemos que cada
            encuentro es una oportunidad para crear
            impacto, emocionar y dejar huela.
            A lo largo de nuestro recorrido hemos
            acompañado a marcas y organizaciones en
            la producción de eventos únicos, donde la
            estrategia, la creatividad y la ejecución
            premium se combinan para dar vida a
            experiencias memorables.
          </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </EventosRealizadosText>
        </Content>
      </Main>
    </EventosRealizadosSection>
  );
};

export default EventosRealizados;
