import styled from "styled-components";

export const Card = styled.div`
  height: auto;
  width: 80%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 560px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  @media (max-width: 460px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  @media (max-width: 360px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  @media (max-width: 260px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
`;

export const CardImage = styled.div`
  height: 150px;
  width: 25%;
  margin: 10px;
  border: solid 1px #ccc;
  /* 
  @media (max-width: 760px) {
    height: 150px;
    width: 50%;
  }
  @media (max-width: 660px) {
    height: 150px;
    width: 25%;
  }*/
  @media (max-width: 560px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 460px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 360px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 260px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardBody = styled.div`
  height: 150px;
  width: 75%;
  margin: 10px;

  @media (max-width: 560px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  @media (max-width: 460px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  @media (max-width: 360px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  @media (max-width: 260px) {
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
`;
export const CardTitle = styled.div`
  font: bold;
  font-size: 2rem;
  text-align: left;
  padding: 10px;

  @media (max-width: 360px) {
    width: 100%;
  }

  @media (max-width: 260px) {
    width: 100%;
  }
`;

export const CardDescription = styled.div`
  font-size: 1rem;
  color: #ccc;
  text-align: left;
  padding: 10px;

  @media (max-width: 560px) {
    width: 100%;
  }
  @media (max-width: 460px) {
    width: 100%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
  @media (max-width: 260px) {
    width: 100%;
  }
`;
