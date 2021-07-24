import './App.css';
import Header from "./components/Header/Header";
import {Logo} from "./components/Logo/Logo";
import {TodoList} from "./components/TodoList/TodoList";
import {useState} from "react";
import {CreateTodoForm} from "./components/CreateTodoForm/CreateTodoForm";
import {Col, Container, Nav, Row} from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  background-color: ${ ({dark}) => dark ? 'black' : "white" };
  height: 100%;

  a {
    color: black;
  }`;

function App() {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);


    const setTodosToLocalStorage = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const createNewTodo = (title) => {
        if (!title) {
            alert('Write some title')
            return;
        }
        const todo = {id: Date.now(), title: title, completed: false};
        setTodosToLocalStorage([...todos, todo]);
        setTodos([...todos, todo]);
    }

    const toggleCompleteTodo = (id) => {
        const changedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        });
        setTodosToLocalStorage([...changedTodos]);
        setTodos([...changedTodos]);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodosToLocalStorage(newTodos);
        setTodos(newTodos);
    }

    return (
        <Container fluid>
            <Row>
                <Header>
                    <Logo/>
                    <h1>Todo list</h1>
                </Header>
            </Row>
            <Row>
                <CreateTodoForm createTodo={ createNewTodo }/>
                <TodoList toggle={ toggleCompleteTodo } deleteTodo={ deleteTodo } todos={ todos }/>
            </Row>
        </Container>
    );
}

export default App;
