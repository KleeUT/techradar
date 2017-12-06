import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import styled from "styled-components";

const Nav = styled.nav`
/* background-color: #d6f5d6; */
background-color: #145214;
color:#fff;
width: 100%;
height: 2rem;
display: flex;
`;
const Link = styled.a`
cursor: pointer;
font-size: 1rem;
padding: 0.5rem 0.5rem 0 0.5rem;
margin: 0 0.1rem 0 0.1rem;
height: 100%;
vertical-align:bottom;
/* background-color: #ze1f3e1; */
:hover{
    background: #fff;
}
`;
const Logo = styled.img`
height: 1.75rem;
width: 1.75rem;
cursor: pointer;
margin-left: 0.5rem;
margin-right: 0.5rem;
`;

class RadarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav>
        <a onClick={() => this.props.navigate("/")}>
          <Logo src="/radar.svg" />
        </a>
        <Link onClick={() => this.props.navigate("/radar")}>Radar</Link>
        <Link onClick={() => this.props.navigate("/list")}>List</Link>
      </Nav>
    );
  }
}

RadarNav.propTypes = {
  navigate: PropTypes.func
};

const matchdispatchToProps = dispatch => {
  return {
    navigate: path => dispatch(push(path))
  };
};
const matchStateToProps = state => {
  return {
    currentPage: state.router.location.pathname
  };
};

export default connect(matchStateToProps, matchdispatchToProps)(RadarNav);
