import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const TodoList = ({ todos, handleRemoveTodo, handleEditTodo }) => {


    return (
        <div className='card'>
            <div className='card-body'>
                {todos?.length > 0 ? (
                    <>
                        {todos.map(item => (
                            <div className='row mb-1'>
                                <div className='col-8'>
                                    {item.title}
                                </div>
                                <div className='col-1'>
                                    <Button onClick={() => handleEditTodo(item)}>edit</Button>
                                </div>
                                <div className='col-2'>
                                    <Button className="ms-2" onClick={() => handleRemoveTodo(item.id)}>x</Button>
                                </div>
                            </div>
                        ))}
                    </>
                ) : 'No todo to display'}
            </div>
        </div>
    )
}

export default TodoList