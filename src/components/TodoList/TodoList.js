import {StyledList} from "./TodoListStyles";
import {Todo} from "../Todo/Todo";

export const TodoList = ({todos, toggle, deleteTodo}) => {
    if (todos.length === 0) {
        return <h5>No todos</h5>
    }

    return <StyledList>
        { todos.map((todo) => <Todo deleteTodo={ deleteTodo } toggle={ toggle } key={ todo.id } todo={ todo }/>) }
    </StyledList>
}