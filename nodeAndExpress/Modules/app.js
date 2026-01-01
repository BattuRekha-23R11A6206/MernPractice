/* Modules
// node uses CommonJS,   every file is module(by default) (******Note)
// Modules   - Encapsulated Code (only share minimum i.e what we want)

const names = require('./names');
//console.log(names);
const sayHi = require(`./utils`);
const data = require('./alternativeSyntax');

require('./wow'); // No variable assignment!

// Output in console: "the sum is: 15"

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)*/

//==================================================//

