import RadarItemReducer from "./RadarItemReducer.js";
import * as Actions from "../actions/Actions.js";

describe("Radar Item Reducer: ", () => {
  it("should ignore actions it doesnt know about", () => {
    const state = RadarItemReducer(undefined, {
      type: "Im not interested in this"
    });
    expect(state).toEqual({});
  });

  it("Should add an item to new state", () => {
    const state = RadarItemReducer(
      undefined,
      Actions.AddRadarItem({
        name: "nameo",
        ring: "assess",
        section: "test",
        notes: "This thing looks pretty cool hey!"
      })
    );
    expect(state).toEqual({
      nameo: {
        name: "nameo",
        ring: "assess",
        section: "test",
        notes: "This thing looks pretty cool hey!"
      }
    });
  });

  
});
