import React from 'react'
import styled from 'styled-components';

function FirstModal({ modalFir, setModalFir }) {

    const firstModalClose = () => {
        setModalFir(false)
    }

    return (
        <FirstModalBg isOpen={modalFir}>
            <FirstModalBox>
                <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
                <FirstModalBtn name='닫기' onClick={firstModalClose}>닫기</FirstModalBtn>
                <FirstModalBtn>확인</FirstModalBtn>
            </FirstModalBox>
        </FirstModalBg>
    )
}

const FirstModalBg = styled.div`
      z-index: 5000;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      position: fixed;
      display: ${props => props.isOpen ? "block" : "none"};
  `

const FirstModalBox = styled.div`
      margin: auto;
      margin-top: 15%;
      box-sizing: border-box;
      border-radius: 10px;
      width: 600px;
      height: 400px;
      background-color: white;
      text-align: center;
      padding: 100px;
  `

const FirstModalBtn = styled.button`
    width: 100px;
    height: 35px;
    margin-right: 10px;
    background-color: ${props => props.name === '닫기' ? 'LightSalmon' : 'Aquamarine'};
    color: ${props => props.name === '닫기' ? 'FireBrick' : 'DarkBlue'};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.name === '닫기' ? 'peru' : 'Lightseagreen'};
        transition: 0.5s;
    }
  `

export default FirstModal