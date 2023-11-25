import React, { useState } from 'react'
import Todo from './Todo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [item , setItem] = useState([])

  const addItemHandler = (data) => {
    if(data.length >= 2){
      setItem(
        [
          ...item,
          data
        ]
      )
      toast.success("Data Added SuccessFully")
    }
    else{
      toast.error("Please Enter Data")
    }
  }

  const deleteHandler = (event) => {
    const newItem = item.filter(
      (d,i) => {
        if(i == event ) {
          return false
        }else{
          return true
        }
      }
    )
    setItem(newItem)
    toast.error("Data Deleted")
    
  }

  const deleteAll = () => {
    if(item.length >= 1){
      setItem([])
    toast.error("All Data Deleted")
    }else{
      toast.info("Data Not Found")
    }
  }
  return (
    <div>
      <Todo item={item} addItemHandler={addItemHandler} deleteHandler={deleteHandler} deleteAll={deleteAll}/>
      <ToastContainer />
    </div>
  )
}

export default App