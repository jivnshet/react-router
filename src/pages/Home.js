import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()

    const doSomethingAndRedirect=()=>{
        navigate('/second')
    }
  return (
    <div>
        I am the Home page <br />
        <Link to='/second'>Go to second Page</Link> <br />
        <button onClick={doSomethingAndRedirect}>Redirect to second page</button>
    </div>
  )
}

export default Home