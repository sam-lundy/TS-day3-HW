"use strict";
let users = [
    {
        name: 'Shoha Tsuchida',
        age: 99,
        company: 'Coding Temple'
    },
    {
        name: 'Dylan Katina',
        age: 99
    }
];
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const student = new Person("Samuel", "Lundy");
console.log(student.fullName);
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employee = {
    name: 'Christian Askew',
    salary: 1000000,
    address: {
        street: 'Thieves st',
        city: 'Seattle',
        zipCode: 98101
    }
};
