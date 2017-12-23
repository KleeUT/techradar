import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import * as FormActions from "./actions/EditItemFormActions";
import * as RadarActions from "./actions/RadarActionsCreator";
import Button from "./components/button/Button";
import ComboBox from "./components/ComboBox";
import TextInput from "./components/TextInput";

const TextBox = styled.textarea`
  display: block;
  font-size: 18px;
  pediting: 0.5rem;
  margin: 0.5rem;
  width: 100%;
`;

class ItemDetails extends React.Component {
  componentDidMount() {
    if (this.props.name === "") {
      this.props.onCancel();
    }
  }
  shouldComponentUpdate() {}
  componentWillUpdate() {}
  render() {
    const handleSubmit = () => {
      onSubmit(this.props.radarId, { name, ring, section, notes });
    };
    let {
      onSubmit,
      onCancel,
      onRingChange,
      onSectionChange,
      onNotesChange,
      name,
      ring,
      section,
      notes,
      itemHistory,
      allSections
    } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <h1>{name}</h1>
        <TextInput onChange={onRingChange} text={ring} label={"Ring: "} />
        <ComboBox
          onChange={onSectionChange}
          value={section}
          label="Section: "
          selectionOptions={allSections}
        />

        <TextBox onChange={onNotesChange} value={notes} />
        <Button onClick={handleSubmit}>Ok</Button>
        <Button onClick={onCancel}>Cancel</Button>
        <hr />
        <ItemHistory itemHistory={itemHistory} />
      </div>
    );
  }
  componentDidUpdate() {}
}

const ItemHistory = ({ itemHistory }) => {
  return (
    <div>
      {itemHistory
        .reduce((previous, current, index, array) => {
          if (index === 0) {
            previous.push({
              timestamp: current.timestamp,
              ring: current.item.ring
            });
          } else if (current.item.ring !== array[index - 1].item.ring) {
            previous.push({
              timestamp: current.timestamp,
              ring: current.item.ring
            });
          }

          return previous;
        }, [])
        .map(i => {
          return (
            <HistoryItem
              timestamp={i.timestamp}
              element={i.ring}
              key={i.timestamp}
            />
          );
        })}
    </div>
  );
};

const HistoryItem = ({ timestamp, element }) => {
  return (
    <div>
      {timestamp} {element}
    </div>
  );
};

ItemDetails.propTypes = {
  onSubmit: propTypes.func,
  onCancel: propTypes.func,
  onRingChange: propTypes.func,
  onSectionChange: propTypes.func,
  onNotesChange: propTypes.func,
  name: propTypes.string,
  ring: propTypes.string,
  section: propTypes.string,
  notes: propTypes.string,
  radarId: propTypes.string,
  itemHistory: propTypes.arrayOf(propTypes.object),
  allSections: propTypes.arrayOf(propTypes.string)
};

const matchDispachToProps = (dispach, ownProps) => {
  return {
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
    onSubmit: (radarId, updatedItem) => {
      dispach(RadarActions.UpdateRadarItem(radarId, updatedItem, Date.now()));
      dispach(push(""));
    },
    onCancel: () => {
      dispach(FormActions.ClearForm);
      dispach(push(""));
    }
  };
};
const matchStateToProps = state => {
  return {
    name: state.editItemForm.name,
    ring: state.editItemForm.ring,
    section: state.editItemForm.section,
    notes: state.editItemForm.notes,
    radarId: state.currentRadar,
    itemHistory: state.history[state.editItemForm.name] || [],
    allSections: ["tools", "processes", "honeycomb", "bread types"]
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ItemDetails);
