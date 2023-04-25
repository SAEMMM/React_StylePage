import React from 'react'
import styled from 'styled-components'

function Input() {
    return (
        <Background>
            <h2>Input</h2>
            <>
                <InputBox type="text">이름<InputText /></InputBox>
                <InputBox type="text">가격<InputText /></InputBox>
                <Btn>저장</Btn>
            </>
            <FloatNone />
        </Background>
    )
}

export default Input

const Background = styled.div`
  padding:20px;
`

const InputBox = styled.div`
    float: left;
    margin-right: 20px;
`

const InputText = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid Gainsboro;
`

const Btn = styled.button`
    width: 80px;
    height: 35px;
    border-radius: 10px;
    border: none;
    background-color: Aquamarine;
    color: DarkBlue;
    cursor: pointer;
`

const FloatNone = styled.div`
    clear: both;
`