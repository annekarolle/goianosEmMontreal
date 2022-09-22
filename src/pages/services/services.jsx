import { Container, ImagemFundo, UlServices } from "./style";
import servicos from "../../dataSources/servicos"
import DetailServices from "../../components/detailsServices";
import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthContex";
import Footermain from "../../components/footer";
import Headermain from "../../components/header";
import BannerServico from "../../components/BannerServicos";



const Services = () => { 
  const  {isOpenDetail, setIsOpenDetail, setServiceId} = useContext(AuthorizationContext)

  return (
    <> 
    <Headermain />  
    <ImagemFundo>
      <Container>       
        <div className="services">      
            <UlServices>
              {               
                servicos.map((servico) => {             
                 
                 return (
                   <li key={servico.titulo}> 
                    <button onClick={() =>{                 
                      setIsOpenDetail(true)  
                      setServiceId(servico.titulo)             
                    }} >{servico.titulo} 
                  </button>
                 </li>
                 )                 
                })
              }             
            </UlServices>          
              
              {
                isOpenDetail ?
                <DetailServices servicos={servicos}/>
                :
                <></>
              } 
          </div>
      </Container>
      </ImagemFundo> 
      <BannerServico/>
      <Footermain />                 
    </>
  );
};

export default Services;
