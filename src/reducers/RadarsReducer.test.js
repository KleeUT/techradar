import reducer from "./RadarsReducer";
import * as actions from "../actions/Actions";

const emptyState = Object.freeze({});
const radarId = "Radar Id";

describe("Radar Reducer", () => {
  it("Should return default state for unknown action", () => {
    const state = reducer(emptyState, { type: "Some thing else" });
    expect(state).toEqual(emptyState);
  });

  it("Should add a radar.", () => {
    const expectedState = {};
    expectedState[radarId] = { id: radarId, name: "radar 1", items: {} };

    const actualState = reducer(
      emptyState,
      actions.AddRadar(radarId, { id: radarId, name: "radar 1" })
    );
    expect(actualState).toEqual(expectedState);
  });

  it("Should be able to update radar name", () => {
    const previousState = {};
    previousState[radarId] = { id: radarId, name: "old name", items: {} };
    Object.freeze(previousState);

    const expectedState = {};
    expectedState[radarId] = { id: radarId, name: "New Name", items: {} };

    const actualState = reducer(
      previousState,
      actions.UpdateRadarName(radarId, { id: radarId, name: "New Name" })
    );
    expect(actualState).toEqual(expectedState);
  });

  it("Should be able to add an item to a radar.", () => {
    const previousState = {};
    previousState[radarId] = { id: radarId, name: "old name", items: {} };
    Object.freeze(previousState);

    const expectedState = {};
    expectedState[radarId] = {
      id: radarId,
      name: "old name",
      items: {
        "new item": {
          name: "new item",
          ring: "adopt",
          section: "secular",
          notes: "note not no n",
          key: 'new item'
        }
      }
    };

    const actualState = reducer(
      previousState,
      actions.AddRadarItem(radarId, 
        "new item",
        "adopt",
        "secular",
        "note not no n"
      )
    );
    expect(actualState).toEqual(expectedState);
  });
});
