(()=>{
    
    class Avenger {

        /* private name: string;
        public team: string;
        public realName?: string;*/
        static avgAge: number = 35; 

        constructor ( 
            private name: string,
            private team: string, 
            public realName?: string,
            avgAge: number = 55){
                Avenger.avgAge = avgAge;
            /* this.name = name;
            this.team = team;
            this.realName = realName; */
        }
    }

    const antMan: Avenger = new Avenger('AntMan', 'Captain');
    console.log(antMan);
    
    
})()