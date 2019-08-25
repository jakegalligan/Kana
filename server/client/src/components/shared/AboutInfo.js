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
                        <Typography className={classes.mainTitle}>
                            How it works
                        </Typography>
                        <BodyContainer>
                        <Typography className={classes.title}>
                            1.Order
                        </Typography >
                        <Typography className={classes.body}>
                            body
                        </Typography>
                        <Typography className={classes.title}>
                            2. Review
                        </Typography >
                        <Typography className={classes.body}>
                            body
                        </Typography>
                        <Typography className={classes.title}>
                            3. Submit
                        </Typography>
                        <Typography className={classes.body}>
                            body
                        </Typography>
                        <Typography className={classes.title}>
                            4. Get Notified
                        </Typography>
                        <Typography className={classes.body}>
                            body
                        </Typography>
                        </BodyContainer>
        
            
                            <LocalDrink className={classes.icon}/>
                
            
                       
            </StyledContainer>
        </div>
    )
}

export default AboutInfo;


const useStyles = makeStyles({
    mainTitle: {
        color: 'White',
        fontSize: '30px',
    },
    body: {
        color: 'white'
    },
    title: {
    color: 'White',
    },
    icon: {
        color: 'white',
        fontSize: '30px'
    },
    describe: {
        textAlign: 'center',
        // marginLeft: '15%',
        // display: 'unset'
    }
})


  //create styling for container
  const StyledContainer = styled(Container)`
  background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
  text-align: center;
  `;

  const BodyContainer = styled (Container)`
  background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
  text-align: left;
  `