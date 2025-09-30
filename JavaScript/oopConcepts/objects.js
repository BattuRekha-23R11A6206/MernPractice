//object = collection of related properties and methods
// syntax : { key: value, key: value, ..., function() }

//same as in java and python


let user = {
    name: "John",
    age: 30,
    email: "",
    location: "USA",
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function() { //method            
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },  
    logBlogs: function() {
        console.log('this user has written the following blogs:');

        this.blogs.forEach(blog => { //this keyword refers to the current object
            console.log(blog);
        });}   
};

console.log(user);
console.log(user.name);