import { useState } from 'react'
import ToDo from './ToDo';
import ToDoList from './ToDoList'

function BaiTap2() {
  const [list, setList] = useState(["Eat breakfast", "Get up"])

  const addItem = (item) => {
    if(item!=null || item!="")
      setList(prevList => [item, ...prevList]);  // Cập nhật mảng mới
  }

  return (
    <>
      <p>To do app vip pro</p>
      <ToDo addItem={addItem}></ToDo>
      <ToDoList list={list}></ToDoList>
    </>
  )
}

export default BaiTap2
