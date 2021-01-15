import styled from "styled-components";

const ButtonHeader = (props) => {
  return <Button>{props.text}</Button>;
};

export default ButtonHeader;

export const Button = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  text-align: center;
  text-decoration: none;
  background-color: #ff9f1c;
  color: white;
  font-size: 0.8em;
  margin: 0 2%;
`;
