import React, { createContext } from "react";

export let context = {
  module1: {
    value1: "aaa",
    value2: "bbb",
    changeValue(value1, value2) {
      this.value1 = value1;
      this.value2 = value2;
    }
  },
  module2: {
    name: "weiwei",
    age: "24"
  }
};

export const ContextValue = createContext(context);
