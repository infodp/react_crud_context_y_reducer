import React, { useState } from 'react'
import { AppContext, useAppContext } from '../context/appContext'

const Create = () => {
  const {createStudent} = useAppContext(AppContext)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createStudent({ id: Date.now(), name, age })
    setName('')
    setAge('')
  }

  return (    
    <form onSubmit={handleSubmit}>
        <div className="form-floating mt-3">
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text"
                className="form-control"
                autoFocus
                required 
                placeholder='Name'                                 
            />
            <label>Name</label>
        </div>

        <div className="form-floating">
            <input 
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                type="number"
                className="form-control"
                required
                placeholder='Name'
            />
            <label>Age</label>
        </div>

        <div className="d-grid mt-2">        
            <button
            type="submit"
            className="btn btn-outline-primary"
            >
            <i className="fa-solid fa-circle-plus fa-2x"></i>
            </button>
        </div>
    </form>
  )
}

export default Create