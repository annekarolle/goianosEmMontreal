import styled from "styled-components";

export const Container = styled.div`
    display: flex;
  flex-direction: row;
  max-width: 1110px;
  width: 100%;
  margin-top: 80px;
  padding: 20px;
  padding-bottom:20px;
  justify-content: space-around; 
  margin: 0 auto;  
  

  .sobre{
  display: flex;
  flex-direction: row;
  max-width: 1110px;
  width: 100%; 
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 50px;
  padding: 20px;
  color: #831515;
  align-items: stretch;
  }

  .containerSobreInicio{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }
  h1{
    margin-bottom:15px;
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  li{
    display: flex;
  }
  p{
    text-align: left;
    line-height: 22px;
    
  }

  .containerFlag {
    width: 40%;
    object-fit: cover;
    
  }
  .containerFlag img{
    width: 100%;
    
  }

`
  