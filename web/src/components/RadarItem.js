import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Button from './button/Button';

const Component = ({ name, ring, section, notes, edit }) => {
  const TextDisplay = styled.td``;
  return (
    <tr>
      <TextDisplay>{name}</TextDisplay>
      <TextDisplay>{section}</TextDisplay>
      <TextDisplay>{ring}</TextDisplay>
      <TextDisplay>{notes}</TextDisplay>
      <TextDisplay><Button onClick={edit}>...</Button></TextDisplay>
    </tr>
  );
};

Component.propTypes = {
  name: propTypes.string,
  ring: propTypes.string,
  section: propTypes.string,
  notes: propTypes.string,
  edit: propTypes.func
};

export default Component;
