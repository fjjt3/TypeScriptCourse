(()=>{
    
    type Avenger = {
        name: string,
        weapon: string;
    }

    const ironman: Avenger = {
        name: "Iron Man",
        weapon: 'Armor suit'
    }

    const captAmerica: Avenger = {
        name: "Capitan",
        weapon: 'shield'
    }

    const thor: Avenger = {
        name: "Thor",
        weapon: 'Mjolnir'
    }

    const avengers = [ ironman, thor, captAmerica];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }

})()