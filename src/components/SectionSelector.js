import React from "react";
import styled from "styled-components";
import TextInput from './TextInput'
const Label = styled.label``;

const Option = styled.div`
display:block;
font-size:18px;
padding:0.5em;
width:100%;
background-color:#fff;
:hover{
  background-color:red;
}`;

class SectionSelection extends React.Component {
  constructor(props) {
    super(props);
    this.value = props.value;
    this.onChange = props.onChange;
    this.selectionOptions = props.selectionOptions;
    console.log(`constructor ${props} ${this.value}`);
    this.inputValue = props.value;
    this.state={};
  }
  pickSelection(option) {
    return e => {
      // alert(option, e.target);
      this.setState({ inputValue: option });
      this.setState({ displayOptions: false });
      this.onChange(option);
    };
  }
  onFocus(e) {
    console.log(e.target.innerHTML);
    this.setState({ focused: true });
    this.setState({ displayOptions: true });
  }
  lostFocus(e) {
    console.log("out");
    this.setState({ focused: false });
    if (this.state.mouseOver) {
      return;
    }
    this.setState({ displayOptions: false });

    this.onChange(this.state.inputValue);
  }
  mouseEnter(e) {
    this.setState({ mouseOver: true });
  }
  mouseLeave(e) {
    this.setState({ mouseOver: false });
  }
  inputChanged(e) {
    this.setState({ inputValue: e.target.value, displayOptions: true });
    // this.onChange(e.target.value)
  }
  render() {
    console.log(`rendering ${JSON.stringify(this.state)}`);
    const state = this.state || {};
    const OptionDiv = styled.div`
      display: ${state.displayOptions || state.mouseOver ? "block" : "none"}
     `;
    return (
      <div
        onFocus={this.onFocus.bind(this)}
        onMouseLeave={this.lostFocus.bind(this)}
      >
        {/* <Label>Section:</Label> */}
        <TextInput
          label="Section:"
          text={state.inputValue}
          onChange={this.inputChanged.bind(this)}
        />
        <OptionDiv>
          {this.selectionOptions.map(option => {
            return (
              <Option key={option} onClick={this.pickSelection(option).bind(this)}>
                <a >{option}</a>
              </Option>
            );
          })}
        </OptionDiv>
      </div>
    );
  }
}


export default SectionSelection;