import React, { useState } from 'react'
import styled from 'styled-components'


function Modal({ setModalFir, setModalSec }) {

    const firstModalOpen = () => {
        setModalFir(true)
    }

    const secondModalOpen = () => {
        setModalSec(true)
    }

    return (
        <>
            <Background>
                <h2>Modal</h2>
                <>
                    <BtnModal onClick={firstModalOpen}>open modal</BtnModal>
                    <BtnModal onClick={secondModalOpen} overlay="close">open modal</BtnModal>
                </>
            </Background>
        </>
    )
}

export default Modal



const Background = styled.div`
  padding:20px;
`

const BtnModal = styled.button`
    width: ${props => props.overlay === 'close' ? 130 : 100}px;
    height: ${props => props.overlay === 'close' ? 50 : 40}px;
    margin-right: 10px;
    border: ${props => props.overlay === 'close' ? '2px solid LightSalmon' : 'none'};
    border-radius: 10px;
    background-color: ${props => props.overlay === 'close' ? 'white' : 'Aquamarine'};
    color: ${props => props.overlay === 'close' ? 'FireBrick' : 'Darkblue'};
    cursor: pointer;
`