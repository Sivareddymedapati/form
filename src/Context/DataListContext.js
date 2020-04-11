import React, { createContext, useState} from 'react'
import uuid from 'uuid'

export const DataListContext = createContext()

const DataListContextProvider = props => {
  const initialState = [
    {title:"abc", Email:"abc@tc.com", Pnumber:"9999999999", id:uuid()},
    {title:"xyz", Email:"xyz@tc.com", Pnumber:"8888888888", id:uuid()},
    {title:"qwe", Email:"qwe@tc.com", Pnumber:"7777777777", id:uuid()}
]

  const [Data, setData] = useState(initialState)

  const [editItem, setEditItem] = useState(null)

 
  const addTask = (title,Email,Pnumber) => {
    setData([...Data, { title, Email, Pnumber, id: uuid() }])
  }

 
  const removeTask = id => {
    setData(Data.filter(task => task.id !== id))
  }

   
  const findItem = id => {
    const item = Data.find(task => task.id === id)

    setEditItem(item)
  }

  
  const editTask = (title, Email, Pnumber, id) => {
    const newTasks = Data.map(task => (task.id === id ? { title, Email, Pnumber, id } : task))

    console.log(newTasks)

    setData(newTasks)
    setEditItem(null)
  }

  return (
    <DataListContext.Provider
      value={{
        Data,
        addTask,
        removeTask,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </DataListContext.Provider>
  )
}

export default DataListContextProvider
