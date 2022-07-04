import React from 'react'
import {useNavigate} from 'react-router-dom'

const Second = () => {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
  return (
    <div>This is the second Page <br />
    <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default Second