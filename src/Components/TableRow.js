import React from "react";
export default function TableRow(props) {
  let { name, sites, type, status } = props.data;
  let numSitesTxt, statusIcon;
  switch (sites) {
    case 0:
      numSitesTxt = sites;
      break;
    case 1:
      numSitesTxt = `${sites} site`;
      break;
    default:
      numSitesTxt = `${sites} sites`;
      break;
  }
  switch (status) {
    case "enable":
      statusIcon = <span className={status}>ON</span>;
      break;
    case "disable":
      statusIcon = <span className={status}>OFF</span>;
      break;
    case "blocked":
      statusIcon = <img src="../src/lock.svg" />;
      break;
  }
  return (
    <div className="table-row">
      <span>{name}</span>
      <div className="table-rightCol">
        <div>
          <span>{numSitesTxt}</span>
        </div>
        <div>
          <span style={{ color: "#f5b57a" }}>{type}</span>
        </div>
        <div className="statusCellContainer">
          <div className="iconContainer">{statusIcon}</div>
        </div>
      </div>
    </div>
  );
}
