import React, { useState, useContext } from "react";
import { Input, Button, message } from "antd";
import { Store, CHANGE_TYPE } from "./store";
import "./Input.scss";
export default function MyInput(props) {
  const [input, setInput] = useState("");
  const [list, dispatch] = useContext(Store);
  return (
    <div className="header">
      <Input
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          if (!input) {
            message.info("输入内容不可为空···");
            return;
          }
          let list_ = list.concat({ checked: false, title: input });
          dispatch({ type: CHANGE_TYPE, payload: list_ });
          setInput("");
        }}
      >
        添加
      </Button>
    </div>
  );
}
