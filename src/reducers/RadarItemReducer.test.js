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

  it("Should update an existing item with new values", () => {
    const state = RadarItemReducer(
      {
        nameo: {
          name: "nameo",
          ring: "assess",
          section: "test",
          notes: "This thing looks pretty cool hey!"
        }
      },
      Actions.UpdateRadarItem({
        name: "nameo",
        ring: "hold",
        section: "fish",
        notes: "This thing looks pretty cool no longer!"
      })
    );
    expect(state).toEqual({
      nameo: {
        name: "nameo",
        ring: "hold",
        section: "fish",
        notes: "This thing looks pretty cool no longer!"
      }
    });
  });
  it("Should only update the specified item with new values", () => {
    const state = RadarItemReducer(
      {
        nameo: {
          name: "nameo",
          ring: "assess",
          section: "test",
          notes: "This thing looks pretty cool hey!"
        },
        item2: {
          name: "item2",
          ring: "assess2",
          section: "test2",
          notes: "This thing looks pretty cool hey2!"
        }
      },
      Actions.UpdateRadarItem({
        name: "nameo",
        ring: "hold",
        section: "fish",
        notes: "This thing looks pretty cool no longer!"
      })
    );
    expect(state).toEqual({
      nameo: {
        name: "nameo",
        ring: "hold",
        section: "fish",
        notes: "This thing looks pretty cool no longer!"
      },
      item2: {
        name: "item2",
        ring: "assess2",
        section: "test2",
        notes: "This thing looks pretty cool hey2!"
      }
    });
  });
});
