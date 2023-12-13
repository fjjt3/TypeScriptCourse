"use strict";
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        power: ['Flying', 'Super Strength']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
