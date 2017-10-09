import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Component =  ({children, onClick}) => {
    const Button = styled.button`
        padding:0.5em;
        background-color:#404;
        color:#fff;
        border:0;
        margin:0.5em;
    `

    return <Button onClick={onClick}>{children}</Button>
}

Component.propTypes = {
    children: propTypes.string,
    onClick: propTypes.func
}

export default Component;