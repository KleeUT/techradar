import reducer from "./RadarsReducer";
import * as actions from "../actions/Actions";

const emptyState = Object.freeze({});
const sampleId = "id123";
describe("Radar Reducer", () => {
  it("Should return default state for unknown action", () => {
    const state = reducer(emptyState, { type: "Some thing else" });
    expect(state).toEqual(emptyState);
  });

  it("Should add a radar.", () => {
    const expectedState = new Map([
      ["id123", { id: "id123", name: "radar 1", items: [] }]
    ]);
    const actualState = reducer(
      emptyState,
      actions.AddRadar(sampleId, { id: sampleId, name: "radar 1" })
    );
    expect(actualState).toEqual(expectedState);
  });

  it("Should be able to update radar name", () => {
    const previousState = Object.freeze(
      new Map([["id123", { id: "id123", name: "old name", items: [] }]])
    );
    const expectedState = new Map([
      ["id123", { id: "id123", name: "New Name", items: [] }]
    ]);
    const actualState = reducer(
      previousState,
      actions.UpdateRadarName(sampleId, { id: sampleId, name: "New Name" })
    );
    expect(actualState).toEqual(expectedState);
  });

  it('Should be able to select a radar', () => {
      throw 'dopp'
  })
});
