import React, { useState } from 'react'

const LinkInput = ({ setInputValue, inputValue }) => {
  const [value, setValue] = useState('')
  const [textError, setTextError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(value.trim().length === 0) {
      setTextError(true)
    } else {
      setTextError(false)
    }

    setInputValue(value)
    setValue('')
  }

  return (
    <form className='link-input' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Shorten a link here...' 
        className={`link-field ${textError ? 'active' : ''}`}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <span className={`error ${textError ? 'active' : ''}`}>Please add a link...</span>
      <button className='cyan'>Shorten It!</button>
    </form>
  )
}

export default LinkInput