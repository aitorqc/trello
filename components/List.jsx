import React from 'react'

export default function List({ children, id, name, handleDrop, bg }) {

  const handleDragOver = (event) => {
    event.preventDefault();
  }

  return (
    <div onDragOver={(evt) => handleDragOver(evt)} onDrop={(evt) => handleDrop(evt)} className='p-6 bg-slate-400 flex-1 gap-4 min-w-[300px]'>
      <h2 className={`p-5 mb-5 text-2x text-gray-900 font-bold uppercase ${bg}`}>{name}</h2>
      <div className='flex flex-col gap-3'>
        {children}
      </div>
      <div id={id} className='w-full h-[200px] m-auto flex items-center justify-center bg-red-100/50 rounded-xl mt-4 font-semibold text-xl'>
        Drop Here
      </div>
    </div>
  )
}
