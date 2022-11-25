import React from 'react'

export default function Header() {
  return (
    <div className='p-4 text-center flex justify-center items-center gap-2 bg-slate-800'>
        <img src="https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNzPQNRjqhR8fXE0pnu_bRyNmfc8xXr2VQUJTfJ9A" alt="logo" width={30} height={30}/>
        <h1 className='text-white text-2xl'>Trello</h1>
    </div>
  )
}
