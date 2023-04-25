import React from 'react'
import styled from 'styled-components'

function Select() {
    return (
        <Background>
            <BgBox>
                <h2>Select</h2>
                <SelectSt name="stack">
                    <option value="react">리액트</option>
                    <option value="java">자바</option>
                    <option value="spring">스프링</option>
                    <option value="reactNative">리액트네이티브</option>
                </SelectSt>
                <SelectSt name="stack-hidden">
                    <option value="react">리액트</option>
                    <option value="java">자바</option>
                    <option value="spring">스프링</option>
                    <option value="reactNative">리액트네이티브</option>
                </SelectSt>
            </BgBox>
        </Background>
    )
}

export default Select

const Background = styled.div`
  padding: 20px;

`

const BgBox = styled.div`
      width: 95%;
      border: 2px solid Gainsboro;
      padding-bottom: 40px;
`

const SelectSt = styled.select`
    width: 200px;
    height: 40px;
    border: 1px solid Gainsboro;
    border-radius: 10px;
    margin-right: 10px;
`