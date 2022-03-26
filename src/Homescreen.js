import React, { useContext, useState } from 'react'
import UserContext from './context/UserContext'

const Homescreen = () => {

    const { value, setValue } = useContext(UserContext);
    const [input, setInput] = useState()

    return (
        <div className='home'>

            <form onSubmit={(e) => {
                e.preventDefault();
                setValue(input)
                console.log(value);
            }}>
                <h1>Github Search App</h1>
                <input type="text" placeholder='Input your search' onChange={e => setInput(e.target.value)} />
                <p>
                    {value}
                </p>
            </form>
        </div>
    )
}

export default Homescreen