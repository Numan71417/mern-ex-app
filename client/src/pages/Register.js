import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const regValues ={
        username,
        email,
        password
    }
    const submitHandler = async (event)=>{
        event.preventDefault();
        try {
            await axios.post('/users/register', regValues)
            // toaster.success('Registration Successfull');
            alert('Registration Successfull');
            navigate('/');
        } catch (e) {
            // toaster.error('invalid username or password',e);
            alert(`error: ${e}`);
        }
        // console.log( {email,password,username })

    }

  return (
   <div className=' register-page'>
<form className='stylish-card' onSubmit={submitHandler}>
    <h1 className='text-white'>Sign Up</h1>

    <div class="mb-3">
        <label  class="form-label text-white">Username</label>
        <input type="text" class="form-control"  name='username' value={username} onChange={(event)=>{setUsername(event.target.value);}}/>
    </div>
    <div class="mb-3">
        <label class="form-label text-white">Email address</label>
        <input type="email" class="form-control"  name='email' value={email} onChange={(event)=>{
        setEmail(event.target.value);}}/>
    </div>

    <div class="mb-3">
        <label  class="form-label text-white">Password</label>
        <input type="password" class="form-control" name='password' value={password} onChange={(event)=>{setPassword(event.target.value);}} />
    </div>
  
  <button type="submit" class="btn btn-light">Submit</button>

  <div class="mt-3">
        <label for="login" class="form-label text-white mx-2">Already Registered?</label>
        <Link to='/login'>Login</Link>
    </div>

</form>
   </div>
  )
}

export default Register
