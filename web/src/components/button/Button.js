import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { ActiveDutyGreen, NonCombatantGreen } from '../../util/Colors'
const Button = styled.button`
        padding:0.75rem;
        background-color: ${props => props.canClick ? ActiveDutyGreen : NonCombatantGreen };
        color: ${props => props.canClick ? '#fff' : '#999' };
        border:0;
        margin:0.5rem;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
        font-size:16px;
        min-width:5rem;
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
