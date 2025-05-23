import React, { useState } from 'react';
import "./Loginstyle.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logincontent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:3000/login', {
      email,
      password,
    });

    if (res.data === 'exist') {
      navigate('/home', { state: { id: email } });
    } else if (res.data === 'notexist') {
      alert('User has not signed up');
    } else if (res.data === 'wrongpassword') {
      alert('Incorrect password. Please try again.');
    } else {
      alert('Unexpected response from server');
    }
  } catch (e) {
    alert('An error occurred');
    console.log(e);
  }
}

  return (
    <div className='login'>
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <input type='submit' value='Login' />
      </form>
      <p>OR</p>
      <Link to='/signup'>SignUp Page</Link>
    </div>
  </div>
  
  );
}
