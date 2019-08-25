import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from "styled-components";
import { makeStyles } from '@material-ui/styles';
import LocalDrink from '@material-ui/icons/LocalDrink';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Typography from '@material-ui/core/Typography';



const AboutInfo = () => {
    const classes= useStyles();

    return (
        <div>
            <StyledContainer>
                <Row>
                    <Col>
                        <Typography>
                            How it works
                        </Typography>
                    </Col>
                </Row>
                <Row  className={classes.describe}>
                    <Col className={classes.describe}>
                        <Row>
                            <LocalDrink className={classes.icon}/>
                        </Row>
                        <Row>
                        <Typography>
                            How it works
                        </Typography>
                        </Row>
                    </Col>
                    <Col  className={classes.describe}>
                    <Row>
                            <PhoneIphone className={classes.icon}/>
                        </Row>
                        <Row>
                        <Typography>
                            How it works
                        </Typography>
                        </Row>
                    </Col>
                </Row>
            </StyledContainer>
        </div>
    )
}

export default AboutInfo;


const useStyles = makeStyles({
    appTitle: {
        color: 'White',
        fontSize: '30px'
    },
    icon: {
        color: 'white',
        fontSize: '30px'
    },
    describe: {
        textAlign: 'center',
        // marginLeft: '5%'
    }
})


  //create styling for container
  const StyledContainer = styled(Container)`
  background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
  text-align: center;
  `;