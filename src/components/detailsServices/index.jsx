import { useParams } from "react-router-dom";
import Footermain from "../footer";
import Headermain from "../header";
import { Link } from "react-router-dom";
import { Card, Container } from "./style";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import BannerServico from "../BannerServicos";

const DetailServices = ({ servicos }) => {
  const param = useParams();

  const servico = servicos.find((servico) => {
    return servico.titulo === param.id;
  });

  return (
    <>
      <Headermain />
      <Container>
        <div className="tituloServico">
          <h1>Serviços</h1>
          <Link to="/services">
            {" "}
            <button>
              <BsFillArrowLeftCircleFill />
              Voltar
            </button>
          </Link>
        </div>
        <Card>
          <div className="DescricaoServico">
            <h2>{servico.titulo}</h2>
            <p>{servico.Descricao}</p>
            <p>Como calcular o valor do serviço?</p>
          </div>
          <ul>
            {servico.precos.map((item) => {
              return (
                <li>
                  <p>
                    {item.categoria} valor por {item.unidade} {item.moeda}{" "}
                    {item.valor}
                  </p>
                </li>
              );
            })}
          </ul>
        </Card>
      </Container>
      <BannerServico/>
      <Footermain />
    </>
  );
};

export default DetailServices;
