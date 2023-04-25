const Task = ({ task, onClick }) => {
    return (
        <li className="py-1 cursor-pointer" onClick={onClick}>
            { task }
        </li>
    )
};

export default Task;