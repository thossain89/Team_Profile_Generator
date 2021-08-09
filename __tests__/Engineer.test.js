// Test for Engineer Constructor

const Engineer = require('../lib/Engineer');

// Creating Engineering object

test('creating an engineer object', () => {

    const engineer = new Engineer('Mordred', 404, 'mordred@roundtable.com', 'killerMordred');

    expect(typeof engineer).toBe("object");
    
});

//getting input and extended Employee class for Engineer object

test('getting input for Engineer object', () => {

    const engineer = new Engineer('Mordred', 404, 'mordred@roundtable.com', 'killerMordred');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

// github username from getGithub()

test('gets engineer github username', () => {
    const engineer = new Engineer('Mordred', 404, 'mordred@roundtable.com', 'killerMordred');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Role from getRole() 

test('role of employee', () => {
    const engineer = new Engineer('Mordred', 404, 'mordred@roundtable.com', 'killerMordred');

    expect(engineer.getRole()).toEqual("Engineer");
});
