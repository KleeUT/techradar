import React from 'react';
import styled from 'styled-components';
export default ({children, onClick}) => {
    const Button = styled.button`
        padding:0.5em;
        background-color:#404;
        color:#fff;
        border:0;
        margin:0.5em;
    `

    return <Button onClick={onClick}>{children}</Button>
}