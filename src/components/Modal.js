import React, { useState } from 'react'
import styled from 'styled-components'
import FirstModal from '../modal/FirstModal'
import SecondModal from '../modal/SecondModal'
import Button from './Button'
import Input from './Input'
import Select from './Select'


function Modal() {
    const [modalFir, setModalFir] = useState(false)
    const firstModalOpen = () => {
        setModalFir(true)
    }

    const [modalSec, setModalSec] = useState(false)
    const secondModalOpen = () => {
        setModalSec(true)
    }

    return (
        <>
            <FirstModal modalFir={modalFir} setModalFir={setModalFir} />
            <SecondModal modalSec={modalSec} setModalSec={setModalSec} />
            <Button />
            <Input />
            <Background>
                <h2>Modal</h2>
                <>
                    <BtnModal onClick={firstModalOpen}>open modal</BtnModal>
                    <BtnModal onClick={secondModalOpen} overlay="close">open modal</BtnModal>
                </>
            </Background>
            <Select />
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