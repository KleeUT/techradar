import React from "react";
import { connect } from "react-redux";

import { TextInput, Button } from "../components";
import { closeAddRadarDialogue, updateName } from "./NewRadarActionCreators";
import { AddRadar } from "../actions/RadarActionsCreator";

const NewRadarForm = ({ onNameChanged, name, close, save }) => {
  return (
    <div>
      <TextInput label="Radar Name" onChange={onNameChanged} text={name} />
      <Button onClick={() => save(name)}>Add</Button>
      <Button onClick={close}>Cancel</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onNameChanged: e => dispatch(updateName(e.target.value)),
    close: () => dispatch(closeAddRadarDialogue()),
    save: name => {
      dispatch(AddRadar(name));
      dispatch(closeAddRadarDialogue());
    }
  };
};

const mapStateToProps = state => {
  return {
    name: state.newRadarForm.radarName
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRadarForm);
