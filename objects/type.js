"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['Supervelocity', 'Time travel']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        power: ['Supervelocity'],
        getName() {
            return this.name;
        }
    };
})();
