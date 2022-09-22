import styled from "styled-components";

export const Container = styled.div`  
color: var(--color-escuro);

@media (min-width:120px){ 
 display: flex;
 flex-direction: column;
 width: 95%;
 margin: 0 auto;
 align-items: center;
 height: 20em;
}

`


export const Card = styled.div`  
@media (min-width:120px){     
    width:100%;       
    display: flex;
    flex-direction: column; 
    align-items: center;  
    overflow-y: auto;
  

}


.containerInfo{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-top: 1em;
}

.containerInfo p{
    text-align: left;
}
.valores{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-top: 1em;
    
}

.valores ul{
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    
}

.valores li{
    display: flex;
    align-items: flex-start;  
    flex-direction: column;
    width: 100%;
    margin-top: 1em;
   
}

.valores h2{
    font-size: medium;
}
.valores h3{
    font-size: medium;
    font-weight: 300;
}


.titulo{
    background-color: var(--color-escuro);
    color: white;
    padding: 0em 1em;
    margin-top: 1em;
    margin-bottom: 1em;
}

strong{
    font-weight: 800;
}

`
