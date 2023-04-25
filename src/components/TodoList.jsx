import { useState } from "react";
import format from "date-fns/format";
import Task from "./Task";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleTaskInput = e => setTaskInput(e.target.value);
    
    const removeTask = index => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const addTask = e => {
        e.preventDefault();
        setTasks(tasks => [...tasks, taskInput])
        setTaskInput('');
    };

    return (
        <div className="w-2/5 flex flex-col mx-auto mt-40 mb-60 border-slate-600 border-2">
            <div className="h-10 bg-slate-600 flex items-center justify-center">
                <p className="text-white"> {`My Todo List... ${format(new Date(), 'Pp')}`} </p>
            </div>

            <div className="h-30 py-3 px-3">
                <ul>
                    {tasks.map((task, index) => (
                        <Task key={index} task={task} onClick={() => removeTask(index)} />
                    ))}
                </ul>

                <form onSubmit={addTask}>
                    <input type="text"
                        className="p-2 mr-2 w-11/12 border-2 border-slate-600"
                        value={taskInput}
                        onChange={handleTaskInput}
                    />
 
                    <button className="text-xl bg-green-600 p-2 rounded-full text-white">
                        +
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TodoList;