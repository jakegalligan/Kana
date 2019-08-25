import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Container, Row, Col, Doo} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import HeaderBar from '../shared/HeaderBar'



const LoginPage = () => {
    const classes = useStyles();
    //set state for the current component
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [errortext, setErrortext] = useState(false);


    const handleLogIn = (e) => {
        e.preventDefault();
        //if the username and password are correct set the redirect value to true
        if (username =='admin' && password=='password') {
            setRedirect(true);
        } else {
            setErrortext(true)
        }
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePassordChange = (e) => {
        setPassword(e.target.value);
    }

    const renderErrorText = () => {
        return (
            <Typography className={classes.errorText}>
                Incorrect Username or password
            </Typography>
        )
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
        <HeaderBar  />
        <Container className={classes.container}>
            <br />
            <Typography className={classes.loginHeader}> Login</Typography>
            <br />
            <Container className={classes.form}>
            <Row>
                <Col md={{span:6, offset: 3}}>
                <Input className={classes.input} placeholder='Username' onChange={handleUsernameChange}></Input>
                </Col>
            </Row>
            <Row>
                <Col md={{span:6, offset: 3}}>
                <Input className={classes.input} type='password'  placeholder='Password' onChange={handlePassordChange}></Input>
                {errortext? renderErrorText(): ''}
                </Col>
            </Row>
            <Row>
            </Row>
                 <Button className={classes.button} onClick={handleLogIn}>Sign in</Button>
            {redirect? renderRedirect(): ''}
            </Container>
        </Container>
        </div>
    )
  };

  export default LoginPage;

  const useStyles = makeStyles({
      errorText: {
          color: 'red'
      },
      input: {
          margin: '40px'
      },
      form: {
        //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          height: '60vh',
        //   width: '50vw',
          width: '90%',
        //   borderWidth: '20px',
          borderStyle: 'solid',
          borderColor: 'white',
      },
      container: {
          height: '100vh',
          width: '100vw',
          textAlign: 'center',
          alignItems: 'center',
        //   borderStyle: 'solid',
        //   borderColor: 'purple',  
        //   borderWidth: '15px', 
            maxWidth: '100vw',      
          background: 'url(https://www.bevspot.com/hubfs/bigstock-Classic-bar-counter-with-bottl-44764840-1396x900.jpg)',
    },
      button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: '10px',
        width: '100px'
      },
      loginHeader: {
        color: 'white',
        fontFamily: '\'Roboto\', sans-serif',
        fontSize: '70px',
      }
  });