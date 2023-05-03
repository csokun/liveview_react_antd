import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { createRoot } from "react-dom/client";
import EmployeeList from "./EmployeeList";

function mounter(id: string, Component: React.ReactNode) {
  const rootEl = document.getElementById(id);
  const root = createRoot(rootEl!);
  root.render(Component);

  return (el: Element) => {
    if (!unmountComponentAtNode(el)) {
      console.warn("unmount failed", el);
    }
  };
}

export default {
  items: [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ],

  mounted() {
    this.mountComponent(this.items);
  },

  destroyed() {
    if (!this.unmountComponent) {
      console.log("Component not set");
      return;
    }
    console.log("unmountComponent");
    this.unmountComponent(this.el);
  },

  mountComponent(items: any) {
    this.unmountComponent = mounter(this.el.id, <EmployeeList items={items} />);
  },
};
