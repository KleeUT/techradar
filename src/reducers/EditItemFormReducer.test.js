import EditItemForm from "./EditItemFormReducer";
import * as AppActions from "../actions/Actions";
import * as FormActions from "../actions/EditItemFormActions";
describe("Edit Item Form: ", () => {
  const emptyState = Object.freeze({
    name: "",
    ring: "",
    section: "",
    notes: ""
  });
  it("Should return state for action its not using", () => {
    const newState = EditItemForm(undefined, { type: "some other action" });
    expect(newState).toEqual(emptyState);
  });

  it("Should return empty state clear action", () => {
    const newState = EditItemForm(
      {
        name: "1",
        ring: "2",
        section: "3",
        notes: "4"
      },
      FormActions.ClearForm
    );
    expect(newState).toEqual(emptyState);
  });

  it("Should set values based on initial edit action", () => {
    const newState = EditItemForm(
      emptyState,
      AppActions.EditItem({
        name: "1",
        ring: "2",
        section: "3",
        notes: "4"
      })
    );
    expect(newState).toEqual({
      name: "1",
      ring: "2",
      section: "3",
      notes: "4"
    });
  });

  describe("Should update properties: ", () => {
    it("Name", () => {
      const newState = EditItemForm(
        emptyState,
        FormActions.UpdateName("Thing Name")
      );
      expect(newState).toEqual({ ...emptyState, name: "Thing Name" });
    });

    it("Ring", () => {
      const newState = EditItemForm(
        emptyState,
        FormActions.UpdateRing("Thing Ring")
      );
      expect(newState).toEqual({ ...emptyState, ring: "Thing Ring" });
    });

    it("Section", () => {
      const newState = EditItemForm(
        emptyState,
        FormActions.UpdateSection("Thing Section")
      );
      expect(newState).toEqual({ ...emptyState, section: "Thing Section" });
    });

    it("Notes", () => {
      const newState = EditItemForm(
        emptyState,
        FormActions.UpdateNotes("Thing Notes")
      );
      expect(newState).toEqual({ ...emptyState, notes: "Thing Notes" });
    });
  });
});
