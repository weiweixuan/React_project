import React, {
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  forwardRef,
  useContext
} from "react";
import { ContextValue } from "../../content/index";
let Input = (props, ref) => {
  const { defaultValue } = props;
  const refInput = useRef();

  useEffect(() => {
    refInput.current.value = defaultValue;
  }, []);
  useImperativeHandle(ref, () => ({
    focus() {
      refInput.current.focus();
    },
    value() {
      return refInput.current.value;
    }
  }));
  function handleChange(e) {
    console.log(e.target.value, "xxx");
  }
  return <input ref={refInput} onChange={handleChange}></input>;
};
let Minput = forwardRef(Input);
export default function HooksDemo(props) {
  const { module1 } = useContext(ContextValue);
  console.log(module1, "aa");

  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <div>
      input1: <Minput ref={ref1} defaultValue={module1.value1}></Minput>
      <br></br>
      <br></br>
      input2: <Minput ref={ref2} defaultValue={module1.value2}></Minput>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          ref1.current.focus();
        }}
      >
        1选中
      </button>
      <button
        onClick={() => {
          ref2.current.focus();
        }}
      >
        2选中
      </button>
      <button
        onClick={() => {
          console.log(ref1.current.value(), ref2.current.value());
          module1.changeValue(ref1.current.value(), ref2.current.value());
        }}
      >
        获取值
      </button>
    </div>
  );
}
