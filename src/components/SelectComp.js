import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

function SelectComp() {
    
    const selectOne = [
        { value: 'react', label: '리액트'},
        { value: 'java', label: '자바'},
        { value: 'spring', label: '스프링'},
        { value: 'reactNative', label: '리액트네이티브'},
    ]

    const [select, setSelect] = useState(selectOne[0])

    return (
        <Background>
            <BgBox>
                <h2>Select</h2>
                <SelectBoxOne options={selectOne}
                onChange={setSelect}
                defaultValue={selectOne[0]} />
            </BgBox>
        </Background>
    )
}

export default SelectComp

const Background = styled.div`
  padding: 20px;

`

const BgBox = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: 150px;
      border: 2px solid Gainsboro;
`

const SelectBoxOne = styled(Select)`
    width: 300px;
    float: left;
`