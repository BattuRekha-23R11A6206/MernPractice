//======================File System Module======================//

//========sync and async file system operations========//

// sync is nothing but synchronous
// async is nothing but asynchronous

/*Code executes line by line

Each operation must complete before moving to the next line

Blocks other operations until finished*/

//========================code========================//

//======================1. Synchronous Approach (Blocking)======================//

/*const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'} // append to the file, if not present create new file
)*/

//============end of synchronous file system operations================//


//======================UTF-8 Encoding Means======================//

/*// Without encoding, you get raw bytes (Buffer)
const rawBytes = readFileSync('./file.txt');
console.log(rawBytes); 
// Output: <Buffer 48 65 6c 6c 6f> (hexadecimal numbers)

// With UTF-8 encoding, you get readable text
const text = readFileSync('./file.txt', 'utf8');
console.log(text);
// Output: "Hello" (readable string)

utf - uniform transformation format - 8
It is a character encoding capable of encoding all possible characters (called code points) in Unicode. 
The encoding is variable-length and uses 8-bit code units.

*/ 

//=================================================================//

// Note: readFileSync and writeFileSync are blocking, meaning they stop the execution of code until the operation is complete.

// For non-blocking (asynchronous) operations, you can use readFile and writeFile from the 'fs' module.



//======================2. Asynchronous Approach (Non-blocking)======================//

//What "Asynchronous" Means:

/*Operations start and continue in the background

Code doesn't wait for operations to complete

Uses callbacks to handle results when ready

Doesn't block other operations*/

const {readFile , writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{ //(err,result) is callback function
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`,(err,result)=>{ // no result to return, only error if any
            if(err){
                console.log(err);
                return;
            }
            console.log(result); // Output: undefined (writeFile doesn't return data)
        })
    })
})

//=============Expalnaton for Asynchronous Code=======================================================================================//

const { readFile, writeFile } = require('fs');

// =============================================
// ASYNC FILE OPERATIONS - KEY CONCEPTS
// =============================================

// ❗ WHY ASYNC?
// - Non-blocking: Other operations can run while files are being read/written
// - Better performance for multiple operations
// - Essential for web servers handling multiple requests

// ⏰ EXECUTION FLOW:
// 1. readFile() STARTS but doesn't wait - continues immediately
// 2. Code after readFile() runs RIGHT AWAY (files not ready yet)
// 3. Later, when OS finishes reading, the callback function runs
// 4. This is why you can't use file data outside callbacks

// 🔄 CALLBACK HELL PROBLEM:
// - Nested callbacks become hard to read/maintain
// - Error handling gets complicated
// - Hard to manage multiple async operations

readFile('./content/first.txt', 'utf8', (err, result) => {
    // =============================================
    // INSIDE FIRST CALLBACK - FIRST.TXT IS READY
    // =============================================
    
    // ✅ 'result' now contains first.txt content
    // ✅ This runs ONLY when first.txt is completely read
    // ❌ Cannot access 'result' outside this function
    
    if (err) {
        console.log('Error reading first file:', err);
        return; // Stop execution if error
    }
    const first = result;
    
    readFile('./content/second.txt', 'utf8', (err, result) => {
        // =============================================
        // INSIDE SECOND CALLBACK - BOTH FILES READY
        // =============================================
        
        // ✅ Now we have BOTH first.txt AND second.txt content
        // ✅ This is the earliest point where both files are available
        // ❌ Still can't use this data outside these callbacks
        
        if (err) {
            console.log('Error reading second file:', err);
            return;
        }
        const second = result;
        
        // Write combined result to new file
        writeFile('./content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                // =============================================
                // INSIDE WRITE CALLBACK - FILE WRITTEN
                // =============================================
                
                // ✅ This runs when writing is complete
                // ✅ File 'result-async.txt' now exists
                // ❌ 'result' parameter is undefined for writeFile
                
                if (err) {
                    console.log('Error writing file:', err);
                    return;
                }
                console.log('✅ Success! result-async.txt created');
                console.log('📁 Check content/ folder for your file');
            }
        );
    });
});

// =============================================
// CODE OUTSIDE CALLBACKS - RUNS IMMEDIATELY
// =============================================

// ❗ THIS RUNS BEFORE ANY FILES ARE READ!
// ❗ Files are still being read in the background
// ❗ You CANNOT access file data here
// ✅ Use this for tasks that don't need file data

console.log('Program started - files processing in background...');
console.log('This message appears immediately, before files are read!');

// =============================================
// COMMON MISTAKES & SOLUTIONS
// =============================================

// ❌ MISTAKE: Trying to use file data outside callbacks
// let fileData;
// readFile('./file.txt', 'utf8', (err, data) => {
//     fileData = data; // This happens LATER
// });
// console.log(fileData); // ❌ UNDEFINED - runs TOO EARLY

// ✅ SOLUTION: Put file-dependent code INSIDE callbacks
// readFile('./file.txt', 'utf8', (err, data) => {
//     console.log(data); // ✅ Works - runs when file is ready
//     processFile(data); // ✅ Call functions that need the data
// });

// =============================================
// CHECKING IF IT WORKED
// =============================================

// After running this code:
// 1. Check if file exists: ls content/result-async.txt
// 2. View file content: cat content/result-async.txt
// 3. The file should contain combined text from both files

// =============================================
// BETTER PATTERNS (COMING LATER)
// =============================================

// 🔜 Promises - Cleaner than callbacks
// 🔜 Async/Await - Makes async code look synchronous  
// 🔜 fs.promises - Built-in promise-based file operations

// =============================================
// REMEMBER:
// =============================================

// ✅ Async = "Start now, finish later"
// ✅ Results available ONLY inside callbacks
// ✅ Never block the event loop
// ✅ Use for I/O operations (files, network, databases)

//====================================================================================================//
