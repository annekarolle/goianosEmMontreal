import { Link } from "react-router-dom";
import { FaCanadianMapleLeaf } from "react-icons/fa";

import { useState } from "react";
import imagem from "../../assets/img/goianos.png"
import { ContainerMenuBar } from "./style";
import Caroussel from "../caroussel/caroussel";
const Headermain = () => {  
  const [isOpenModal, setIsOpenModal] = useState(false);


  return (
    <>
      <div className="App-header">
        <ContainerMenuBar >
         <div className="navegador">
         <div >
            <Link to="/">
              <h1>
                <FaCanadianMapleLeaf /> Goianos.Montreal
              </h1>
            </Link>
          </div>

          <div >
            <ul className="menuNav">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                {" "}
                <Link to="/services">Serviços</Link>
              </li>
              <li>
                {" "}
                <Link to="/partners">Parceiros</Link>
              </li>
              <li>
                {" "}
                <Link to="/contacts">Contatos</Link>
              </li>
            </ul>
          </div>
         </div>
    
        </ContainerMenuBar>
        
      </div>
    </>
  );
};

export default Headermain;
