import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import * as FormActions from "./actions/AddItemFormActions";
import * as RadarActions from "./actions/Actions";
import Button from "./components/Button";
import ComboBox from './components/ComboBox'
import TextInput from './components/TextInput'
const TextBox = styled.textarea`
/* display:block; */
font-size:18px;
/* padding:0.5em; */
/* margin:0.5em 0.0em; */
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
    onSubmit({name, ring, section, notes});
  }
  return (
    <div style={{ width: "100%" }}>
      <h1>Add Item</h1>
      {/* <form onSubmit={onSubmit}> */}
        <TextInput onChange={onNameChange} text={name} label="Name: " valid={nameValid} />
        <TextInput onChange={onRingChange} text={ring} label="Ring: " valid={() => !!ring }/>
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
      {/* </form> */}
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
  sectionValid: propTypes.bool,
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
      dispach(FormActions.UpdateRing(e.target.value));
    },
    onSectionChange: e => {
      dispach(FormActions.UpdateSection(e));
    },
    onNotesChange: e => {
      dispach(FormActions.UpdateNotes(e.target.value));
    },
    onSubmit: (e) =>{
      dispach(RadarActions.AddRadarItem(e, Date.now()))
      dispach(push(""))      
    },
    onCancel: () => {
      dispach(FormActions.ClearForm)
      dispach(push(""))
    }
  };
};
const matchStateToProps = state => {
  return {
    name: state.addItemForm.name,
    nameValid: !!state.addItemForm.name && !Object.keys(state.radarItem).includes(state.addItemForm.name),
    ring: state.addItemForm.ring,
    ringValid: !!state.addItemForm.ring,
    section: state.addItemForm.section,
    sectionValid: !!state.addItemForm.section,
    notes: state.addItemForm.notes,
    sectionOptions: Object.keys(state.radarItem).map(key => {
      return state.radarItem[key].section;
    }).reduce((x, y) => x.includes(y) ? x : [...x, y], []),
    existingNames: Object.keys(state.radarItem)
  };
};


export default connect(matchStateToProps, matchDispachToProps)(AddItem);
