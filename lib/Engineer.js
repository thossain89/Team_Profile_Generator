// Exporting from parent class Employee

const Employee = require ("./Employee");

// Engineer constructor extends to Employee class

class Engineer extends Employee {
    constructor (name,id,email,github){

        //calling employee constructor

        super (name,id,email);

        this.github = github;
    }

    //Getting github input

    getGithub(){
        
        return this.github;
    }

    // set employee role to Engineer

    getRole(){
        return 'Engineer';
    }
}

module.exports= Engineer;