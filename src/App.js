import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';


function App() {

  const [users, setUser] = useState([])

  const onNewUserCreated = (user) => {
    setUser([...users, user])
    console.log(users)
  }
  
  return (
    <div className="App">
      <Banner />
      <Form onUserCreated={user => onNewUserCreated(user)}/>
    </div>
  );
}

export default App;
