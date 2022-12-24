import React, { Component }  from 'react';
import './Filter.scss';
function Filter() {
    return (
  
    <div>
        <select className="filterButton" aria-label="Default select example">
            <option selected>New</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="filterButton" aria-label="Default select example">
            <option selected>Toyota</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <img className="imgPos2" src="src/assets/imgs\icon.png" alt="icon"></img>
        <img className="imgPos" src="src/assets/imgs\filter.png" alt="filter"></img>
    </div>
    );
}
export default Filter;