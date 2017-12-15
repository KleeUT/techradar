import reducer from "./RadarsReducer";
import * as actions from "../actions/Actions";

const emptyState = Object.freeze(new Map());
const sampleId = "sampleId123";
describe("Radar Reducer", () => {
  it("Should return default state for unknown action", () => {
    const state = reducer(emptyState, { type: "Some thing else" });
    expect(state).toEqual(emptyState);
  });

  it("Should add a radar.", () => {
    const expectedState = new Map([
      [sampleId, { id: sampleId, name: "radar 1", items: new Map() }]
    ]);
    const actualState = reducer(
      emptyState,
      actions.AddRadar(sampleId, { id: sampleId, name: "radar 1" })
    );
    expect(actualState).toEqual(expectedState);
  });

  it("Should be able to update radar name", () => {
    const previousState = Object.freeze(
      new Map([
        [sampleId, { id: sampleId, name: "old name", items: new Map() }]
      ])
    );
    const expectedState = new Map([
      [sampleId, { id: sampleId, name: "New Name", items: new Map() }]
    ]);
    const actualState = reducer(
      previousState,
      actions.UpdateRadarName(sampleId, { id: sampleId, name: "New Name" })
    );
    expect(actualState).toEqual(expectedState);
  });

  it("Should be able to add an item to a radar.", () => {
    const previousState = Object.freeze(
      new Map([
        [sampleId, { id: sampleId, name: "old name", items: new Map() }]
      ])
    );
    const expectedState = new Map([
      [
        sampleId,
        {
          id: sampleId,
          name: "old name",
          items: new Map([
            [
              "new item",
              {
                name: "new item",
                ring: "adopt",
                section: "secular",
                notes: "note not no n"
              }
            ]
          ])
        }
      ]
    ]);
    const actualState = reducer(
      previousState,
      actions.AddRadarItem(sampleId, {
        name: "new item",
        ring: "adopt",
        section: "secular",
        notes: "note not no n"
      })
    );
    expect(actualState).toEqual(expectedState);
  });
});
