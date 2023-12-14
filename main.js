"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join('')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hallo ${name}`;
    const saveTheWorld = () => `The world is sane`;
    let myFunction = addNumber;
    console.log(myFunction(2, 3));
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batisignal activated';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5];
    numbers.push(11);
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
(() => {
    const batman = 'Batman';
    const green = "Green";
    const blackVolcan = `Heroe: Black Volcan`;
    console.log(`I´m ${batman}`);
    console.log(batman.toUpperCase());
})();
(() => {
    const hero = ['Dr Strange', 200, true];
})();
(() => {
    function callBatman() {
    }
    callBatman();
})();
//# sourceMappingURL=main.js.map