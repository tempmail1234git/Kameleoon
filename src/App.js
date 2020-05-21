import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import TableRowsContainer from "./Components/TableRowsContainer";
import SearchBar from "./Components/SearchBar";
import response from "./response";
export default function App() {
  const [initialData, setinitialData] = useState(null);
  const [activeItemsList, setactiveItemsList] = useState(null);
  const [inputValue, setinputValue] = useState(null);
  const [showItems, setshowItems] = useState(false);
  const handleChange = (e) => {
    let inputValue = e.target.value;
    if (inputValue === "") {
      setshowItems(true);
      setactiveItemsList(initialData);
    }
    setinputValue(inputValue);
  };
  const filter = () => {
    if (inputValue === "") return;
    let inputValueIndex;
    initialData.map(function (item, index) {
      if (item.name == inputValue) {
        inputValueIndex = index;
      }
    });
    if (inputValueIndex) {
      let filteredItem = [initialData[inputValueIndex]];
      setactiveItemsList(filteredItem);
    } else {
      setshowItems(false);
    }
  };
  const sort = (e) => {
    let sortBy = e.target.id; //type, name, etc
    let lastIndex = initialData.length - 1;
    let isSorted = initialData[0][sortBy] <= initialData[lastIndex][sortBy];
    let sortedItems = initialData.sort(function (a, b) {
      let result;
      if (a[sortBy] === b[sortBy]) 0;
      if (isSorted) {
        a[sortBy] < b[sortBy] ? (result = 1) : (result = -1);
      } else {
        a[sortBy] > b[sortBy] ? (result = 1) : (result = -1);
      }
      return result;
    });
    setshowItems([...sortedItems]);
  };
  useEffect(() => {
    setinitialData(response);
    setactiveItemsList(response);
    setshowItems(true);
  }, []);
  return (
    <div className="app-container">
      <SearchBar filter={filter} change={handleChange} />
      <div className="table-mainContainer">
        <Nav click={sort} />
        {showItems ? (
          <TableRowsContainer items={activeItemsList} />
        ) : (
          <div style={{ textAlign: "center" }}>...</div>
        )}
      </div>
    </div>
  );
}
