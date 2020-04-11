import React, { useContext } from 'react'
import { DataListContext } from '../Context/DataListContext'

const DataOutput = ({ task }) => {
  const { removeTask, findItem } = useContext(DataListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <span>{task.Email} </span>
      <span>{task.Pnumber}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  )
}

export default DataOutput
