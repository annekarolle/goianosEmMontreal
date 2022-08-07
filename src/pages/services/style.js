import styled from "styled-components";

export const Container = styled.div`
@media (min-width:320px){
  display: flex;
  flex-direction: column; 
  width: 100%; 
  padding: 20px;
  justify-content: space-around; 
  margin: 0 auto;  
  height : 100%;

.services{
  display: flex;
  flex-direction: column; 
  width: 100%; 
  margin: 0 auto;
  justify-content: space-around;    
  color: #831515;
  align-items: stretch;
  height : 100%;
  }

  .containerSobreInicio{
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;   
  }
  h1{
    margin-bottom:15px;
    text-align: left;
    color: #831515;
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    max-width: 1000px;
    width: 100%;    
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    overflow-x: scroll;
    max-height: 300px;
    margin-bottom: 20px;  
    padding: 30px;
  }

  h3{
    font-size: 20px;
  }

  li{
    display: flex; 
    flex-direction: column;
    background-color:white ;  
    border-radius: 8px;
    max-width: 250px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 28%) 5px 4px 8px 0px;
    
  } 
 

  p{
    text-align: left;  
    font-size: 15px;    
  }


  .containerImagemLista{
    width: 100%;
    height: 50%;
    object-fit: cover; 
    overflow: hidden;
    border-bottom: #831515 3px solid;
    }

    .containerImagemLista img{
        width: 100%;
       
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .valores{
        background-color: #831515;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        color: white;
    }

    .containerTextoLista{
        width: 100%;
        height: 50%;       
        border-bottom-left-radius: 8px;
         border-bottom-right-radius: 8px;
        display: flex;
        flex-direction: column;
        padding: 10px;
   
    }

    .containerTextoLista{
     color: #831515;
    }
    

    .btnSaibaMais{
        background-color: transparent;
        color: white;
        width: 100%;
        border: none;
        padding: 5px;
        border-radius: 4px;
        color: #831515;
    }

    .bannerServiços button{
       padding: 5px;
        background-color: #ff0404;
        width: 100%;
        color: white;
        border: none;
    }

    .btnSaibaMais:hover{
      transform: scale(1.03);
    }

    .bannerServiços button:hover{
      transform: scale(1.03);
    }

    .containerCalculadora{
      display: none;
    }
  }

  @media (min-width:480px){

  }

 

  
`
    