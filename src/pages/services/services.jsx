import { Container } from "./style";
import Flag from "../../assets/img/canadaFlag.jpg"
import Headermain from "../../components/header";
import Footermain from "../../components/footer";
import Calculadora from "../../components/calculadora";
const Services = () => {
  return (
   <>
   <Headermain />
    <Container>
    <h1>Serviços</h1>
      <div className="services">
        
        <div className="containerSobreInicio">          
          <ul>
            <li>
             <div className="containerImagemLista">   
             <img src={Flag} alt="Flag canada"/>   
             </div>
            <div className="containerTextoLista">
                <h3>Transfer Aeroporto</h3>
                <p>Transfer aeroporto / casa ou vice e versa;</p>
             </div>
            </li>  
            </ul>  
            <div className="containerFlag">
              <Calculadora/>
             </div>

        </div>   
        <div className="bannerServiços">
                <h3>Contrate nossos serviços, consulte nossa agenda</h3>
                <a href="#" >
                <button>Ver Agenda</button>
                </a>
                
            </div>                
       
      </div>
     
    </Container>
    <Footermain/>
   </>
  );
};

export default Services;
