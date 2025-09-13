import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import ceci from "../../assets/ceci.png";
import fondoVideo from "../../assets/videoevento1.mp4";
import party2 from "../../assets/party2.png";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(3px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const BackgroundSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 100vh; /* ocupa toda la altura de la pantalla */
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
  filter: brightness(0.7) contrast(1.1); /* mejora el contraste y lectura */
  transform: scale(1.02); /* evita bordes vacíos y mejora suavidad */
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
  color: white;
  text-shadow: 2px 2px 4px black; /* sombra negra detrás del texto */

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


const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: white;
  text-shadow: 2px 2px 4px black; /* sombra negra detrás del texto */

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
const BackgroundText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const Background = () => {
  return (
    <BackgroundSection id="background">
      {/* <Waves src={wave} alt="" /> */}
      <VideoBackground autoPlay loop muted>
        <source src={fondoVideo} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </VideoBackground>
      <Party2>
        <img src={party2} alt="" />
      </Party2>
      <Main>
        <div>
          <Title>Background</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={ceci} alt="" width="400" height="400" />
          </Rocket>
          <BackgroundText>
            <Text>
              Ceci es una profesional del marketing con más de 20
              años de experiencia en el mundo corporativo y de
              consumo masivo, pasando por compañías líderes
              como Grupo AB InBev (Brahma y Quilmes), Claro,
              Sabmiler (Isenbeck), Coty Argentina y BGH.
            </Text>
            <Text>
              Licenciada en Administración de Empresas, con un
              Posgrado en Dirección de Marketing Estratégico, en la
              UBA.
            </Text>
            <Text>
               Fan del marketing, de los viajes, la playa y el running.
                Aporta a ALMA Eventos su energía creativa y
                estratégica para transformar cada evento en una
                experiencia auténtica, con emoción y propósito.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </BackgroundText>
        </Content>
      </Main>
    </BackgroundSection>
  );
};

export default Background;
