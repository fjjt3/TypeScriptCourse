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
(() => {
    const client = {
        name: 'John',
        age: 25,
        address: {
            id: 1,
            zip: '29003',
            city: 'Toronto'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let number;
})();
//# sourceMappingURL=main.js.map