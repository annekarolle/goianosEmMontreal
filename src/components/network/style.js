import styled from "styled-components";

export const SocialMedia = styled.div`  
@media (min-width:320px){ 
    color: white;
    display: flex;
    flex-direction: row;  
    width: 80%;
    margin: 0 auto;
    

    .containerImgInsta{
        font-size: 50px;       
     
    }

    .containerImgInsta a{
        color:white;
    }
    .containerinterno{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        gap: 10px;
        background-color:  #831515;;
        box-shadow:  rgb(0 0 0 / 28%) 5px 4px 8px 0px;;
        padding: 5px;
        border-radius: 4px;
       
    }
    .containerTextoInstagram{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        text-align: left;
    }
    .containerTextoInstagram h3{
        font-size: medium;
        font-weight: bold;
    }

    .containerTextoInstagram p{
        font-size: small;
        font-weight: 100;
    }
 
}
`