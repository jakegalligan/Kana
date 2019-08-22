import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

const LoginPage = () => {
    //set state for the current component
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [errortext, setErrortext] = useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        //if the username and password are correct set the redirect value to true
        if (username =='admin' && password=='jg1996') {
            setRedirect(true);
        }
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePassordChange = (e) => {
        setPassword(e.target.value);
    }

    const renderRedirect = () => {
        return (
            <div>
                <Redirect to = '/admin/orders'/>
            </div>
        )
    }


    return (
        <div>
            <input placeholder='Username' onChange={handleUsernameChange}></input>
            <input placeholder='Password' onChange={handlePassordChange}></input>
            <button onClick={handleLogIn}>Login</button>
            {redirect? renderRedirect(): ''}
        </div>
    )
  };

  export default LoginPage;