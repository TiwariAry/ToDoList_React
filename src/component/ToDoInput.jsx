
function ToDoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props;

    return (
        <header>
            {/*The useState hook creates a state variable, todoValue, initialized to an empty string ('')*/}
            {/*setTodoValue is a function used to update todoValue*/}
            <input value={todoValue} onChange={(event) => {
                setTodoValue(event.target.value)
            }}/>
            <button onClick={() => {
                handleAddTodos(todoValue);
                setTodoValue('');
            }}>Add</button>
        </header>
    )
}

export default ToDoInput