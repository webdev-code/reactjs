import React from 'react';

//arrow function for calculating the sum
const sum = (num1, num2) => {
  return num1 + num2;
};

//calling the sum function and storing the answer in result
const result = sum(1, 11);

//object for styling
const stylesObj = {
  fontSize: '24px',
};

//checking and applying properties to stylesObj
if (result < 10) {
  stylesObj.color = '#339989';
} else {
  stylesObj.color = '#A98743';
}

function InlineStyling() {
  return (
    //   inline Styling using stylesObj
    <div style={stylesObj}>
      {/* defining the styles inline using style attribute and js object */}

      <h1 style={{ color: 'red', backgroundColor: 'black' }}>
        Hellow to the Inline Styling
      </h1>
      <h1>The Result is {`${result}`}</h1>
    </div>
  );
}

export default InlineStyling;
