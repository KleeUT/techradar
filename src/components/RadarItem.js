import React from 'react';
import styled from 'styled-components';

export default ({name, ring, section, notes}) => {

    const TextDisplay = styled.div`
        display:inline;
        padding:1em;
    `
    return [
        (<TextDisplay>{name}</TextDisplay>), 
        (<TextDisplay>{ring}</TextDisplay>), 
        (<TextDisplay>{section}</TextDisplay>), 
        (<TextDisplay>{notes}</TextDisplay>)
    ]
}