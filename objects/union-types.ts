(()=>{
    
    type Hero = {
        name: string;
        age?: number;
        power: string[],
        getName?: () => string;
    }
    
    let myCustomVariable: (string | number | Hero) = 'Fernando';
    console.log(typeof myCustomVariable);

    myCustomVariable ={
        name:'Bruce',
        age: 43,
        power: ['Flying','Super Strength']
    }

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})()