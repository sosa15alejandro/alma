import styled from "styled-components";
import wave from "../../assets/waves.svg";
import nuestrahistoria from "../../assets/nuestrahistoria.mp4";
import party2 from "../../assets/party2.png";

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem; /* espacio entre video y texto */

  @media only screen and (max-width: 48em) {
    flex-direction: column; /* en pantallas chicas, uno debajo del otro */
    justify-content: center;
    align-items: center;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%; /* un poco más ancho que 30% para que luzca mejor */

  @media only screen and (max-width: 48em) {
    width: 90%; /* en mobile, que ocupe casi todo el ancho */
    padding-bottom: 1rem;
  }

  video {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;

const NuestraHistoriaSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.1rem; /* algo de espacio interno */
`;

const Text = styled.h4`
  font-size: calc(0.7rem + 1vw);
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
const NuestraHistoriaText = styled.div`
  width: 100%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const NuestraHistoria = () => {
  return (
    <NuestraHistoriaSection id="nuestrahistoria">
      <Waves src={wave} alt="" />
      <Party2>
        <img src={party2} alt="" />
      </Party2>
      <Main>
        <div>
          <Title>Nuestra Historia</Title>
          <CurvedLine />
        </div>
        <Content>
          <VideoContainer>
            <video
              controls
              autoPlay
              loop
              muted
              style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto"
                }}              
            >
              <source src={nuestrahistoria} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </VideoContainer>

          <NuestraHistoriaText>
            <Text>
              Somos profesionales del marketing y venimos del mundo corporativo y de multinacionales reconocidas.
              A lo largo de nuestras carreras, lideramos equipos, gestionamos marcas y organizamos una variedad de eventos, desde
              lanzamientos de productos, eventos de fin de año, presencia de marca en eventos musicales y deportivos reconocidos, activaciones,
              hasta stands y participación, en múltiples y diversas industrias.
            </Text>
            <Text>
              Entendimos que lo que deja huella no es el show, es el sentido y la construcción de marca. Por eso, fundamos ALMA Eventos 360,
              una empresa de eventos donde la estrategia no está peleada con la emoción, y donde cada marca puede contar su historia con
              impacto real
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
            <br></br>

          </NuestraHistoriaText>
        </Content>
      </Main>
    </NuestraHistoriaSection>
    
  );
};

export default NuestraHistoria;
