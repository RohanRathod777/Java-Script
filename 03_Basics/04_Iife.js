//Immediately invoked function expressions (IIFE)


(function one() {

    //name IIFE

    console.log(`DB CONNECTED`);

})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})(`Rohan`)