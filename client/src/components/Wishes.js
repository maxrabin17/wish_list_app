import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import WishCard from './WishCard'

const Wishes = ({ user, wishes, groups, setWishes }) => {

    const history = useHistory()
    const [form, setForm] = useState('')
    const [search, setSearch] = useState([])
    const handleClick = () => {
        history.push('/wishes/new')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`/wishes?s=${form.search}`)
            .then(res => res.json())
            .then(data => setSearch(data))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="form">
                <h1>
                    {user ? `Welcome to ${user.username}'s Wishes` : "Log in to view your wishes!"}
                    <br />
                    {/* <form onSubmit={ handleSubmit }>
                        <input onChange={ handleChange } name = "search" type="text"></input>
                        <button>search</button>
                    </form> */}
                    <Button variant="outline-success" type="click" onClick={handleClick}>
                        Create a Wish!
                    </Button>
                </h1>
            </div>
            <div className="wishcard">
                {search.length === 0 ? wishes.map(wish => <WishCard key={wish.id} groups={groups} wish={wish} wishes={wishes} setWishes={ setWishes }/>) : search.map(wish => <WishCard key={wish.id} groups={groups} wish={wish} wishes={wishes} setWishes={ setWishes }/>) }
            </div>
        </>
    )
}

export default Wishes