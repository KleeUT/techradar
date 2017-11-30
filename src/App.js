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

const ContentContainer = styled.div`
margin:auto;
width:960px;
font-size:18px;
padding:10px;
background-color:#fefffe;
min-height:100%;
border: 2px solid #c5d4c5;
@media (max-width: 960px) {
		width:100%;
	}
`;

class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {


    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <ContentContainer>
              <Route exact path="/" component={RadarDisplay} /> 
              <Route path="/add-item" component = {AddItem} />
              <Route path="/item-details" component = {ItemDetails} />
            </ContentContainer>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
