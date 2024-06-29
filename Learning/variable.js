const accountId = 12345
let accountEmail  = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2  : so such changes are not allowed kyunki const hai
// also prefer not to use var beacuse of issues in block scope and function scope  
accountEmail = "heellooo"
accountPassword = "13567"
accountCity = "hi"
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity])