import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CopyToClipboard from 'react-copy-to-clipboard'
import { nanoid } from 'nanoid'

const LinkResult = ({ inputValue }) => {
  const [inputArray, setInputArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      setInputArray(
        [...inputArray, 
          { full_link: inputValue, shrt_link: res.data.result.full_short_link, id: nanoid(), copied: false }])

    } catch(err) {
      setError(err)

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(inputValue.length){
      fetchData();
    }
  }, [inputValue])

  if(loading) {
    return <p>Loading...</p>
  }
  if(error){
    return <p>Whoops, something went wrong, try again.</p>
  }

  const handleCopy = (e) => {
    setInputArray(inputArray.map(item => {
      if(item.id === e.target.id){
        return {...item, copied: true}
      } else {
        return {...item, copied: false}
      }
    }))
  }
  
  return (
    <>
      {inputArray.length >= 1 && (
        inputArray.map((item, index) => (
          <div className='link-result' key={index} >
            <p className='link-result-long truncate'>{item.full_link}</p>
            <p className='link-result-short'>{item.shrt_link}</p>
            <CopyToClipboard
              text={item.shrt_link}
            >
              <button id={item.id} onClick={e => handleCopy(e)} className={`cyan ${item.copied ? 'active' : ''}`}>{item.copied ? 'Copied!' : 'Copy'}</button>
            </CopyToClipboard>
          </div>
        ))
      )}
    </>
  )
}

export default LinkResult