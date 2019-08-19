import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalBody from 'react-bootstrap/ModalBody'
import styled from "styled-components";




const OrderModal = () => {
    return (
        <div>
            <StyledModalDialog>
                <StyledModalBody> 
                <p>Whatup</p>
                
                </StyledModalBody>
            </StyledModalDialog>
        </div>
    )
}

export default OrderModal;


const StyledModalBody = styled(ModalBody)`
    height: 80vh;
    zindex: 10;
`
const StyledModalDialog = styled(ModalDialog)`
    zindex: 10
    height: 80vh;
`