import React, {useState} from "react";

function ToDoForm (props) {
    const [input, setinput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setinput('')
    }

    const handleChange = e => {
      setinput(e.target.value);
    }

    return (
        <form className='ToDoForm'>
            <input type='text' placeholder='Add a To Do' value={input} name='text' className='toDo-input' onChange={handleChange} />
            <button className='toDo-button'>Add something to do</button>
        </form>
    )
}

export default ToDoForm;