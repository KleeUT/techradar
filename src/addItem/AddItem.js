import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import styled from "styled-components";

import * as FormActions from "./AddItemFormActions";
import * as RadarActions from "../actions/RadarActionsCreator";
import { showRadar } from "../actions/RoutingActionCreator";
import Button from "../components/button/Button";
import ComboBox from "../components/ComboBox";
import TextInput from "../components/TextInput";
import RingSelector from "../components/RingSelector";

const TextBox = styled.textarea`
  font-size: 18px;
  width: 100%;
  resize: none;
`;

const AddItem = ({
  radarId,
  onSubmit,
  onCancel,
  onNameChange,
  onRingChange,
  onSectionChange,
  onNotesChange,
  name,
  nameValid,
  ring,
  section,
  sectionValid,
  notes,
  sectionOptions,
  existingNames
}) => {
  const handleSubmit = () => {
    onSubmit(radarId, name, ring, section, notes);
  };
  return (
    <div>
      <h1>Add Item</h1>
      <TextInput
        onChange={onNameChange}
        text={name}
        label="Name: "
        valid={nameValid}
      />
      <RingSelector onChange={onRingChange} value={ring} label="Ring: " />
      <ComboBox
        onChange={onSectionChange}
        value={section}
        label="Section: "
        selectionOptions={sectionOptions}
        valid={sectionValid}
      />
      Notes
      <TextBox onChange={onNotesChange} value={notes} />
      <Button onClick={handleSubmit} canClick={nameValid}>
        Ok
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};

AddItem.propTypes = {
  radarId: propTypes.string,
  onSubmit: propTypes.func,
  onCancel: propTypes.func,
  onNameChange: propTypes.func,
  onRingChange: propTypes.func,
  onSectionChange: propTypes.func,
  onNotesChange: propTypes.func,
  name: propTypes.string,
  nameValid: propTypes.bool,
  ring: propTypes.string,
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
      console.log(`Ring Changed to ${e}`);
      dispach(FormActions.UpdateRing(e));
    },
    onSectionChange: e => {
      dispach(FormActions.UpdateSection(e));
    },
    onNotesChange: e => {
      dispach(FormActions.UpdateNotes(e.target.value));
    },
    onSubmit: (id, name, ring, section, notes) => {
      dispach(
        RadarActions.AddRadarItem(id, name, ring, section, notes, Date.now())
      );
      dispach(showRadar());
      dispach(FormActions.ClearForm);
    },
    onCancel: () => {
      dispach(FormActions.ClearForm);
      dispach(showRadar());
    }
  };
};
const matchStateToProps = state => {
  const currentRadar = state.radars[state.currentRadar];
  const currentRadarItems = Object.keys((currentRadar || { items: {} }).items)
    .map(x => currentRadar.items[x])
    .filter(x => x !== undefined);

  const existingNames = currentRadarItems.map(x => x.name);
  return {
    radarId: state.currentRadar,
    name: state.addItemForm.name,
    nameValid:
      !!state.addItemForm.name &&
      !existingNames.includes(state.addItemForm.name),
    ring: state.addItemForm.ring,
    section: state.addItemForm.section,
    sectionValid: text => !!text,
    notes: state.addItemForm.notes,
    sectionOptions: currentRadarItems.reduce(
      (previous, current) =>
        previous.includes(current.section)
          ? previous
          : [...previous, current.section],
      []
    ),
    existingNames: existingNames
  };
};

export default connect(matchStateToProps, matchDispachToProps)(AddItem);
