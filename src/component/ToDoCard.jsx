function ToDoCard(props) {
    const {children, handleEditTodo, handleDeleteTodos, index} = props;

    return (
        <li className={'todoItem'}>
            {children}
            <div className={'activeContainer'}>
                {/*Wrapping the function call in () => handleDeleteTodos(index) creates
                a callback function that React will call on click, rather than calling
                handleDeleteTodos immediately*/}
                <button onClick={() => {
                    handleEditTodo(index);
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>

                <button onClick={() => {
                    handleDeleteTodos(index);
                }}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}

export default ToDoCard