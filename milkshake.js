const chooseFlavour = require('./flavour.js');

async function makeMilkShake() {
    console.log(`1. Pour Milk into Glass`);
    let flavour = await chooseFlavour();
        console.log(`3. mmmm, this ${flavour} flavour milkshake is so nice!`);
   
}

makeMilkShake();