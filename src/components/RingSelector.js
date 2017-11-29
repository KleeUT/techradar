import React from "react";
import ComboBox from "./ComboBox";

const standardOptions = ["Adopt", "Trial", "Assess", "Hold"];
export default props => {
  var { selectionOptions, valid, ...other } = props;
  selectionOptions = standardOptions;

  const validate = (text) => validateText(text);
  return (
    <ComboBox {...other} valid={validate} selectionOptions={selectionOptions} />
  );
};

export const validateText = text => {
  console.log(`validating ${text} in RingSelector`);
  return standardOptions.includes(text);
};
