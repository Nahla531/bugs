import React from "react";
import { useDispatch } from "react-redux";
import { bugRemoved } from "./actions/index";
function Bug({ des, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(bugRemoved(id));
  };
  return (
    <li>
      {des}
      <button onClick={handleDelete}>remove bug</button>
    </li>
  );
}

export default Bug;
