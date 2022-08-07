import { Container } from "./style.js";
import { IoIosCheckbox } from "react-icons/io";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import Headermain from "../../components/header/index.jsx";
import Footermain from "../../components/footer/index.jsx";
import NetWork from "../../components/network/index.jsx";
import Airplane from "../../assets/img/airplane.png"


const Home = () => {
  return (
    <>
    <Headermain />
    <Container>
    <div className="containerImagem">
        <img src={Airplane} alt="Imagem de um avião"/>
      </div>
      <div className="containerConteudoPrincipal">
        <h2>Vida real em</h2>
        <h1>Montreal</h1>

        <h2>Auxiliamos na sua chegada ao Canada</h2>
        
        <ul>
          <li>
            <h3>
              <IoIosCheckbox />
            </h3>
            <h4>Transfer</h4>
          </li>
          <li>
            <h3>
              <IoIosCheckbox />
            </h3>
            <h4>Mudança</h4>
          </li>
          <li>
            <h3>
              <IoIosCheckbox />
            </h3>
            <h4>Aluguel</h4>
          </li>
          <li className="btnSaibaMais">
            <Link to="/services"><span>Saiba mais...</span><BsFillArrowRightCircleFill/></Link>
          </li>
        </ul>
      </div>

           
    </Container>
    <NetWork/>
    <Footermain />
    </>
  );
};

export default Home;
