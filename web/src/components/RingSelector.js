import React from "react";
import ComboBox from "./ComboBox";
import { sortedRings } from "../util/RingConstants";
const standardOptions = ["Adopt", "Trial", "Assess", "Hold"];
export default props => {
  let { selectionOptions, valid, ...other } = props;
  selectionOptions = sortedRings().map(x => x.name);

  const validate = text => validateText(text);
  return (
    <ComboBox {...other} valid={validate} selectionOptions={selectionOptions} />
  );
};

export const validateText = text => {
  console.log(`validating ${text} in RingSelector`);
  return standardOptions.includes(text);
};
