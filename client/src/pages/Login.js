import React from 'react'
import { useState  } from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { ToastContainer, toaster } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const logValues ={
        email,
        password
    }

    const submitHandler = async (event)=>{
        event.preventDefault();
        try {
            const {data} = await axios.post('/users/login', logValues)
            // toaster.success('Login Successfull');
            alert('Login Successfull');
            localStorage.setItem('user', JSON.stringify({...data,password:''}))
            navigate('/');
        } catch (e) {
            // toaster.error('error',e);
            alert('error',e);
        }
        // console.log( {email,password,username })

    }
    
    
    return (
   <div className=' register-page'>
<form className='stylish-card' onSubmit={submitHandler} >
    <h1 className='text-white'>Login</h1>

    <div class="mb-3">
        <label  class="form-label text-white">Email address</label>
        <input type="email" class="form-control"  name='email' value={email} onChange={(event)=>{
        setEmail(event.target.value);}} />
    </div>

    <div class="mb-3">
        <label class="form-label text-white">Password</label>
        <input type="password" class="form-control" name='password' value={password} onChange={(event)=>{setPassword(event.target.value)}} />
    </div>
  
  <button type="submit" class="btn btn-light">Submit</button>

  <div class="mt-3">
        <label class="form-label text-white mx-2">Not yet Registered?</label>
        <Link to='/register'>Register</Link>
    </div>

</form>
   </div>
)
}

export default Login;
