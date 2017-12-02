import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import * as FormActions from "./actions/EditItemFormActions";
import * as RadarActions from "./actions/Actions";
import Button from "./components/Button";
import ComboBox from './components/ComboBox';
import TextInput from './components/TextInput';
const TextBox = styled.textarea`
display:block;
font-size:18px;
pEditing:0.5em;
margin:0.5em;
width:100%;
`;

class ItemDetails extends React.Component{
  constructor(props){
    super(props)    
  }
  componentDidMount(){
    if(this.props.name === ''){
      this.props.onCancel();
    }
  }
  componentWillReceiveProps(){
    // console.log()
  }
  shouldComponentUpdate(){}
  componentWillUpdate(){}
  render(){
    const handleSubmit = () => {
      onSubmit({ name, ring, section, notes });
    };
    let {
        onSubmit,
        onCancel,
        onNameChange,
        onRingChange,
        onSectionChange,
        onNotesChange,
        name,
        ring,
        section,
        notes,
        itemHistory
    } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <h1>{name}</h1>
        <TextInput onChange={onRingChange} text={ring} label={"Ring: "} />
        <ComboBox
            onChange={onSectionChange}
            value={section}
            label="Section: "
            selectionOptions={["tools", "processes", "honeycomb"]}
          />
  
        <TextBox onChange={onNotesChange} value={notes} />
        <Button onClick={handleSubmit}>Ok</Button>
        <Button onClick={onCancel}>Cancel</Button>
        <hr />
        <ItemHistory itemHistory={itemHistory} />
      </div>
    );
  }
  componentDidUpdate(){}

}
// const ItemDetails = ({
//   onSubmit,
//   onCancel,
//   onNameChange,
//   onRingChange,
//   onSectionChange,
//   onNotesChange,
//   name,
//   ring,
//   section,
//   notes,
//   itemHistory
// }) => {
//   const handleSubmit = () => {
//     onSubmit({ name, ring, section, notes });
//   };
//   return (
//     <div style={{ width: "100%" }}>
//       <h1>{name}</h1>
//       <TextInput onChange={onRingChange} text={ring} label={"Ring: "} />
//       <ComboBox
//           onChange={onSectionChange}
//           value={section}
//           label="Section: "
//           selectionOptions={["tools", "processes", "honeycomb"]}
//         />

//       <TextBox onChange={onNotesChange} value={notes} />
//       <Button onClick={handleSubmit}>Ok</Button>
//       <Button onClick={onCancel}>Cancel</Button>
//       <hr />
//       <ItemHistory itemHistory={itemHistory} />
//     </div>
//   );
// };

const ItemHistory = ({itemHistory}) => {
  return <div>
      {itemHistory.reduce((previous, current, index, array) => {
            if(index === 0){
              previous.push({timestamp:current.timestamp, ring:current.item.ring})          
            }else if (current.item.ring !== array[index-1].item.ring){
              previous.push({timestamp:current.timestamp, ring:current.item.ring})                    
            }

            return previous;
          },[]).map(i => {
            return <HistoryItem timestamp={i.timestamp} element={i.ring} key={i.timestamp}/>;
          })
      }
    </div>
};


const HistoryItem = ({timestamp, element}) => {
  return <div> 
      {timestamp} {element}
    </div>
}

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
  itemHistory: propTypes.arrayOf(propTypes.object)
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
    onSubmit: e => {
      dispach(RadarActions.UpdateRadarItem(e, Date.now()));
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
    itemHistory: state.history[state.editItemForm.name] || []
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ItemDetails);
