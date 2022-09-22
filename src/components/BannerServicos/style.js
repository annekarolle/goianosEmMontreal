import styled from "styled-components";



export const ContainerBanner = styled.div`

  @media (min-width: 320px) {
    background: var(--color-medio);
    color: white;
    width: 80%;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 28%) 5px 4px 8px 0px;
    margin: 3em;   

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 15px;
      gap: 1em;
    }

    a:hover{
      filter: brightness(1.5);
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
