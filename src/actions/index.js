export const bugAdded = (input) => {
  return {
    type: "bugAdded",
    payload: input,
  };
};

export const bugRemoved = (id) => {
  return {
    type: "bugRemoved",
    payload: id,
  };
};
