import React, { useState } from 'react'
import styled from 'styled-components'

function Input() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const inputName = (e) => {
        setName(e.target.value)
    }

    const addComma = (e) => {
        let returnString = e?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return returnString
    }

    const inputPrice = (e) => {
        const { value } = e.target
        let str = value.replaceAll(',', '')
        setPrice(str)
        const onlyNumber = value.replace(/[^0-9]/g, '')
        setPrice(onlyNumber)
    }

    const sendBtn = () => {
        if (name === '' || price === '') {
            alert('이름과 가격을 입력해주세요')
        } else {
            alert(`'name: ${name}'은 'price: ${price}원'입니다`)
        }
    }
    return (
        <Background>
            <h2>Input</h2>
            <>
                <InputBox>이름
                    <InputText type="text" onChange={inputName} />
                </InputBox>
                <InputBox>가격
                    <InputText type="text"
                        onChange={(e) => inputPrice(e)}
                        value={addComma(price)} />
                </InputBox>
                <Btn onClick={sendBtn}>저장</Btn>
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