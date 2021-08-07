// Test for Manager

const Manager = require('../lib/Manager');


// creating manager object

test('creation of manager object', () => {

    const manager = new Manager('Arthur', 100, 'arthur@roundtable.com', 1);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

// verify the office number

test('check office number input', () => {

    const manager= new Manager('Arthur', 100, 'arthur@roundtable.com', 1)

    expect(manager.officeNumber).toEqual(expect.any(Number))

});

// verify the role from get role

test('check what role', () => {

    const manager= new Manager('Arthur', 100, 'arthur@roundtable.com', 1)

    expect(manager.getRole()).toEqual('Manager');

});
