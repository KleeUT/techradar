import React from 'react';
import styled from 'styled-components'
export const PrimaryHeading = ({children}) =>{
    const Heading = styled.h1`
        text-align:center;
    `
    return <Heading>{children}</Heading>
}

export const SecondaryHeading = ({children}) =>{
    const Heading = styled.h1`
        text-align:center;
    `
    return <Heading>{children}</Heading>
}