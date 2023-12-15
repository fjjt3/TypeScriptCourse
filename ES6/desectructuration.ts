(()=>{
    
   type Avengers =  {
        nick: string;
        ironman: string;
        active: boolean;
        power: number;
}

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downney Jr.',
        active: true,
        power: 1500.123
    }

    /* const { power, nick } = avengers
    console.log( power.toFixed(2), nick.toUpperCase() ) */

    const printAvenger = ({ironman, ...resto}: Avengers)=> {
        console.log( ironman, resto)
    }

    // with Arrays

    const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk'];

    const [capitan, ironman] = avengersArr;
    console.log({ ironman, capitan})

})()