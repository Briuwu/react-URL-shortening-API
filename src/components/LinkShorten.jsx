import React, { useState } from 'react'

import LinkInput from './LinkInput'
import LinkResult from './LinkResult'

const LinkShorten = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className='link container'>
      <LinkInput setInputValue={setInputValue} inputValue={inputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  )
}

export default LinkShorten