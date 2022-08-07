import styled from "styled-components";

export const ContainerMenuBar = styled.div`
@media (min-width:100px) and (max-width:600px){

.containerMenubar{
  display: flex;
  flex-direction: row;
}
.menubar{
  display: none;
  background-color: #61dafb;
}

.hamburguerMenu{
  font-size: 25px;
  margin: 10px;
}

.hamburguerMenu button{
  background-color: transparent;
  border: none;
  font-size: 25px;
  margin: 10px;
  color: white;
}

.sideMenu{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  
}
.sideBar{
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #831515;
  padding-left: 20px;
  padding-top: 20%;
}

.Sidelogo{
  display: flex;
}
.sideLogotext{
  display: flex;
  flex-direction: row;
  font-size: 10px;
  margin: 0;
}
.sideBar ul{
  list-style: none;      
  font-size: 30px; 
  gap: 20px;  
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.sideMenu button{
  color: white;
  background-color: transparent;
  border: none;
  display: flex;
  width: 100px;
  justify-content: flex-end;
  gap: 10px;
  font-size: 15px;
}

.containerImgInsta a{
 font-size: small;
 margin-top: 20px;
 display: flex;
 gap: 10px;
}


.linkMenus{
    display: flex;
 gap: 10px;
 margin-top: 10px;
}

h2{
    font-size: 25px;
}


}
`