import {useState, useEffect} from 'react'
import ToDoList from "./component/ToDoList.jsx";
import ToDoInput from "./component/ToDoInput.jsx";

// JS is always inside curly brackets

function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({todos:newList}));
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleDeleteTodos(index) {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index;
        })
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleEditTodo(index) {
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);
        handleDeleteTodos(index);
    }

    useEffect(() => {
        // return null; prevents the further JSX from loading because I am returning null
        if (!localStorage) {return;}

        let localTodo = localStorage.getItem('todos');
        if (!localTodo) {return;}

        localTodo = JSON.parse(localTodo).todos;
        setTodos(localTodo);
    }, []) // Empty [] means run on page load

    return (
        <>
            <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
            <ToDoList handleEditTodo={handleEditTodo} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
        </>
    )
}

export default App