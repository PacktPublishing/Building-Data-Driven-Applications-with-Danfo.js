import React from 'react'

export default function Search({ inputRef, handleKeyEvent, handleSubmit }) {
  return (
    <div className='border-2 flex justify-between p-2 rounded-md  md:p-4'>
      <input id='searchInput' type='text' placeholder='Search twitter user' className='focus:outline-none' ref={inputRef} onKeyPress={handleKeyEvent} />
      <button className='focus:outline-none' onClick={() => { handleSubmit() }}><img src="/search.svg" /></button>
    </div>
  )
}
