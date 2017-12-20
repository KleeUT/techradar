const stateKey = "state";
export const loadState = () => {
  try {
    const state = localStorage.getItem(stateKey);
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    // console.log(`Error loading state with key ${stateKey}`, err);
    return undefined;
  }
};

export const saveState = state => {
  const stringState = JSON.stringify(state);
  try {
    localStorage.setItem(stateKey, stringState);
  } catch (err) {
    // console.log(
      // `Could not persiste state with key ${stateKey}, state: ${stringState}`,
      // err
    // );
  }
};
