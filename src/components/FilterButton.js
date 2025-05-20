import React from "react";
export default function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="false">
      <span className="visually-hidden">Show </span>
      <span>Active</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
