import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import * as FormActions from "./actions/AddItemFormActions";
import * as RadarActions from "./actions/Actions";
import Button from "./components/Button";
import ComboBox from "./components/ComboBox";
import TextInput from "./components/TextInput";
import RingSelector from "./components/RingSelector";

const TextBox = styled.textarea`
font-size:18px;
width:100%;
resize:none;
`;

const AddItem = ({
  onSubmit,
  onCancel,
  onNameChange,
  onRingChange,
  onSectionChange,
  onNotesChange,
  name,
  nameValid,
  ring,
  ringValid,
  section,
  sectionValid,
  notes,
  sectionOptions,
  existingNames
}) => {
  const handleSubmit = () => {
    onSubmit({ name, ring, section, notes });
  };
  return (
    <div style={{ width: "100%" }}>
      <h1>Add Item</h1>
      <TextInput
        onChange={onNameChange}
        text={name}
        label="Name: "
        valid={nameValid}
      />
      {/* <TextInput
        onChange={onRingChange}
        text={ring}
        label="Ring: "
        valid={() => !!ring}
      /> */}
      <RingSelector
        onChange={onRingChange}
        value={ring}
        label="Ring: "
      />
      <ComboBox
        onChange={onSectionChange}
        value={section}
        label="Section: "
        selectionOptions={sectionOptions}
        valid={sectionValid}
      />
      Notes
      <TextBox onChange={onNotesChange} value={notes} />
      <Button onClick={handleSubmit} canClick={nameValid}>Ok</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};

AddItem.propTypes = {
  onSubmit: propTypes.func,
  onCancel: propTypes.func,
  onNameChange: propTypes.func,
  onRingChange: propTypes.func,
  onSectionChange: propTypes.func,
  onNotesChange: propTypes.func,
  name: propTypes.string,
  nameValid: propTypes.bool,
  ring: propTypes.string,
  ringValid: propTypes.bool,
  section: propTypes.string,
  sectionValid: propTypes.func,
  notes: propTypes.string,
  sectionOptions: propTypes.arrayOf(propTypes.string),
  existingNames: propTypes.arrayOf(propTypes.string)
};

const matchDispachToProps = (dispach, ownProps) => {
  return {
    onNameChange: e => {
      dispach(FormActions.UpdateName(e.target.value));
    },
    onRingChange: e => {
      console.log(`Ring Changed to ${e}`)
      dispach(FormActions.UpdateRing(e));
    },
    onSectionChange: e => {
      dispach(FormActions.UpdateSection(e));
    },
    onNotesChange: e => {
      dispach(FormActions.UpdateNotes(e.target.value));
    },
    onSubmit: e => {
      dispach(RadarActions.AddRadarItem(e, Date.now()));
      dispach(push(""));
      dispach(FormActions.ClearForm);
    },
    onCancel: () => {
      dispach(FormActions.ClearForm);
      dispach(push(""));
    }
  };
};
const matchStateToProps = state => {
  return {
    name: state.addItemForm.name,
    nameValid: !!state.addItemForm.name &&
      !Object.keys(state.radarItem).includes(state.addItemForm.name),
    ring: state.addItemForm.ring,
    ringValid: !!state.addItemForm.ring,
    section: state.addItemForm.section,
    sectionValid: (text) => !!text,
    notes: state.addItemForm.notes,
    sectionOptions: Object.keys(state.radarItem)
      .map(key => {
        return state.radarItem[key].section;
      })
      .reduce((x, y) => (x.includes(y) ? x : [...x, y]), []),
    existingNames: Object.keys(state.radarItem)
  };
};

export default connect(matchStateToProps, matchDispachToProps)(AddItem);
