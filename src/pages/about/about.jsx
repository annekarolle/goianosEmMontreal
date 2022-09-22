import { Container } from "./style.js";

import Goianos from "../../assets/img/goianos.png"
import Canada from "../../assets/img/Flag_of_Canada_(Pantone).svg.png"
import goias from "../../assets/img/Bandeira_de_Goiânia.svg.png"
import quebec from "../../assets/img/Flag_of_Quebec.svg.png"
import brasil from "../../assets/img/image.png"
import Headermain from "../../components/header/index.jsx";
import Footermain from "../../components/footer/index.jsx";

const About = () => {
  return (
  <>
  <Headermain />
    <Container>      
        <div className="containerSobreInicio">
            <h1 className="tituloabout">Sobre nós</h1>
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
      
        {/* <div className="containerImagensbandeiras">
        <img src={brasil} alt="" />
        <img src={goias} alt="" />
        <img src={quebec} alt="" />
        <img src={Canada} alt="" />
        </div> */}

        </div>  
    
        <div className="goianos">
        <img src={Goianos} alt="Imagem dos administradores da pagina com a bandeira do Brasil e do Canada"/>
        </div>

    </Container>
    <Footermain />
  </>
  );
};

export default About;
