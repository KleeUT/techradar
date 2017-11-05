import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
display: block;
width: 95%;
padding: 0.5em;
font-size:18px;
margin: auto;
box-sizing: border-box`;
const TextInput = ({ onChange, text, label }) => {
  const Label = styled.label`
  `;


  return (
    <div>
      <Label>{label}</Label>
      <Input type="text" onChange={onChange} value={text} />
    </div>
  );
};
export default TextInput;