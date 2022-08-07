import "./style";
import { SocialMedia } from "./style";
import { FiInstagram } from "react-icons/fi";

const NetWork = () => {
  return (
    <SocialMedia>
      <div className="containerinterno">
        <div className="containerImgInsta">
            <a href="https://www.instagram.com/goianos.montreal/">
            <FiInstagram />
            </a>          
        </div>
        <div className="containerTextoInstagram">
          <h3>Faça parte da nossa comunidade</h3>
          <p>
            Siga a nossa página no instagram e fique por dentro das novidades
            sobre os Goianos em Montreal
          </p>
        </div>
      </div>
    </SocialMedia>
  );
};

export default NetWork;
