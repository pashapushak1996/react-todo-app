import styled from "styled-components";


const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

const ListElement = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-bottom: lightgrey 2px solid;
`;

const ButtonGroup = styled.div`
  display: flex;
  column-gap: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${ ({success, danger}) => success ? 'green' : danger };
  color: white;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer`;


export {
    StyledList, ListElement, ButtonGroup, Button
}