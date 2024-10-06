const Task = ({task, setTasks}) => {
    const handleDeleteButton = () => {
        setTasks(prev => {
            return prev.filter(t => t.id !== task.id);
    })
    }
    return (
        <div>
            <p className='taskButton'>{task.title}</p>
            <button onClick={handleDeleteButton}>usuń</button>
        </div>
    );
}

export default Task;