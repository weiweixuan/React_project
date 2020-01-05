import React, {
  useContext,
  useState,
  useMemo,
  memo,
  useEffect,
  useCallback
} from "react";
import { ContextValue } from "../../content/index";
/**
 * useCallback优化
 */
// memo把组件包裹一下，props值不变就不更新
// let Child = memo(props => {
//   const { count } = props;
//   console.log("子组件渲染了");
//   return <div>{count}次</div>;
// });
let Child = memo(props => {
  const { count, changeCount } = props;
  console.log("子组件渲染了");
  return (
    <>
      <div>{count}次</div>
      <button
        onClick={() => {
          changeCount(count + 1);
        }}
      >
        加
      </button>
    </>
  );
});
function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("a");

  const newValue = useMemo(() => {
    console.log("value", value);
    return value;
  }, [value]);
  // let ChildComponent = useMemo(() => {
  //   console.log("count", count);
  //   return <Child count={count} changeCount={changeCount}></Child>;
  // }, [count]);

  function changeValue() {
    setValue(
      v =>
        v +
        Math.random()
          .toString(32)
          .slice(2, 3)
    );
  }
  const changeCount = useCallback(
    val => {
      console.log(val, "xxxiii");
      setCount(val);
    },
    [count]
  );
  return (
    <>
      <p>{newValue}</p>
      <Child count={count} changeCount={changeCount}></Child>
      <p>
        value:<span>{value}</span>
      </p>
      <button onClick={changeValue}>改变value</button>
    </>
  );
}
export default () => {
  const { module1 } = useContext(ContextValue);
  return (
    <div>
      <p>value1: {module1.value1}</p>
      <p>value2: {module1.value2}</p>
      <Parent></Parent>
    </div>
  );
};
