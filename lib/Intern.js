// Exporting from parent class Employee

const Employee = require ("./Employee");

// Intern constructor extending to Employee class

class Intern extends Employee {
    constructor (name,id,email,school){
        //Calling Employee Constructor
        super (name,id,email);

        this.school=school;
    }

    // Getting school name from input

    getSchool(){
        return this.school;
    }

    // Override title to intern

    getRole(){
        return 'Intern';
    }
    
}

module.exports = Intern;