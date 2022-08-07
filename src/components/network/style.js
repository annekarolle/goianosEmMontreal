import styled from "styled-components";

export const SocialMedia = styled.div`  
@media (min-width:320px){ 
    color:  #831515;
    display: flex;
    flex-direction: row;  
    width: 80%;
    margin: 0 auto;
    

    .containerImgInsta{
        font-size: 50px;       
     
    }

    .containerImgInsta a{
        color: #831515;
    }
    .containerinterno{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        gap: 10px;
    }
    .containerTextoInstagram{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        text-align: left;
    }
}
`