const accountId = 1234;
let accountPass = "3456";
var accountEmail = "Rohan@gmail.com";
accountCity = "jaipur";
let accountState;

// accountId=2 not allowed

accountPass = "3333";
accountEmail = "rgr@gmail.com";
accountCity = "Pune";

/*
Prefer not to use var
because of isse in Block scope & functional scope
*/

console.table([
    accountId, accountPass, accountEmail, accountCity, accountState,]);
