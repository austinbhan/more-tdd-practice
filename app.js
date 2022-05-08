// import functions and grab DOM elements

import { renderOil } from './utils.js';
import { oils } from './oils.js';

// let state

const oilList = document.getElementsByClassName('oils');

for (let oil of oils) {
    const oilDiv = renderOil(oil);
    oilList.append(oilDiv);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
