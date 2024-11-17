import ToDoCard from "./ToDoCard.jsx";

function ToDoList(props) {
    const {todos} = props;

    return (
        <ul className={'main'}>
            {todos.map((todo, todoIndex) => {
                return (
                    //  'key' helps identify each list item uniquely so that the virtual DOM can
                    //  efficiently update the list without re-rendering the entire list when an item changes.
                    <ToDoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </ToDoCard>
                )
            })}
        </ul>
    )
}

export default ToDoList