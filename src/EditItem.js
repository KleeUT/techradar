import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import * as FormActions from "./actions/EditItemFormActions";
import * as RadarActions from "./actions/Actions";
import Button from "./components/Button";

const TextBox = styled.textarea`
display:block;
font-size:18px;
pEditing:0.5em;
margin:0.5em;
width:100%;
`;

const EditItem = ({
  onSubmit,
  onCancel,
  onNameChange,
  onRingChange,
  onSectionChange,
  onNotesChange,
  name,
  ring,
  section,
  notes
}) => {
  const handleSubmit = () => {
    onSubmit({name, ring, section, notes});
  }
  return (
    <div style={{ width: "100%" }}>
      <h1>Edit Item</h1>
      {/* <form onSubmit={onSubmit}> */}
        <StaticText text={name} label={"Name: "} />
        <TextInput onChange={onRingChange} text={ring} label={"Ring: "} />
        <TextInput
          onChange={onSectionChange}
          text={section}
          label={"Section: "}
        />
        <TextBox onChange={onNotesChange} value={notes} />
        <Button onClick={handleSubmit}>Ok</Button>
        <Button onClick={onCancel}>Cancel</Button>
      {/* </form> */}
    </div>
  );
};
const Input = styled.input`
display:block;
font-size:18px;
pEditing:0.5em;
margin:0.5em;
width:100%;`;
const TextInput = ({ onChange, text, label }) => {
  const Label = styled.label`
  `;


  return (
    <div>
      <Label>{label}</Label>
      <Input type="text" onChange={onChange} value={text} />
    </div>
  );
};

const StaticText = ({text, label}) => {
  return <div>{label} {text}</div>
} 

EditItem.propTypes = {
  onSubmit: propTypes.func,
  onCancel: propTypes.func,
  onRingChange: propTypes.func,
  onSectionChange: propTypes.func,
  onNotesChange: propTypes.func,
  name: propTypes.string,
  ring: propTypes.string,
  section: propTypes.string,
  notes: propTypes.string
};

const matchDispachToProps = (dispach, ownProps) => {
  return {
    onRingChange: e => {
      dispach(FormActions.UpdateRing(e.target.value));
    },
    onSectionChange: e => {
      dispach(FormActions.UpdateSection(e.target.value));
    },
    onNotesChange: e => {
      dispach(FormActions.UpdateNotes(e.target.value));
    },
    onSubmit: (e) =>{
      dispach(RadarActions.UpdateRadarItem(e))
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
    name: state.editItemForm.name,
    ring: state.editItemForm.ring,
    section: state.editItemForm.section,
    notes: state.editItemForm.notes
  };
};

export default connect(matchStateToProps, matchDispachToProps)(EditItem);
