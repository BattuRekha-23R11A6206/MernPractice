//Synchronous = Executes line by line consecutively in a sequential manner
//              code that waits for an operation to complete before moving on
//              blocks the main thread
//              can cause performance issues with long-running tasks


//Asynchronous = Executes independently of the main program flow and can be paused and resumed
//              does not block the main thread
//              allows for concurrent operations
//              uses callbacks, promises, async/await

//Example of Synchronous code

function func1(callback){
    setTimeout(() => {console.log("Task 01");
    callback();}, 3000);
}

function func2(){
    console.log("Task 02");
}

func1(func2); //Task 01 (after 3 seconds) -> Task 02

//Example of Asynchronous code

function func3(){
    setTimeout(() => {console.log("Task 03");}, 3000);  
}

