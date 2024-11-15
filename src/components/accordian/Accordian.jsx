import React, { useState } from "react";
import data from "./data";
import "./styles.css";
// single selection
export default function Accordian() {
  const [selected, setSelected] = useState(null);
//multiple selection
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSelection(getCurrentId) {
    setSelected(getCurrentId == selected ? null : getCurrentId);
  }
  function multipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setMultiSelect(!multiSelect)}>
          Enable Muliple Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    multiSelect
                      ? () => multipleSelection(dataItem.id)
                      : () => handleSelection(dataItem.id)
                  }
                  className="title"
                  key={dataItem.id}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected == dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div>{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <h1>No Data Found</h1>
          )}
        </div>
      </div>
    </>
  );
}
