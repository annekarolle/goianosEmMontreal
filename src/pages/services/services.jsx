import { Container } from "./style";
import Flag from "../../assets/img/canadaFlag.jpg";
import Headermain from "../../components/header";
import Footermain from "../../components/footer";
import Calculadora from "../../components/calculadora";


import { Link } from "react-router-dom";
import BannerServico from "../../components/BannerServicos";


const Services = ({servicos}) => {
  return (
    <>
      <Headermain />
      <Container>
        <h1>Serviços</h1>
        <div className="services">
          <div className="containerSobreInicio">
            <ul>
              {
                servicos.map((servico) => {
                 
                 return (
                  <li key={servico.titulo}>
                  <div className="containerImagemLista">                    
                    <img src={Flag} alt="Flag canada" />
                  </div>
                  <Link to={`services/${servico.titulo}`}>
                  <div className="containerTextoLista">
                    <h3>{servico.titulo}</h3>                    
                   <button className="btnSaibaMais">Saiba mais...</button>                   
                  </div>
                  </Link>
                </li>
                 )
                })
              }
             
            </ul>
            <div className="containerCalculadora">
              <Calculadora />
            </div>
          </div>
          <BannerServico/>
          </div>
      </Container>
      <Footermain />                       
    </>
  );
};

export default Services;
