import { push } from "react-router-redux";

export const routes = {
  dashboard: "",
  radarDisplay: "/radar",
  listDisplay: "/list",
  tableView: "/table",
  addItemForm: "/add-item",
  itemDetails: "/item-details"
};

export const showDashboard = () => push(routes.dashboard);
export const showRadar = () => push(routes.radarDisplay);
export const showListView = () => push(routes.listDisplay);
export const showTableView = () => push(routes.tableView);
export const showAdditemForm = () => push(routes.addItemForm);
export const showItemDetailsForm = () => push(routes.itemDetails);
