import {Button, ButtonGroup, ListElement} from "../TodoList/TodoListStyles";
import {useState} from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  text-decoration: ${ ({success}) => success ? "line-through" : "none" };
`;


export const Todo = ({todo, toggle, deleteTodo}) => {
    const [checked, setIsChecked] = useState(todo.completed);

    return (
        <ListElement>
            <div>
                <input type="checkbox"
                       onChange={ ({currentTarget: {checked}}) => setIsChecked(checked) }
                       checked={ checked }
                       onClick={ () => toggle(todo.id) }/>
                <StyledSpan success={ todo.completed }>{ todo.title }</StyledSpan>
            </div>
            <ButtonGroup>
                <Button onClick={ () => deleteTodo(todo.id) } danger={ 'red' }>Delete</Button>
            </ButtonGroup>
        </ListElement>
    );
}


