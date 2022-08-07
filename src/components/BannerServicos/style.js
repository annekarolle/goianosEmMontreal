import styled from "styled-components";
export const ContainerBanner = styled.div`
  @media (min-width: 320px) {
    background-color: #831515;
    color: white;
    width: 80%;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 28%) 5px 4px 8px 0px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 15px;
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
