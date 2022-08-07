import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  width: 100%;
  margin-top: 80px;
  padding: 20px;
  padding-bottom:20px;
  justify-content: space-around; 
  margin: 0 auto;   

.services{
  display: flex;
  flex-direction: column; 
  width: 100%; 
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 50px;
  padding: 20px;
  color: #831515;
  align-items: stretch;
  }

  .containerSobreInicio{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
  }
  h1{
    margin-bottom:15px;
    text-align: left;
    color: #831515;
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center
  }

  li{
    display: flex;
    width: 200px;
    flex-direction: column;
    background-color:white ;
    height: 250px;
    border-radius: 8px;
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

    .bannerServiços{
        background-color: #831515;
        color: white;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 15px;
        justify-content: center;
        max-height: 90px;
        height: 100%;
    }

    .bannerServiços button{
        margin-left: 10px;
        padding: 5px;
        background-color: #ff0404;
        color: white;
        border: none;
    }

    .bannerServiços button:hover{
      transform: scale(1.03);
    }
 
 

  
`
    