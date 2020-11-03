import React, { useState, useReducer } from 'react'

import styled from 'styled-components'

/********************* imported reducer function *************************/
import { initialState, reducer } from '../reducers/reducerFunction'
import TodoForm from './TodoForm'


const TodoContainer = styled.div`
    .undone h4 {
    }

    .done h4 {
        text-decoration: line-through;
    }
`

const Todo = () => {
    const [{list, status}, dispatch] = useReducer(reducer, initialState)


    console.log(list)
    const [newToDo, setNewToDo] = useState('')
    console.log(list)
    
    return (
          <TodoContainer>
              <TodoForm 
                dispatch = {dispatch}
                newToDo = {newToDo}
                setNewToDo = {setNewToDo}/>
              <h3>Upcoming todos:</h3>
              {console.log(list)}
              {
                  list.map(todo => 
                        <div onClick={() => {dispatch({type:'TOGGLE_OFF'})}} className={status}>
                            <h4>{todo.item}</h4>
                        </div>)
              }
          </TodoContainer>  
    )
}



export default Todo;


