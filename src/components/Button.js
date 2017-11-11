import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Button = styled.button`
        padding:0.75em;
        background-color: ${props => props.canClick ? '#2A2' : '#464' };
        color: ${props => props.canClick ? '#fff' : '#999' };
        border:0;
        margin:0.5em;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
        font-size:16px;
        min-width:5em;
        cursor: ${props => props.canClick ? 'pointer' : 'not-allowed'};
    `;
const Component = ({ children, onClick, canClick = true }) => {
  return (
    <Button onClick={onClick} canClick={canClick} disabled={ !canClick }>
      {children}
    </Button>
  );
};

Component.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
  canClick: propTypes.bool
};

export default Component;
