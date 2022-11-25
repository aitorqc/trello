import React, { useState } from 'react'

import { BiComment } from 'react-icons/bi'
import { SlPencil } from 'react-icons/sl'

export default function Card({ list, text, id, setDragged }) {
    const [info, setInfo] = useState(text);

    const handleDragStart = () => {
        setDragged({
            data: {
                id,
                text
            },
            list: list,
        })
    }

    return (
        <div draggable onDragStart={handleDragStart} className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4'>
            <p className='font-bold'>{id}</p>
            <div className='flex justify-between'>
                <p className='font-medium'>{text}</p>
                <SlPencil className='cursor-pointer' size={20} />
            </div>
            <div className='flex justify-between'>
                <img className='rounded-full' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" width={36} height={36} />
                <BiComment size={20} />
            </div>
        </div>
    )
}
