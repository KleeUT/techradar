import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
const middlewares = []; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

import AddItem from "./AddItem";
describe("Add item Form: ", () => {
  it("Should render", () => {
    const getState = {
      radars: {},
      addItemForm: {
        name: "name field",
        section: "sections",
        ring: "Adopt",
        notes: "noteses"
      }
    }; // initial state of the store
    const div = document.createElement("div");
    const store = mockStore(getState);

    ReactDOM.render(<AddItem store={store} />, div);
  });
});

/*
import configureStore from 'redux-mock-store';
 
const middlewares = []; // add your middlewares like `redux-thunk` 
const mockStore = configureStore(middlewares);
 
// Test in mocha 
it('should dispatch action', (done) => {
  const getState = {}; // initial state of the store 
  const action = { type: 'ADD_TODO' };
  const expectedActions = [action];
 
  const store = mockStore(getState, expectedActions, done);
  store.dispatch(action);
})*/
