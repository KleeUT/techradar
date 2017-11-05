import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import * as FormActions from "./actions/AddItemFormActions";
import * as RadarActions from "./actions/Actions";
import Button from "./components/Button";
import SectionSelection from './components/SectionSelector'
import TextInput from './components/TextInput'
const TextBox = styled.textarea`
display:block;
font-size:18px;
padding:0.5em;
margin:0.5em;
width:100%;
`;

const AddItem = ({
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
      <h1>Add Item</h1>
      {/* <form onSubmit={onSubmit}> */}
        <TextInput onChange={onNameChange} text={name} label={"Name: "} />
        <TextInput onChange={onRingChange} text={ring} label={"Ring: "} />
        <SectionSelection
          onChange={onSectionChange}
          value={section}
          selectionOptions={["tools", "processes", "honeycomb"]}
        />
        <TextBox onChange={onNotesChange} value={notes} />
        <Button onClick={handleSubmit}>Ok</Button>
        <Button onClick={onCancel}>Cancel</Button>
      {/* </form> */}
    </div>
  );
};
// const Input = styled.input`
// display:block;
// font-size:18px;
// padding:0.5em;
// margin:0.5em;
// width:100%;`;
// const TextInput = ({ onChange, text, label }) => {
//   const Label = styled.label`
//   `;


//   return (
//     <div>
//       <Label>{label}</Label>
//       <Input type="text" onChange={onChange} value={text} />
//     </div>
//   );
// };

AddItem.propTypes = {
  onSubmit: propTypes.func,
  onCancel: propTypes.func,
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
      console.log(`bubble ${e}`);
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
    ring: state.addItemForm.ring,
    section: state.addItemForm.section,
    notes: state.addItemForm.notes
  };
};

// const mergeProps = (stateProps, dispachProps, ownProps) => {
//   return Object.assign({}, ownProps, stateProps, dispachProps, {
//     submit: (e) => {
//       e.stopPropagation();
//       console.log("OWN PROPS", ownProps);
//       dispachProps.doTheSubmitDance({
//         name:ownProps.addItemForm.name,
//         ring:ownProps.addItemForm.ring,
//         section:ownProps.addItemForm.section,
//         notes:ownProps.addItemForm.notes,
//       });
//     }
//   })
// }

export default connect(matchStateToProps, matchDispachToProps)(AddItem);
