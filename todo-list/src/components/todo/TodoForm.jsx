import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TodoForm = ({ editItem, handleAddTodo, handleEditTodo, handleSubmitEditForm }) => {
  const [form, setForm] = useState({
    id: null,
    title: ""
  });
  useEffect(() => {
    if (editItem !== null) {
      setForm({ id: editItem.id, title: editItem.title });
    }
  }, [editItem])
  const handleSubmitForm = () => {
    if (form.id !== null) {
      handleSubmitEditForm(form);
    } else {
      handleAddTodo(form);
    }
    setForm(prev => ({ title: "", id: null }));
  }

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
    //console.log(form)
  }
  return (
    <div className='card'>
            <div className='card-body'>
      {editItem !== null ?
        <div className='row'>
          <div className='col-12'>
            <input className='form-control' placeholder='Title' id="title" type="text" value={form.title} onChange={(e) => handleFormChange(e)} />
          </div>
          <div className='col-12 mt-1'>
            <button className='btn btn-primary' onClick={() => handleSubmitForm(form)}>Save</button>
          </div>
        </div>
        :
        <div className='row'>
          <div className='col-12'>
            <input className='form-control' placeholder='Title' id="title" type="text" value={form.title} onChange={(e) => handleFormChange(e)} />
          </div>
          <div className='col-12 mt-1'>
            <button className='btn btn-primary' onClick={() => handleSubmitForm(form)}>Add</button>
          </div>
        </div>
      }

    </div>
    </div>
  )
}

export default TodoForm