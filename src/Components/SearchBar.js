import React from "react";

export default function SearchBar(props) {
  return (
    <div className="searchBar-Container">
      <div className="searchBar-row">
        <i onClick={props.filter} className="fa fa-search"></i>
        <input type="text" onChange={props.change} />
      </div>
    </div>
  );
}
