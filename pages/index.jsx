import React from 'react'

import Header from '../components/Header'
import Board from '../components/Board'

export default function index() {
  return (
      <div className='max-w-[1200px] m-auto'>
        <Header />
        <Board />
      </div>
  )
}
