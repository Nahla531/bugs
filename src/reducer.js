let id = 0;
export default function reducer(state = [], action) {
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++id,
        description: action.payload,
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id !== action.payload);

  return state;
}
