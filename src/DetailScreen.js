import React, { useContext, useEffect, useState } from 'react'
import UserContext from './context/UserContext'
import './App.css'



const DetailScreen = () => {

    const { value, setValue } = useContext(UserContext);

    const [input, setInput] = useState('')
    const [items, setItems] = useState()


    const [org, setOrg] = useState('')
    const [reposList, setReposList] = useState()

    function formSubmit(e) {
        e.preventDefault();

        setValue(input)

        fetch(`https://api.github.com/users/${input}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })

        fetch(`https://api.github.com/users/${input}/repos`)
            .then(res => res.json())
            .then(data => {
                setReposList(data)
            })
    }


    return (
        <div>
            <nav className='navigation'>
                <h1>{value}</h1>
                <h1>Github Search App💁‍♂️</h1>

                <form onSubmit={formSubmit}>
                    <input type="text" placeholder='Search Username🔎' onChange={e => setInput(e.target.value)} value={input} />
                    <input type="button" value="search" />
                </form>
            </nav>

            <p>Value: {value}</p>

            <div className="user-card">
                {
                    items && (
                        <div>
                            <p>Name: {items.name}</p>
                            <ul>
                                {
                                    reposList && reposList.map((item, i) => (
                                        <li key={i}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DetailScreen;