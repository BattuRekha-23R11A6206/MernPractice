// Path Module - provides utilities for working with file and directory paths

const path = require('path');

console.log(path.sep); // not path.seperator rather it's sep :}

// Without path.join (manual concatenation - BAD)
const badPath = '/content' + '/' + 'subfolder' + '/' + 'test.txt';

// With path.join (GOOD - uses correct separator)
const goodPath = path.join('/content','subfolder','test.txt');
console.log(goodPath)

const base = path.basename(goodPath)
console.log(base) //test.txt is base here

// Resolve absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);


console.log(path.dirname(__filename)); // returns the path of current directory using path module output: C:\Users\user\OneDrive\Desktop\MernPractice\nodeAndExpress\Modules
console.log(path.basename(__filename)); // returns only the file name using path module output: pathModule.js
console.log(path.extname(__filename)); // returns the file extension using path module output: .js

