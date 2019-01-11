const chooseFlavour = () =>{
    return new Promise((resolve, reject)=> {
        const flavour = ['Vanilla', 'Chocolate', 'Strawberry', 'Banana', 'Oreo'];
        setTimeout(()=> {
            let randomiser = Math.floor(Math.random()*5);
            let intoGlass = flavour[randomiser];
            console.log(`2. Today I will add ${intoGlass} flavour to add to my milk`)
            resolve(intoGlass);
        }, 2000)
    })
}
module.exports = chooseFlavour;