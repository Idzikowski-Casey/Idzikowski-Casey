import React from "react";

export function DndContainer(props) {
  const {
    children,
    onDrop = (data) => console.log(data),
    id,
    data_id = "child_id",
    style = {},
  } = props;

  const drop = (e) => {
    e.preventDefault();
    const child = JSON.parse(e.dataTransfer.getData(data_id));

    onDrop(child, id);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={id} onDrop={drop} onDragOver={dragOver} style={{ ...style }}>
      {children}
    </div>
  );
}

export function DndChild(props) {
  const {
    children,
    id,
    data,
    draggable = true,
    data_id = "child_id",
    width = "40%",
  } = props;

  const dragStart = (e) => {
    const target = e.target;
    const d = JSON.stringify(data);
    e.dataTransfer.setData(data_id, d);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const dragProps = draggable
    ? { id, onDragStart: dragStart, onDragOver: dragOver, draggable }
    : {};

  return (
    <div {...dragProps} className={`drag-child`} style={{ width }}>
      {children}
    </div>
  );
}
