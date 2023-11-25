import React, { useRef } from 'react'

function Todo(props) {
    const items = props.item.map(
        (data, index) => {
            return (
                <li key={index} className=' relative pt-4 border bg-black'>
                    {data}
                    <button className=' absolute right-[150px] bg-red-950 px-6 bottom-2' onClick={() => props.deleteHandler(index)}>Delete</button>
                </li>
            )
        }
    )

    const inpRef = useRef()
    const addItem = () => {
        props.addItemHandler(inpRef.current.value)
    }

    return (
        <div>
            <div className=' bg-[#000622] h-[100vh] max-w-[full]'>
                <div className=' text-3xl text-white text-center pt-8'>Todo List</div>
                <div className=' flex justify-center mt-12 gap-5'>
                    <input type="search" placeholder='Type here.........' className=' p-3 rounded-md w-[500px] focus:outline-none' ref={inpRef} />
                    <button className=' text-white bg-[#2d9c18] px-6 hover:bg-[#2d9c84]' onClick={addItem}>Add</button>
                    <button className=' bg-red-900 text-white px-6' onClick={() => props.deleteAll()}>Delete All</button>
                </div>
                <ul className=' text-white text-center mt-6  '>
                    <li className=' mt-3 p-2 leading-10'>
                        {items}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Todo