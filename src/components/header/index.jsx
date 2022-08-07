import { Link } from "react-router-dom";
import {FaCanadianMapleLeaf} from "react-icons/fa"
const Headermain = () => {
    return (
      <>
        <div className="App-header">
        <div className="containerMenubar">
        <div className="logo">
          <Link className="logotext" to='/'><h1><FaCanadianMapleLeaf/> Goianos.Montreal</h1></Link>
        </div>
        <div className="menubar">
         
          <ul>
            <li> <Link to="/">Home</Link></li>  
            <li> <Link to="/about">Sobre</Link></li>           
            <li> <Link to="/services">Serviços</Link></li> 
            <li> <Link to="/partners">Parceiros</Link></li> 
            <li> <Link to="/contacts">Contatos</Link></li> 
          </ul>
        </div>
        </div>
      </div> 
      </>
    )
}

export default Headermain