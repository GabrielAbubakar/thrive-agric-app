import React, { useEffect, useState } from 'react'
import './App.css'



const App = () => {

    const [input, setInput] = useState('')
    const [items, setItems] = useState()


    const [org, setOrg] = useState('')
    const [reposList, setReposList] = useState()


    // const setItems = ({ name, login, followers, following, public_repos, avatar_url, organizations_url, location, repos_url }) => {
    //     setName(name)
    //     setLogin(login)
    //     setFollowers(followers)
    //     setFollowing(following)
    //     setRepos(public_repos)
    //     setAvatar(avatar_url)
    //     setLocation(location)
    //     setOrg(organizations_url)
    //     setReposList(repos_url)

    // }

    function formSubmit(e) {
        e.preventDefault();

        fetch(`https://api.github.com/users/${input}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
                // setName(data.name)
                // setLogin(data.login)
                // setLocation(data.location)
                // setRepos(data.public_repos)
                // setFollowers(data.followers)
                // setFollowing(data.following)
            })

        fetch(`https://api.github.com/users/${input}/repos`)
            .then(res => res.json())
            .then(data => {
                setReposList(data)
            })
    }

    // useEffect(() => {
    //     const itemData = localStorage.getItem("items")
    //     // const repoData = localStorage.getItem("repos")
    //     if (itemData) {
    //         // setItems(JSON.parse(itemData))
    //         // setReposList(JSON.parse(repoData))
    //     } else {
    //         return
    //     }


    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("items", JSON.stringify(items))
    //     localStorage.setItem("repos", JSON.stringify(reposList))
    // }, [items, reposList])

    return (
        <div>
            <nav className='navigation'>
                <h1>Github Search App💁‍♂️</h1>

                <form onSubmit={formSubmit}>
                    <input type="text" placeholder='Search Username🔎' onChange={e => setInput(e.target.value)} value={input} />
                </form>
            </nav>

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

export default App;