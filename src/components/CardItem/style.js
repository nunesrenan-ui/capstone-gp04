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
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const CardImage = styled.div`
  height: 150px;
  width: 25%;
  margin: 10px;
  border: solid 1px #ccc;
`;

export const CardBody = styled.div`
  height: 150px;
  width: 75%;
  margin: 10px;
`;
export const CardTitle = styled.div`
  font: bold;
  font-size: 2rem;
  text-align: left;
  padding: 10px;
`;

export const CardDescription = styled.div`
  font-size: 1rem;
  color: #ccc;
  text-align: left;
  padding: 10px;
`;
