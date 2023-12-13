"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['Supervelocity', 'Time travel']
    };
    flash = {
        name: 'CLark Kent',
        age: 60,
        power: ['Super power'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
