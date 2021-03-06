import HistoryReducer from "./HistoryReducer";
import * as AppActions from "../actions/RadarActionsCreator";
import moment from "moment";
const emptyObject = Object.freeze({});
const item1 = Object.freeze({
  name: "item1",
  ring: "of death",
  section: "segment",
  notes: "note",
  key: "item1"  
});
const itemUpdated = Object.freeze({
  name: "item1",
  ring: "of death",
  section: "segment",
  notes: "note",
  key: "item1"
});
const someRadarId = "some radar id";
describe("History Reducer: ", () => {
  it("Should initialise from unknown event", () => {
    const newState = HistoryReducer(undefined, { type: "Its a me eventio" });
    expect(newState).toEqual(emptyObject);
  });

  it("Should add a history entry when an item is added", () => {
    const timestamp = Date.now();
    const newState = HistoryReducer(
      emptyObject,
      AppActions.AddRadarItem(someRadarId, item1.name, item1.ring, item1.section, item1.notes, timestamp)
    );
    expect(newState).toEqual({
      item1: [{ item: item1, timestamp: timestamp }]
    }); 
  });

  it("Should add history entry after an update", () => {
    const timestamp = Date.now();
    const timestamp2 = Date.now();
    const previousState = Object.freeze({
      item1: [{ item: item1, timestamp: timestamp }]
    });
    const newState = HistoryReducer(
      previousState,
      AppActions.UpdateRadarItem(someRadarId, item1, timestamp2)
    );

    expect(newState).toEqual({
      item1: [
        { item: item1, timestamp: timestamp },
        { item: itemUpdated, timestamp: timestamp2 }
      ]
    }); // I think i need time here how do I do that testabley
  });
});
