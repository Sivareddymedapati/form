import React, { useState, useContext, useEffect } from 'react'
import { DataListContext} from '../Context/DataListContext'

const DataForm = () => {
  const { addTask, editTask, editItem } = useContext(DataListContext)
  const [title, setTitle] = useState('')
  const [Email, setEmail] = useState('')
  const [Pnumber, setPhoneNumber] = useState('')
  

  const validate = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    const phonenoFormat = /^\d{10}$/;
    if(!Email.match(mailformat)) {alert("Enter valid Email id"); }
      else {if(!Pnumber.match(phonenoFormat)) {alert("Enter valid Phone Number");}
               else {
                 return true
                 }
              }
     return false
   }

  const handleSubmit = e => {
    e.preventDefault()
    const valid = validate()
    console.log(valid)
    if (valid===true) {
      if (!editItem) {
      addTask(title,Email,Pnumber)
      setTitle('')
      setEmail('')
      setPhoneNumber('')
    } else {
      editTask(title, Email, Pnumber, editItem.id)
    }} else {console.log(valid)} } 
   
  
  const clearList = () => {
      setTitle('')
      setEmail('')
      setPhoneNumber('')
  }
  const nameHandleChange = e => {
    setTitle(e.target.value)
  }
  const emailHandleChange = e => {
    setEmail(e.target.value)
  }
  const pnumberHandleChange = e => {
    setPhoneNumber(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setEmail(editItem.Email)
      setPhoneNumber(editItem.Pnumber)
      console.log(editItem)
    } else {
      setTitle('')
      setEmail('')
      setPhoneNumber('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter Name..."
        value={title}
        onChange={nameHandleChange}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Enter Email ID..."
        value={Email}
        onChange={emailHandleChange}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Enter Phone number..."
        value={Pnumber}
        onChange={pnumberHandleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Data' : 'Submit Data'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default DataForm
