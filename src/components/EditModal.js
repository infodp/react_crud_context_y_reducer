import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { AppContext, useAppContext } from '../context/appContext';

const EditModal = ( {show, onClose, rowData} ) => { 
 const {name, age} = rowData

 const {updateStudent} = useAppContext(AppContext)

 const [formData, setFormData] = useState({id: "", name: "", age: ""})

 const handleOnChange = (key, value) => {
  setFormData({
    ...formData,
    [key]:value
  })
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  updateStudent(formData)
  onClose()
 }

 useEffect( () => {
  setFormData(rowData)
 },[rowData])

 return (
    <>
    <form>
      <Modal show={show} onHide={onClose}>
        <Modal.Header className='bg-info' closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">                       
            <Form.Control          
            defaultValue={name}
            onChange={ (e) => handleOnChange('name', e.target.value) }                        
            type="text"
            />       
          </Form.Group>
          <Form.Group className="mb-3">                       
            <Form.Control           
            defaultValue={age}             
            onChange={ (e) => handleOnChange('age', e.target.value) }                        
            type="number"
            />       
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </form>  
    </>
  );
}
export default EditModal