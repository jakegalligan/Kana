import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from "styled-components";


const AboutInfo = () => {
    
    return (
        <div>
            <StyledContainer>
                <Row>
                    <Col>
                        How it wokrs
                    </Col>
                </Row>
                <Row>
                    <Col>
                        decription info
                    </Col>
                </Row>
            </StyledContainer>
        </div>
    )
}

export default AboutInfo;

  //create styling for container
  const StyledContainer = styled(Container)`
    background-color: gray;
    text-align: center;
  `;