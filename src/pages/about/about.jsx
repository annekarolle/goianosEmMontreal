import { Container } from "./style.js";

import Flag from "../../assets/img/flagcanada.png"
import Headermain from "../../components/header/index.jsx";
import Footermain from "../../components/footer/index.jsx";

const About = () => {
  return (
  <>
  <Headermain />
    <Container>
      <div className="sobre">
        <div className="containerSobreInicio">
            <h1>Sobre nós</h1>
            <ul>
            <li>
          <p>
          Sem muitas delongas, quando viemos para este país tivemos algumas
          dificuldades que poderiam facilmente terem sido evitadas. Agora que
          podemos auxiliar novos imigrantes iremos fazer o máximo para o
          conforto e integração de todos vocês.
          </p>
        </li>
        <li>
          <p>Todo aquele lenga lenga de morar em outro país “Que vocês já conhecem”
          é totalmente verdade, porém com uma base forte e o apoio certo tudo
          fica “menos difícil”.</p>
        </li >
        <li >
          <p>Eu, Wanderson Peixoto de Sousa e minha esposa Thanila Vitoria
          Rodrigues de Jesus, VULGOS GOIANOS EM MONTREAL, estaremos aqui para
          ajudar e integrar vocês nessa nova vida.</p>
        </li>
        </ul>
      
        </div>
        <div className="containerFlag">
        <img src={Flag} alt="bandeira canada"/>
        </div>
    
      </div>
    </Container>
    <Footermain />
  </>
  );
};

export default About;
