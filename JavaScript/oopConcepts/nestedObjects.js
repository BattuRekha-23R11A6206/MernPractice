// nested objects = objects within objects

let student = {
    name: "John",
    age: 20,
    subjects: { //student have subjects as objects
        math: 90,
        english: 85,
        science: 95
    },
    address: { // and then address as another object i.e nested object
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(student.name); // John
console.log(student.subjects.math);
student.greet(); // Hello, my name is John

/*for(const property in student){
    console.log(`${property}: ${student[property]}`);
}*/

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address; // address is an object
    }
}

class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
}

let address1 = new Address("456 Elm St", "Los Angeles", "90001");
let person1 = new Person("Alice", 30, address1);