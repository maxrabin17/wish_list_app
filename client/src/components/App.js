import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar, Nav, Container} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import NavBar from './Navbar'
import Home from './Home'
import Logout from './Logout'

const App = () => {

  const history = useHistory()
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setUser(data.user)
    if (!data.errors) {
      history.push('/')
      setErrors([])
    }
  }
  
  const checkSessionId = () => {
    fetch('/me')
    .then(res => res.json())
    .then(data => setUser(data.user))
  }
  
  useEffect(checkSessionId, [])

  return (
    <div className="App">
      <NavBar />
      { user ? `${user.username} is currently logged in.` : null }
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route exact path = '/signup'>
          <Signup errors={errors} handleUserLoginAndSignup={ handleUserLoginAndSignup }/>
        </Route>
        <Route exact path = '/login'>
          <Login errors={ errors } handleUserLoginAndSignup={ handleUserLoginAndSignup }/>
        </Route>
        <Route exact path = '/logout'>
          <Logout user={ user } setUser={ setUser }/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
