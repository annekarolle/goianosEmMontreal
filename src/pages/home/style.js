import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1110px;
  width: 100%;
  margin-top: 80px;
  padding: 20px;
  padding-bottom:20px;
  justify-content: space-between;
  margin: 0 auto;
  gap: 15px; 
  color: #831515;
 

  
  .containerConteudoPrincipal{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .containerImagem{
    width: 40%;
    overflow: hidden;
  }

  .containerImagem img{
    width: 100%;
  }
  

  h1 {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1px;
    text-shadow:rgba(0, 0, 0, 0.1) 3px -3px 8px 3px;
  }

  h2{
    font-size: 30px;
    letter-spacing: .2rem;
    margin-top: 0;
    text-shadow:rgba(0, 0, 0, 0.1) 3px -3px 8px 3px;
  }

  h3{
    color: #831515;
    font-size: 25px;
  }

  h4{
    font-size: 20px;
    margin-left: 5px;
  }

  ul{
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  li{
    display: flex;
    align-items: flex-start;
  }


  li:hover{
    filter: brightness(1.3);
    transform: scale(1.02);
  }
  .btnSaibaMais{
    background-color: #831515;
    color: white;
    width: 150px;
    margin-top: 10px;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    margin-bottom: 10px;
  }

  .btnSaibaMais a{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  
  .btnSaibaMais:hover{    
    filter: brightness(1.3);
    transform: scale(1.03);
  }
  
  
`;

export const Header = styled.div``;
