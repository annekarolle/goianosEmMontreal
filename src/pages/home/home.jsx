
import Headermain from "../../components/header/index.jsx";
import Footermain from "../../components/footer/index.jsx";

import Conteudo from "../../components/conteudo/conteudo.jsx";
import NetWork from "../../components/network/index.jsx";
import Caroussel from "../../components/caroussel/caroussel.jsx";


const Home = () => {
  return (
    <>
  
    <Headermain /> 
    <Conteudo/> 
    <Caroussel/>
    <NetWork/>    
    <Footermain /> 
    
    </>
  );
};

export default Home;
