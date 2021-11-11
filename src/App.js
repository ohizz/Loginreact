import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
function App() {

  const admin = {
    email: 'ohis@admin.com',
    password: '1234'
  }

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if (details.email == admin.email && details.password == admin.password){
      console.log('logged In');
      setUser({
        name: details.name,
        email: details.email
      });
  } else {
      setError('Wrond Input');
    }
  }

  const Logout = () => {
    setUser({
      name: '',
      email: ''
    });
    setError('');
  }

  return (
    <div className="App">
      {(user.email != '') ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}> Logout</button>
        </div>
      ) : (
          <LoginForm Login={Login} error={ error}/>
     )}
    </div>
  );
}

export default App;
