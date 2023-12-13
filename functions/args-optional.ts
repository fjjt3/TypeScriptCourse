(() => {
 
    const fullName  = ( firstName: String, lastName?: String)=> {
        return `${firstName} ${lastName}`;
    }
    const name = fullName('Tony', 'Stark')
    
    console.log({name})

})()