"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hallo ${name}`;
    const saveTheWorld = () => `The world is sane`;
    let myFunction = addNumber;
    console.log(myFunction(2, 3));
})();
