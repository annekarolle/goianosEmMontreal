import {FaWhatsapp} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"


const Footermain = () => {
    return (
        <div className="footer">
        <div className="containerContatos">
          <h3>Contato</h3>
          <ul>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5515147020626">
              <h6 className="icon"><FaWhatsapp/></h6>
              <h6>+1(514) 702-0626-Thanila Vitória</h6>
              </a>
            </li>
            <li>
            <a href="https://www.instagram.com/goianos.montreal/">
              <h6 className="icon"><FiInstagram/></h6>
              <h6>@goianos.montreal</h6>
              </a>
            </li>
          </ul>
          <span className="copyRigths">© Copyright 2022. Todos os direitos reservados Goianos em Montreal</span>
        </div>
      </div>
    )
}

export default Footermain