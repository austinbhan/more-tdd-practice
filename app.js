// import functions and grab DOM elements

import { renderOil } from './utils.js';
import { oils } from './oils.js';

// let state

const oilListElem = document.getElementById('oils');

for (let oil of oils) {
    const oilDiv = renderOil(oil);
    oilListElem.append(oilDiv);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
