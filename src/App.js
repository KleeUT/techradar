import React, { Component } from "react";
import styled from "styled-components";

import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import { Provider } from "react-redux";
import { Route } from "react-router";
import createHistory from 'history/createBrowserHistory';

import "./App.css";

import RadarDisplay from "./RadarDisplay";
import AddItem from "./AddItem";
import ItemDetails from "./ItemDetails";

import RadarItemReducer from "./reducers/RadarItemReducer";
import LoggingReducer from "./reducers/LoggingReducer";
import AddItemFormReducer from './reducers/AddItemFormReducer';
import EditItemFormReducer from './reducers/EditItemFormReducer';
import HistoryReducer from './reducers/HistoryReducer';

const history = createHistory();
const middleware = routerMiddleware(history);


const store = createStore(
  combineReducers(
    {
      LoggingReducer,
      addItemForm: AddItemFormReducer,
      editItemForm: EditItemFormReducer,
      radarItem: RadarItemReducer,
      router: routerReducer,
      history: HistoryReducer
    }),
    applyMiddleware(middleware)
);


const BackgroundContainer = styled.div`
background-color: #fcfdfc;
background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23b5dfb8' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
height:100%;
width:100%;
top:0;
orverflow:auto;
left:0;
position:absolute;
font-family: 'Roboto', sans-serif;
`;
const ContentContainer = styled.div`
margin:auto;
width:75%;
position:relative;
font-size:18px;
padding:2.5%;
`;

class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {


    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BackgroundContainer className="App">
            <ContentContainer>
              <Route exact path="/" component={RadarDisplay} /> 
              <Route path="/add-item" component = {AddItem} />
              <Route path="/item-details" component = {ItemDetails} />
            </ContentContainer>
          </BackgroundContainer>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
