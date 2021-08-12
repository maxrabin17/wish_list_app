import './App.css';
import Signup from './Signup'
import {useState} from 'react'

function App() {

  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])

  return (
    <div className="App">
      <Signup errors={ errors } setUser={setUser} setErrors={ setErrors }/>
    </div>
  );
}

export default App;
