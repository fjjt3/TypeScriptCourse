(()=>{
    

    type Hero = {
        name: string;
        age?: number;
        power: string[],
        getName?: () => string;
    }

    let flash: Hero ={
            
        name: 'Barry Allen',
        age: 24,
        power: ['Supervelocity', 'Time travel']
    }

    let superman: Hero ={
            
        name: 'Clark Kent',
        age: 60,
        power: ['Supervelocity'],
        getName(){
            return this.name;
        }
    }

    
})()