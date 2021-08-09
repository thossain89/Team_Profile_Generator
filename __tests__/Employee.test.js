// Testing Employee Constructor

// Exporting Employee Constructor

const Employee = require('../lib/Employee');


//  verify creation of employee object after input

test('creating an employee object', () => {

    const employee = new Employee('Lancelot', 102, 'lancelot@roundtable.com');

    expect(typeof employee).toBe("object");
    
});

// Verifying name from getName()

test('Gets employee name input', ()=> {
    const employee = new Employee('Percival', 104,'percival@roundtable.com');

    expect(employee.name).toEqual(expect.any(String));
});

// Verifying input from getId()

test('Gets employee Id input', ()=> {
    const employee = new Employee('Gawain', 103,'gawain@roundtable.com');

    expect(employee.id).toEqual(expect.any(Number));
});

// verifying email input

test('Check employee email input', ()=> {
    const employee = new Employee('Lamorak', 105,'lamorak@roundtable.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

});
 
test('check role of employee', () => {
    const employee = new Employee('Gareth', 110, 'gareth@roundtable.com');

    expect(employee.getRole()).toEqual('Employee');

});

