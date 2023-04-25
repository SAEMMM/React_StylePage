import React, { useState } from 'react'
import FirstModal from '../modal/FirstModal'
import SecondModal from '../modal/SecondModal'
import styled from 'styled-components'


function Modal() {
    const [modalFir, setModalFir] = useState(false)
    const [ModalSec, setModalSec] = useState(false)

    const firstModalOpen = () => {
        setModalFir(true)
    }
    console.log('첫번째 모달', modalFir)

    const secondModalOpen = () => {
        setModalSec(true)
    }
    console.log('두번째 모달', ModalSec)

    return (
        <>
            {modalFir && <FirstModal open={modalFir} setModalFir={setModalFir} />}
            {ModalSec && <SecondModal open={ModalSec} setModalSec={setModalSec} />}
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
    &:hover {
        background-color: ${props => props.overlay === 'close' ? 'white' : 'Lightseagreen'};
        border: ${props => props.overlay === 'close' ? '2px solid Peru' : 'none'};
        transition: 0.5s;
    }
`