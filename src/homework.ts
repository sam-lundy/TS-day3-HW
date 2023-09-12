// 1. Given the data below, define a type alias for representing users.

// let users = [  
//     {
//         name:'Shoha Tsuchida',
//         age:99,
//         company:'Coding Temple'
//     },  
//     {
//         name:'Dylan Katina',
//         age:99
//     }
// ];

//Creating type definition for users
type User = {
    name: string;
    age: number;
    company?: string;    //company is optional
}

let users: User[] = [      //defining type for users as array of strings
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];    // Can yall share the formula of eternal youth or do we get that after graduation???



// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

// name: string would be too generic here and allow for any string to be set as type day of the week.
// We have to use a string literal union type:

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

// This way, if we were to invent a new day, say.. Dizzlyday, unfortunately we wouldn't be able to type it as such

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string
    ) {}


    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const student = new Person("Samuel", "Lundy");
console.log(student.fullName);

// our getter here is a method fullName with type string that returns string literals for this.firstName and this.lastName


// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        public salary: number    // public for the new attribute of salary
    ) {
        super(firstName, lastName);   // Calling constructor of the Person class with super
    }
}



// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface CtEmployee {   // had to use something other than Employee as it was defined above
    name: string;
    salary: number;
    address: Address   //pulls the interface for Address for employee address
}

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

let employee: CtEmployee = {  //setting type of employee to the interface CtEmployee
    name:'Christian Askew',
    salary:1_000_000,   //gettin paid fr
    address: {
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};