import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChangeAction } from "../../actions/penny";
function Penny() {
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  return (
    <>
      <div>penny</div>
      <p>{state.penny.title}</p>
      <button
        onClick={() => {
          dispatch(getChangeAction());
        }}
      >
        触发dispatch
      </button>
    </>
  );
}
let mapStateToProps = ({ penny }) => ({ penny });
export default Penny;
