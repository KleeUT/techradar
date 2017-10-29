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

const history = createHistory();
const middleware = routerMiddleware(history);


const store = createStore(
  combineReducers(
    {
      LoggingReducer,
      addItemForm: AddItemFormReducer,
      editItemForm: EditItemFormReducer,
      radarItem: RadarItemReducer,
      router: routerReducer
    }),
    applyMiddleware(middleware)
);

class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    const BackgroundContainer = styled.div`
    background-image:url('radar.svg');
    background-size:cover;
    background-position:center;
    height:100%;
    width:100%;
    top:0;
    orverflow:auto;
    left:0;
    position:absolute;
    background-color:rgb(1, 61, 17);
    `;
    const ContentContainer = styled.div`
    margin:auto;
    width:75%;
    background-color:rgba(255,255,255,0.5);
    position:relative;
    font-size:18px;
    `;

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
