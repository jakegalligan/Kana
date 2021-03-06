import React, {useState} from 'react';import {Redirect} from 'react-router-dom';import {Container, Row, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';import { makeStyles } from '@material-ui/styles';import Input from '@material-ui/core/Input';import Button from '@material-ui/core/Button';



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
        if (username ==='admin' && password === 'password') {
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
          height: '60vh',
          width: '90%',
          borderStyle: 'solid',
          borderColor: 'white',
      },
      container: {
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        alignItems: 'center', 
        maxWidth: '100vw',      
    },
      button: {
        background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
        margin: '10px',
        width: '100px',
        color: 'white'
      },
      loginHeader: {
        color: 'white',
        fontFamily: '\'Raleway\', sans-serif',
        fontSize: '70px',
      }
  });