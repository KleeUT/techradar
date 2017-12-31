import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 18px;
  margin: auto;
  box-sizing: border-box;
  border-color: ${props => (props.valid ? "black" : "red")};
`;

const Label = styled.label`
  visibility: ${props => (props.shouldDisplay ? "visible" : "hidden")};
`;

const TextInput = ({ onChange, text, label, validate = () => true }) => {
  let valid = validate(text);

  return (
    <div>
      <Label shouldDisplay={!!text}>{label}</Label>
      <Input
        type="text"
        onChange={onChange}
        value={text}
        valid={valid}
        placeholder={label}
      />
    </div>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.func
};

export default TextInput;
