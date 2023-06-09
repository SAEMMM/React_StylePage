import React from 'react'
import styled from 'styled-components'
import Portal from '../Portal';

function SecondModal({ setModalSec }) {

    const secondModalClose = () => {
        setModalSec(false)
    }

    return (
        <Portal>
            <SecondModalBg onClick={secondModalClose}>
                <SecondModalBox onClick={(e) => e.stopPropagation()}>
                    <p>닫기버튼 1개가 있고, 외부영역을 누르면 모달이 닫혀요.</p>
                    <SecondModalBtn onClick={secondModalClose}>X</SecondModalBtn>
                </SecondModalBox>
            </SecondModalBg>
        </Portal>
    )
}

export default SecondModal

const SecondModalBg = styled.div`
      z-index: 5000;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      position: fixed;
      top: -0px;
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
    width: 30px;
    height: 30px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
`