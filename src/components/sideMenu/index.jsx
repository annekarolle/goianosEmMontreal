import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ContainerMenuBar } from "./style";
import {FcAbout} from "react-icons/fc"
import {AiFillHome} from "react-icons/ai"

const SideMenu = ({ setIsOpenModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleOutClick(event) {
      console.log(modalRef);
      if (!modalRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      console.log("testeeeeee");
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <ContainerMenuBar className="sideMenu" ref={modalRef}>
      <div className="sideBar">
        <div className="Sidelogo">
          <Link className="sideLogotext" to="/">
            <h1>
              <FaCanadianMapleLeaf /> Goianos.Montreal
            </h1>
            <button onClick={() => setIsOpenModal(false)}>
              <BsFillArrowLeftCircleFill />
              Voltar
            </button>
          </Link>
        </div>
        <>
          <ul>
            <li>
              {" "}
              <Link to="/" className="linkMenus"> <h2><AiFillHome/></h2> <h2>Home</h2></Link>
            </li>
            <li>
              {" "}
              <Link to="/about" className="linkMenus"><h2><AiFillHome/></h2> <h2>Sobre</h2>
                </Link>
            </li>
            <li>
              {" "}
              <Link to="/services" className="linkMenus"><h2><AiFillHome/></h2> <h2>Serviços</h2>
                </Link>
            </li>
            <li>
              {" "}
              <Link to="/partners" className="linkMenus"><h2><AiFillHome/></h2> <h2>Parceiros</h2>
                </Link>
            </li>
            <li>
              {" "}
              <Link to="/contacts" className="linkMenus">
              <h2><AiFillHome/></h2> <h2>Contatos</h2></Link>
            </li>
          </ul>
        </>
        <div className="containerImgInsta">
          <a href="https://www.instagram.com/goianos.montreal/">
            <p><FiInstagram /></p> <p>Siga-nos no instagram!</p>
          </a>
        </div>
      </div>
    </ContainerMenuBar>
  );
};

export default SideMenu;
