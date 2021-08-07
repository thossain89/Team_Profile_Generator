//Employee parent class constructor

class Employee {
    constructor (name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }

    //Getting name from name input

    getName(){
        return this.name;
            }
    //Getting ID from input

    getId(){
        return this.id;
    }

    //Getting email from input

    getEmail(){
        return this.email;
    }
    //Getting role type
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;