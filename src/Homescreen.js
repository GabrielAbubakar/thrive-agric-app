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
            }}>
                <h1>Github Search App</h1>
                <input type="text" placeholder='Input your search' onChange={e => setInput(e.target.value)} value={input} />
                <input type="submit" value="submit" />
            </form>

            <p>
                {value}
            </p>
        </div>
    )
}

export default Homescreen