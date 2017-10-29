import React from 'react'
import styled from 'styled-components';
export default ({value, onChange}) => {
    const Label = styled.label``;
    const Input = styled.input``;
    return (
        <div> 
        <Label>Section:</Label>
        <Input type='text' value={value} onChange={onChange}></Input>
         </div>
    )
}