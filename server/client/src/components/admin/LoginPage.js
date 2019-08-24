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
        if (username =='admin' && password=='jg1996') {
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
        <Container className={classes.container}>
            {/* <HeaderBar className={classes.header} /> */}
            <br />
            <br />
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
                </Col>
            </Row>
            <Row>
                {errortext? renderErrorText(): ''}
            </Row>
                 <Button className={classes.button} onClick={handleLogIn}>Login</Button>
            {redirect? renderRedirect(): ''}
            </Container>
        </Container>
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
          backgroundColor: 'white',
          height: '50vh',
        //   width: ' 6vw',
          borderStyle: 'solid',
          borderColor: 'purple',
      },
      container: {
          height: '100vh',
          width: '65vw',
          textAlign: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          backgroundImage: 'url(https://media.istockphoto.com/photos/empty-wooden-bar-counter-picture-id624494724?k=6&m=624494724&s=612x612&w=0&h=_rBlLq5e6ZklWpz2gCDI06IUmms2I4LuntrbxFo5w3A=)'
      },
      button: {
          backgroundColor: 'purple',
          margin: '10px',
          width: '100px'
      }
  });