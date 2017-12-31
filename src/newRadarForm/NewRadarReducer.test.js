import reducer from "./NewRadarReducer";
import * as NewRadarAction from "./NewRadarActionCreators";
const emptyState = {};

describe("Dashboard Reducer: ", () => {
  it("Should return empty object for initial unknown action", () => {
    const newState = reducer(undefined, { type: "something ekse" });
    expect(newState).toEqual({});
  });

  it("Should set show dialogue", () => {
    const newState = reducer(emptyState, NewRadarAction.showAddRadarDialogue());
    expect(newState).toEqual({
      showDialogue: true,
      radarName: ""
    });
  });

  it("Should clear the name", () => {
    const newState = reducer(
      {
        showDialogue: false,
        radarName: "oinky oink"
      },
      NewRadarAction.showAddRadarDialogue()
    );
    expect(newState).toEqual({
      showDialogue: true,
      radarName: ""
    });
  });

  it("Should hide dialogure", () => {
    const newState = reducer(
      emptyState,
      NewRadarAction.closeAddRadarDialogue()
    );
    expect(newState).toEqual({ showDialogue: false });
  });

  it("Should update name", () => {
    const newName = "new Name";
    const newState = reducer(emptyState, NewRadarAction.updateName(newName));
    expect(newState).toEqual({
      radarName: newName
    });
  });
});
