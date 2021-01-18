import styled from "styled-components";
import { Box } from "grommet";

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  padding: 20px 20px 20px 0px;

  span {
    margin-right: 2.5px;
  }
`;
