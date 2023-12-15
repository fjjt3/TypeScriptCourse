(()=>{
    
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string ): string;
    }
        
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name : 'John',
        age : 25,
        address:{
            id: 1,
            zip: '29003',
            city: 'Toronto'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    }


})()