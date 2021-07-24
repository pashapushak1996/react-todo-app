import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: cornflowerblue;
  color: wheat;
  padding: 0px 20px;

  & h1 {
    font-size: 40px;
    color: rgba(229, 255, 217, 0.86);
  }
`;