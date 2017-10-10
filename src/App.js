import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import RadarDisplay from "./RadarDisplay";
import AddItem from "./AddItem";

import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import { Provider } from "react-redux";
import { Route } from "react-router";
import createHistory from 'history/createBrowserHistory';

import RadarItemReducer from "./reducers/RadarItemReducer";
import LoggingReducer from "./reducers/LoggingReducer";

const history = createHistory();
const middleware = routerMiddleware(history);


const store = createStore(
  combineReducers(
    {
      LoggingReducer,
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
    `;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BackgroundContainer className="App">
            <ContentContainer>
              <Route exact path="/" component={RadarDisplay} /> 
              <Route path="/add-item" component = {AddItem} />
            </ContentContainer>
          </BackgroundContainer>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
