import React from "react";
import { lazy } from "react";
import { createRoot } from "react-dom/client";

const Employee = lazy(() => import("./Employee"));

export default {
  _rootEl: null,
  _employees: [],

  mounted() {
    // create react root element
    const rootEl = document.getElementById(this.el.id);
    this._rootEl = createRoot(rootEl!);

    this.render([]); // render component with empty data

    this.handleEvent("employee:updated", ({ items }) => {
      this._employees = JSON.parse(items);
      this.render();
    });
  },

  destroyed() {
    if (!this._rootEl) return;
    this._rootEl.unmount();
  },

  async dispatch({ type, ...payload }: any) {
    switch (type) {
      case "ADD_EMPLOYEE":
        await this.addEmployee(payload);
        break;
      default:
        break;
    }
  },

  async addEmployee(payload: any) {
    await this.pushEventAsync("add_employee", { ...payload });

    // update local state
    this._employees.push({
      key: this._employees.length + 1,
      ...payload,
    });

    this.render();
  },

  async pushEventAsync(event: string, payload: any) {
    return new Promise((accept, reject) => {
      this.pushEvent(event, payload, (reply) => {
        accept(reply);
      });
    });
  },

  render() {
    // don't pass object reference react won't detect change
    // use object destructure like so
    const items = [...this._employees];
    this._rootEl.render(
      <React.StrictMode>
        <Employee items={items} dispatch={this.dispatch.bind(this)} />
      </React.StrictMode>
    );
  },
};
