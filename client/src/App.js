import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Signup from '../src/components/Signup'
import Login from '../src/components/Login'
import NavBar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Logout from '../src/components/Logout'
import Wishes from '../src/components/Wishes'
import CreateWish from '../src/components/CreateWish'
import CreateGroup from '../src/components/CreateGroup'

const App = () => {

  const history = useHistory()
  const [user, setUser] = useState(null)
  const [wishes, setWishes] = useState([])
  const [groups, setGroups] = useState([])
  const [errors, setErrors] = useState([])

  const stateInit = () => {
    fetchUserAndWishes()
    fetchGroups()
  }
  
  const fetchGroups = () => {
    fetch('/api/groups')
    .then(res => res.json())
    .then(data => setGroups(data))
  }
  
  const fetchUserAndWishes = () => {
    fetch(`/api/me`)
    .then(res => res.json())
    .then(data => setUserAndWishes(data))
  }

  const setUserAndWishes = (data) => {
    setUser(data)
    setWishes(data.wishes)
  }

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setUserAndWishes(data)// && setWishes(data.wishes)
    if (!data.errors) {
      history.push('/wishes') 
      setErrors([])
    }
  }

  const handleCreateGroup = (data) => {
        data.errors ? setErrors(data.errors) : setGroups([...groups, data.group])
        if (!data.errors) {
          history.push('/wishes') 
            setErrors([])
        }
  }

  const handleCreateWish = (data) => {
        data.errors ? setErrors(data.errors) : setWishes([...wishes, data])
        if (!data.errors) {
          history.push('/wishes') 
            setErrors([])
        }
  }

  useEffect(stateInit, [])

  return (
    <div className="App">
      <NavBar user = { user }/>
      <h3 id="logged-in">
      {user ? `${user.username} is currently logged in.` : null}
      </h3>
      <Switch>
        <Route exact path = '/'>
          <Home user={ user }/>
        </Route>
        <Route exact path = '/signup'>
          <Signup errors={errors} handleUserLoginAndSignup={ handleUserLoginAndSignup }/>
        </Route>
        <Route exact path = '/login'>
          <Login errors={ errors } handleUserLoginAndSignup={ handleUserLoginAndSignup }/>
        </Route>
        <Route exact path = '/logout'>
          <Logout user={user} setUser={setUser} setWishes={ setWishes }/>
        </Route>
        <Route exact path = '/wishes'>
          <Wishes groups={groups} user={user} wishes={wishes} setWishes={ setWishes }/>
        </Route>
        <Route exact path = '/wishes/new'>
          <CreateWish handleCreateWish={ handleCreateWish } groups={ groups } user={user} errors={errors}/>
        </Route>
        <Route exact path='/group/new'>
          <CreateGroup handleCreateGroup={ handleCreateGroup }/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
