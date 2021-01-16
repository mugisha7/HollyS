import React, { useState, useEffect}from 'react'
import { Button }from 'react-bootstrap'
const Login = () => {
    const [counter, setcounter] = useState(0);
    useEffect(() => {
       console.log('user effect is working')
    },[])
    console.log('rendering the page')
    return (
        <div >
            <center>
                <h1>Hey You can count on me here or de-ccount</h1>
                <h4>The current value :{counter}</h4>
                <Button type='submit' className='btn btn-primary' onClick={() => {
                    setcounter(counter  -1)
                }}>-</Button>
                <Button type='submit' className='btn btn-primary' onClick={() => {
                    setcounter(0)
                  }}>Reset</Button>
                <Button type='submit' className='btn btn-primary' onClick={() => {
                    setcounter(counter+1)
                }}>+</Button>
          </center>
        </div>
    )
}

export default Login
