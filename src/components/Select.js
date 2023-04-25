import React from 'react'
import styled from 'styled-components'

function Select() {
    return (
        <Background>
            <BgBox>
                <h2>Select</h2>
                <SelectStFir name="stack">
                    <option value="react">리액트</option>
                    <option value="java">자바</option>
                    <option value="spring">스프링</option>
                    <option value="reactNative">리액트네이티브</option>
                </SelectStFir>
                <SelectStSec name="stack-hidden">
                    <option value="react">리액트</option>
                    <option value="java">자바</option>
                    <option value="spring">스프링</option>
                    <option value="reactNative">리액트네이티브</option>
                </SelectStSec>
            </BgBox>
        </Background>
    )
}

export default Select

const Background = styled.div`
  padding: 20px;

`

const BgBox = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: 150px;
      border: 2px solid Gainsboro;
      overflow: hidden;
      position: relative;
`

const SelectStFir = styled.select`
    width: 200px;
    height: 40px;
    border: 1px solid red;
    border-radius: 10px;
    margin-right: 10px;
    position: absolute;
`

const SelectStSec = styled.select`
    width: 200px;
    height: 40px;
    border: 1px solid Gainsboro;
    border-radius: 10px;
    margin-right: 10px;
    position: absolute;
    left: 210px;
`