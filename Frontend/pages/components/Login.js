import React, { useState } from 'react';
import axios from 'axios';


const URL = 'http://localhost:5000';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(`${URL}/login`, {
      username: username,
      password: password,
    })
      .then((res) => {
        console.log(res + 'Login Success');
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' onChange={e => setUsername(e.target.value)} />
        <input type='password' name='password' onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default Login;