import styled from "styled-components";
import {useState} from "react";


const StyledInput = styled.input`
  width: 50%;
  margin: 20px 0px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  display: block;
  border: none;
  border-bottom: 1px solid #ccc;
`;

const StyledSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: indianred;
  outline: none;
  border: 1px solid indianred;
  border-radius: 5px;
`


const StyledForm = styled.form`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px`;

export const CreateTodoForm = ({createTodo}) => {
    const [value, setValue] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        createTodo(value);
        setValue('');
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <StyledForm onSubmit={ onSubmit }>
            <StyledInput placeholder={ `Todo title...` }
                         type="text"
                         onChange={ onChange }
                         value={ value }
            />
            <StyledSubmitButton>Add</StyledSubmitButton>
        </StyledForm>
    );
}


