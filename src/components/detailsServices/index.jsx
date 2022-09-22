import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthContex";
import { Card, Container } from "./style";




const DetailServices = ({ servicos }) => {

  const {serviceId} = useContext(AuthorizationContext)
  
  const servico = servicos.find((servico) => {
    return servico.titulo === serviceId;
  });


 console.log(servico)
  return (    
  <>   
      
      <Container>    
        <Card>    
          <div className="containerInfo">
              <h2 className="titulo">{servico.titulo}</h2>
              
              <p><strong>Descrição do serviço:</strong>  {servico.Descricao} </p>
          </div> 
          <div className="valores">
           
            <ul>
            {
              servico.precos.map((item) => 
              item.valor ?
              <li> 
                <h2>Como calcular o serviço?</h2>
                <h3>Preço por {item.categoria}</h3>                
                <h3>Valor por {item.unidade}: {item.valor} {item.moeda}</h3>
                <h3>Quantidade minima {item.qtd_minima}: {item.unidade}</h3>
              </li>
              :
              <li>
                <h2>Serviço sem custo</h2>
              </li>
              )

            }
            </ul>
          </div>

        </Card>
      </Container>    
          
    </>
  );
};

export default DetailServices;
