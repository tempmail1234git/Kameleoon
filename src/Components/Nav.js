import React from "react";
export default function Nav(props) {
  return (
    <div onClick={props.click} className="table-navContainer">
      <div id="name">Tool Name</div>
      <div className="table-rightCol">
        <div id="sites">Used on</div>
        <div id="type">Type</div>
        <div id="status">Status</div>
      </div>
    </div>
  );
}
