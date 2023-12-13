(()=>{

    const addNumber = ( a: number, b: number) => a + b;
    const greet  = (name : string) => `Hallo ${name}`;
    const saveTheWorld = () => `The world is sane`;

    let myFunction = addNumber;

    console.log(myFunction(2,3));

})()