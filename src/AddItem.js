import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import * as FormActions from "./actions/AddItemFormActions";
import * as RadarActions from "./actions/Actions";
import Button from "./components/Button";

const TextBox = styled.textarea`
display:block;
font-size:18px;
padding:0.5em;
margin:0.5em;
width:100%;
`;

const AddItem = ({
  submit,
  cancel,
  onNameChange,
  onRingChange,
  onSectionChange,
  onNotesChange,
  name,
  ring,
  section,
  notes
}) => {
  return (
    <div style={{ width: "100%" }}>
      <h1>Add Item</h1>
      {/* <form onSubmit={submit}> */}
        <TextInput onChange={onNameChange} text={name} label={"Name: "} />
        <TextInput onChange={onRingChange} text={ring} label={"Ring: "} />
        <TextInput
          onChange={onSectionChange}
          text={section}
          label={"Section: "}
        />
        <TextBox onChange={onNotesChange} value={notes} />
        <Button onClick={submit}>Ok</Button>
      {/* </form> */}
    </div>
  );
};
const Input = styled.input`
display:block;
font-size:18px;
padding:0.5em;
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

AddItem.propTypes = {
  submit: propTypes.func,
  cancel: propTypes.func,
  onNameChange: propTypes.func,
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
    onNameChange: e => {
      dispach(FormActions.UpdateName(e.target.value));
    },
    onRingChange: e => {
      dispach(FormActions.UpdateRing(e.target.value));
    },
    onSectionChange: e => {
      dispach(FormActions.UpdateSection(e.target.value));
    },
    onNotesChange: e => {
      dispach(FormActions.UpdateNotes(e.target.value));
    },
    doTheSubmitDance: (item) =>{
      dispach(RadarActions.AddRadarItem(item))
    },
    cancel: () => {
      dispach(FormActions.ClearForm)
      dispach(push(""))
    }
  };
};
const matchStateToProps = state => {
  return {
    name: state.AddItemForm.name,
    ring: state.AddItemForm.ring,
    section: state.AddItemForm.section,
    notes: state.AddItemForm.notes
  };
};

const mergeProps = (stateProps, dispachProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispachProps, {
    submit: (e) => {
      e.stopPropagation();
      console.log("OWN PROPS", ownProps);
      dispachProps.doTheSubmitDance({
        name:ownProps.addItemForm.name,
        ring:ownProps.addItemForm.ring,
        section:ownProps.addItemForm.section,
        notes:ownProps.addItemForm.notes,
      });
    }
  })
}

export default connect(matchStateToProps, matchDispachToProps, mergeProps)(AddItem);
