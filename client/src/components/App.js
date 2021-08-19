import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import NavBar from './Navbar'
import Home from './Home'
import Logout from './Logout'
import Wishes from './Wishes'
import CreateWish from './CreateWish'
import CreateGroup from './CreateGroup'

const App = () => {

  const history = useHistory()
  const [user, setUser] = useState(null)
  const [wishes, setWishes] = useState([])
  const [groups, setGroups] = useState([])
  const [errors, setErrors] = useState([])
  // const [currentGroup, setCurrentGroup] = useState(null)

  const stateInit = () => {
    fetchUserAndWishes()
    fetchGroups()
  }
  
  const fetchGroups = () => {
    fetch('/groups')
    .then(res => res.json())
    .then(data => setGroups(data.groups))
  }
  
  const fetchUserAndWishes = () => {
    fetch(`/me`)
    .then(res => res.json())
    .then(data => setUserAndWishes(data))
  }

  const setUserAndWishes = (data) => {
    setUser(data.user)
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
        data.errors ? setErrors(data.errors) : setWishes([...wishes, data.wish])
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
