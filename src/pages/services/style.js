import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  padding: 20px;
  justify-content: space-around;    
  align-items: center; 
  background-color: var(--color-branco);  
  margin-top: 3em;  
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 28%) 5px 4px 8px 0px;
  margin-top: 2em;


 


  @media (max-width:400px){     
    width: 320px;

  }

  .services{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;   
     
  }

  
`
    
export const ImagemFundo = styled.div`
/* background: var(--color-gradiente); */
width: 100%;

`

export const UlServices = styled.ul`

    display: flex;
    flex-direction: row;    
    width: 100%;  
    list-style: none;    
    gap: 2em;
    overflow-x: auto;
    /* background-color: var(--color-escuro); */
    height: 100%;


    button{
    background-color: transparent;
    border: none;
    width: 8em;
    color: grey;
    font-size: 18px;
  }

  button:focus{   
   font-weight:  800;
   color:  var(--color-escuro);
   border-radius: 10px;  
   border-radius: 4px;
   
  }
`