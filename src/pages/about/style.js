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
  color: var(--color-escuro);

@media (max-width:400px){
  flex-wrap: wrap;
  flex-direction: column-reverse;
align-items: center;
}
  

  .containerSobreInicio{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 


    .tituloabout{
      background-color: var(--color-escuro);
      color: var(--color-branco);
      padding: 0em 1em;
    }
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



  .goianos {
    width:50%;
    object-fit: cover;
    
    
  }

  .goianos img{
    width: 100%;
    border-radius: 8px;
    
  }


  .containerImagensbandeiras{
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-top: 2em;  
  }

  .containerImagensbandeiras img{
    width: 10%;
  }

  @media (max-width:400px){
    .containerImagensbandeiras{
      justify-content: center;
    }

    .containerSobreInicio{
      flex-direction: column;
    }
  }
    

`
  