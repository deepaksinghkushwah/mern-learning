import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Row, Col } from 'react-bootstrap'
import { useEffect } from 'react';
import { useState } from 'react'
import {v4 as uuidv4} from "uuid";
const Todo = () => {
    const items = [
        { id:uuidv4(), title: 'Item 1' },
        { id: uuidv4(), title: 'Item 2' }
    ];

    const [todos, setTodo] = useState([]);
    const [editItem, setEditItem] = useState(null);
    useEffect(() => {        
        setTodo(items);
    },[]);
    const handleRemoveTodo = (id) => {
        /*const itemToDelete = todos.findIndex(element => {
            return element.id === id;
        });
        const newItems = todos.splice(itemToDelete, 1);*/

        const newItems = todos.filter(item => item.id !== id);
        setTodo([...newItems]);
        //console.log(todos);
    }

    const handleAddTodo = (form) => {        
        setTodo([...todos, {id: uuidv4(), title:form.title}]);        
    }

    const handleEditTodo = (item) => {
        setEditItem(item);
    }

    const handleSubmitEditForm = (form) => {
        const indexItemToUpdate = todos.findIndex(item =>  item.id == form.id);
        //console.log(indexItemToUpdate);
        const newArr = todos.map(item => {
            if(item.id == form.id){
                item.title = form.title;
            }
            return item;
        });
        setTodo([...newArr]);
        setEditItem(null);
    }
    return (
        <div className=''>
            <Row>
                <Col xs={4}>
                    <TodoForm editItem={editItem}
                    handleAddTodo={handleAddTodo}
                    handleEditTodo={handleEditTodo}
                    handleSubmitEditForm={handleSubmitEditForm}
                    />
                </Col>
                <Col>
                    <TodoList
                        todos={todos}                        
                        handleRemoveTodo={handleRemoveTodo}
                        handleEditTodo={handleEditTodo}
                         />
                </Col>
            </Row>


        </div>
    )
}

export default Todo