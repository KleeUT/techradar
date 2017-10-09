import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Component = ({ name, ring, section, notes }) => {
  const TextDisplay = styled.td``;
  return (
    <tr>
      <TextDisplay>{name}</TextDisplay>
      <TextDisplay>{section}</TextDisplay>
      <TextDisplay>{ring}</TextDisplay>
      <TextDisplay>{notes}</TextDisplay>
    </tr>
  );
};

Component.propTypes = {
  name: propTypes.string,
  ring: propTypes.string,
  section: propTypes.string,
  notes: propTypes.string
};

export default Component;
