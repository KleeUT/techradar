import React from 'react';
import styled from 'styled-components';
const Input = styled.input`
display: block;
width: 100%;
padding: 0.5em;
font-size:18px;
margin: auto;
box-sizing: border-box;
border-color:${props => props.valid ? 'black' :'red'}`;
const Label = styled.label`
`;
const TextInput = ({ onChange, text, label, validate = () => true })  => {
  return (
    <div>
      <Label>{label}</Label>
      <Input type="text" onChange={onChange} value={text} valid={validate(text)} />
    </div>
  );
};
export default TextInput;