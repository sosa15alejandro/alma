import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import nuestrosservicios1 from "../../assets/nuestrosservicios1.png";
import nuestrosservicios2 from "../../assets/nuestrosservicios2.png";
import nuestrosservicios3 from "../../assets/nuestrosservicios3.png";
import nuestrosservicios4 from "../../assets/nuestrosservicios4.png";
import nuestrosservicios5 from "../../assets/nuestrosservicios5.png";
import nuestrosservicios6 from "../../assets/nuestrosservicios6.png";
import party from "../../assets/party.png";
import party2 from "../../assets/party2.png";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const NuestrosServiciosSection = styled.section`
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
const NuestrosServiciosText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const NuestrosServicios = () => {
  return (
    <NuestrosServiciosSection id="nuestrosservicios">
      <Waves src={wave} alt="" />
      <Party2>
        <img src={party2} alt="" />
      </Party2>
      <Main>
        <div>
          <Title>Nuestros Sercicios</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={nuestrosservicios3} alt="" width="200" height="200" />
          </Rocket>
          <NuestrosServiciosText>
            <Text>
              Experiencias de Marca
            </Text>
          </NuestrosServiciosText>
        </Content>
        <Content>
          <Rocket>
            <img src={nuestrosservicios1} alt="" width="200" height="200" />
          </Rocket>
          <NuestrosServiciosText>
            <Text>
              Activaciones en Retail
            </Text>
          </NuestrosServiciosText>
        </Content>
        <Content>
          <Rocket>
            <img src={nuestrosservicios2} alt="" width="200" height="200" />
          </Rocket>
          <NuestrosServiciosText>
            <Text>
              Eventos Corporativos           
            </Text>
          </NuestrosServiciosText>
        </Content>
        <Content>
          <Rocket>
            <img src={nuestrosservicios4} alt="" width="200" height="200" />
          </Rocket>
          <NuestrosServiciosText>
            <Text>
              Estrategia de Marca
            </Text>
          </NuestrosServiciosText>
        </Content>
        <Content>
          <Rocket>
            <img src={nuestrosservicios5} alt="" width="200" height="200" />
          </Rocket>
          <NuestrosServiciosText>
            <Text>
              Cobertura Audiovisual         
            </Text>
          </NuestrosServiciosText>
        </Content>
        <Content>
          <Rocket>
            <img src={nuestrosservicios6} alt="" width="200" height="200" />
          </Rocket>
          <NuestrosServiciosText>
            <Text>
              Influencers            
            </Text>
          </NuestrosServiciosText>
        </Content>
        <div>
          <Circle style={{ backgroundColor: "var(--purple)" }} />
          <Circle style={{ backgroundColor: "var(--pink)" }} />
          <Circle style={{ backgroundColor: "var(--black)" }} />
        </div>
        <br></br>
      </Main>
    </NuestrosServiciosSection>
  );
};

export default NuestrosServicios;
