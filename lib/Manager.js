//Exporting parent class Employee

const Employee = require ('./Employee');

// Manager constructor extends to Employee constructor

class Manager extends Employee {
    constructor (name,id,email,officeNumber){

        //calling Employee constructor

        super (name,id,email);

        this.officeNumber = officeNumber;

    }

    // For fixed role Manager

    getRole () {

        return 'Manager';
    }
}

module.exports = Manager;