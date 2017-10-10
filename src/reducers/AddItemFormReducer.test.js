import AddItemForm from "./AddItemFormReducer";
import * as Actions from "../actions/AddItemFormActions";
describe("Add Item Form: ", () => {
  const emptyState = Object.freeze({
    name: "",
    ring: "",
    section: "",
    notes: ""
  });
  it("Should return state for action its not using", () => {
    const newState = AddItemForm(undefined, { type: "some other action" });
    expect(newState).toEqual(emptyState);
  });

  describe("Should update properties: ", () => {
    it("Name", () => {
      const newState = AddItemForm(
        emptyState,
        Actions.UpdateName("Thing Name")
      );
      expect(newState).toEqual({ ...emptyState, name: "Thing Name" });
    });

    it("Ring", () => {
      const newState = AddItemForm(
        emptyState,
        Actions.UpdateRing("Thing Ring")
      );
      expect(newState).toEqual({ ...emptyState, ring: "Thing Ring" });
    });

    it("Section", () => {
      const newState = AddItemForm(
        emptyState,
        Actions.UpdateSection("Thing Section")
      );
      expect(newState).toEqual({ ...emptyState, section: "Thing Section" });
    });

    it("Notes", () => {
      const newState = AddItemForm(
        emptyState,
        Actions.UpdateNotes("Thing Notes")
      );
      expect(newState).toEqual({ ...emptyState, notes: "Thing Notes" });
    });
  });
});
