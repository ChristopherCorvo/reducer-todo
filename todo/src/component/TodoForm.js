import React, { useState } from 'react'

const TodoForm = (props) => {

    const { dispatch, newToDo, setNewToDo } = props
    console.log(dispatch)

    function onSubmit(event) {
        event.preventDefault()
        console.log('testing submit')
    }
    
    const handleChanges = (e) => {
        setNewToDo(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>New Task:</label>
                <input
                    type = 'text'
                    name = 'NewTask'
                    value = {newToDo}
                    onChange= {handleChanges}
                />
                <button
                    onClick = {() => {
                        dispatch({type:'ADD_TODO', payload: newToDo})
                        setNewToDo('')
                    }}>
                    Submit</button>
            </form>

        </div>
    )

}

export default TodoForm;