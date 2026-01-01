const fs = require('fs');


// ==========reading an existing file==========

fs.readFile('first.txt','utf8', (err,data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);  
}); //utf8 to get string output instead of buffer

//===========creating a new file dynamically====================================

// fs.writeFile('newFile.txt','This is the newly created file', (err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File created successfully');
// });

//===========appending data to an existing file======================================

// const contentSample = 'This is the newly created file1';
// fs.writeFile('newFile.txt', contentSample, (err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File created successfully');
//     //append data to the newly created file
//     fs.appendFile('newFile.txt','\nThis is the appended data', (err) =>{
//         if(err){    
//             console.log(err);
//             return;
//         }   
//         console.log('Data appended successfully');
//     });
// });

//===========renaming a file======================================

// fs.rename('newFile.txt','renamedFile.txt', (err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File renamed successfully');
// });

//===========deleting a file======================================

fs.unlink('renamedFile.txt', (err) =>{  
    if(err){
        console.log(err);
        return;
    }
    console.log('File deleted successfully');
});
