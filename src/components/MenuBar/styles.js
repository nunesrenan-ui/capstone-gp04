import styled from "styled-components";

export const MenuBarLayout = styled.header`
  background-color: #ffc15e;
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 5.5vh;
  min-height: 50px;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .appName {
    color: black;
    left: 50%;
    font-size: 1.8rem;
    font-weight: normal;
    margin: 8px 25px;
  }

  ul {
    display: flex;
    justify-content: space-space-between;
    align-items: center;
  }

  li {
    list-style: none;
    color: black;
    font-size: 25px;
    padding: 0 20px;
  }
`;
