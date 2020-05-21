import React from "react";
import TableRow from "./TableRow";

export default function TableRowContainer(props) {
  let items = props.items.map((item, index) => (
    <TableRow key={"item" + index} data={item} />
  ));
  return <div>{items}</div>;
}
