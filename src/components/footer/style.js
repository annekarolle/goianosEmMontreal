import styled from "styled-components";

export const Footer = styled.div`

 background-color: rgb(41, 40, 40);
 color: white;
 display: flex;
 width: 100%;
 margin-top: 2em;


.containerContatos{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
}

.containerContatos h3{
 margin-top: 10px;
 font-size: medium;
}

.containerContatos ul{
  display: flex;
  width: 100%;
  justify-content: center;  
  gap:5px;
  flex-direction: row;
   align-items: center;
}

.containerContatos li{
  display: flex; 
  flex-direction: row;    
}

h6{
 margin-top: 10px;
  font-size:medium;
}

.icon{
  color: #cc2020;
  font-size:medium;
}

.copyRigths{
  font-size: 8px;
  margin-top: 5px;
  font-weight: 100;
}


@media (max-width:400px){
  ul{
    flex-wrap: wrap;
    margin: 0;
    gap: 0;
  }
}


`