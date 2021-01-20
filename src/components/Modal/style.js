import styled from "styled-components";
import { Button, Layer } from "grommet";

export const StyledButton = styled(Button)`
  background-color: #ff9f1c;
  border: none;
  height: 30px;
  width: 130px;
  text-align: right;
  font-size: 17px;

  :hover {
    font-size: 18px;
  }
`;

export const StyledLayer = styled(Layer)`
  border-radius: 25px;
`;
