import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

function SecondModal({ modalSec, setModalSec }) {

    const el = useRef()

    const secondModalClose = () => {
        setModalSec(false)
    }


    return (
        <SecondModalBg isOpen={modalSec} onClick={secondModalClose}>
            <SecondModalBox>
                <p>닫기버튼 1개가 있고, 외부영역을 누르면 모달이 닫혀요.</p>
                <SecondModalBtn onClick={secondModalClose}>X</SecondModalBtn>
            </SecondModalBox>
        </SecondModalBg>
    )
}

export default SecondModal

const SecondModalBg = styled.div`
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      display: ${props => props.isOpen ? "block" : "none"};
`

const SecondModalBox = styled.div`
      margin: auto;
      margin-top: 15%;
      box-sizing: border-box;
      border-radius: 10px;
      width: 300px;
      height: 200px;
      background-color: white;
      text-align: center;
      padding: 10px;
`

const SecondModalBtn = styled.button`

`