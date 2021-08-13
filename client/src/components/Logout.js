import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = ({ setUser }) => {
    
    const history = useHistory()
    useEffect(() => {
        let config = {
            method: 'DELETE'
        }
        fetch('/logout', config)
            .then(res => res.json())
            .then(data => handleLogout())
            // handleLogout()
    })

    const handleLogout = () => {
        // debugger;
        setUser(null)
        // history.push('/')
    }
    return (
        <div>
            Hellooooooo
        </div>
    )
}

export default Logout
