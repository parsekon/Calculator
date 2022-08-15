export default function Todo() {
    function handleTodoAddClick(e) {
        e.preventDefault();

    }

    return(
        <>
        <h1>Task List</h1>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <form>
            <label htmlFor="">Add Task:</label>
            <input />
            <button onClick={handleTodoAddClick}>Add</button>
        </form>
        </>
    )
}