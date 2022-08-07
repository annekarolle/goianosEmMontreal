import styled from "styled-components";

export const Container = styled.div`  
@media (min-width:320px){ 
 display: flex;
 flex-direction: column;
 width: 95%;
 margin: 0 auto;

 .tituloServico{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color : #831515;
    align-items: center;
 }
 .tituloServico button{
    background-color: transparent;
    color: #831515;
    border: none;    
    width: 100px;
    border-radius: 4px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  
 }
 

}

`


export const Card = styled.div`  
@media (min-width:320px){ 
    max-width: 250px;
    width: 100%;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 28%) 5px 4px 8px 0px;    
    display: flex;
    flex-direction: column;
    padding: 10px;
   
    margin: 0 auto;     
    margin-top: 25px;

    ul{
        list-style: none;
    }

    .DescricaoServico p{
    display: flex;
    color: #831515;
    font-size: 15px;
    margin-top: 10px;
    font-weight: 900;
    text-align: left;
    }

    .DescricaoServico p +p{
    display: flex;
    color: #831515;
    font-size: 18px;
    margin-top: 10px;
    font-weight: 900;
    text-align: left;
    }

    .DescricaoServico h2{
    display: flex;
    justify-content: center;
    color: white;
    font-size:22px;
    font-weight: bold;
    background-color: #831515;
    border-radius: 4px;
    padding: 5px;
    }

    ul{
        margin-top: 20px;
    }
}



`