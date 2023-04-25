import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faBell } from "@fortawesome/free-solid-svg-icons";

function Button() {
  return (
    <Background>
      <h2>Button</h2>
      <BtnBox>
        <LargeBtn color="Aquamarine">
          Large Primary Button <FontAwesomeIcon icon={faLocationArrow} />
        </LargeBtn>
        <Btn color="Aquamarine" size="medium">Medium</Btn>
        <Btn color="Aquamarine">Small</Btn>
      </BtnBox>
      <BtnBox>
        <LargeBtn color="LightSalmon">
          Large Negative Button <FontAwesomeIcon icon={faBell} />
        </LargeBtn>
        <Btn color="LightSalmon" size="medium">Medium</Btn>
        <Btn color="LightSalmon">Small</Btn>
      </BtnBox>
    </Background>
  )
}

export default Button

const Background = styled.div`
  padding:20px;
`

const LargeBtn = styled.button`
  width: 200px;
  height: 45px;
  background-color: white;
  border: 2px solid ${props => props.color};
  border-radius: 10px;
  color: ${props => props.color === 'Aquamarine' ? 'DarkBlue' : 'FireBrick'};
  cursor: pointer;
`

const Btn = styled.button`
  margin-left: 10px;
  width: ${props => props.size === 'medium' ? 130 : 100}px;
  height: ${props => props.size === 'medium' ? 40 : 30}px;
  background-color: ${props => props.color};
  border: none;
  border-radius: 10px;
  color: ${props => props.color === 'Aquamarine' ? 'DarkBlue' : 'FireBrick'};
  cursor: pointer;
`

const BtnBox = styled.div`
  margin-top: 10px;
`