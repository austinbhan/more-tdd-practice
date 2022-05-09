// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderOil } from '../utils.js';
import { oils } from '../oils'; 

const test = QUnit.test;

test('test render oil function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div id="olive"><img src = ".assets/olive.jpeg"><h2>Say Hello to Olive Oil</h2><h5>Its smoke point is low</h5><p>It's cheap</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = 

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
