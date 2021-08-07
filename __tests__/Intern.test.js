// Test for intern

const Intern = require('../lib/Intern');

// Checking creation of Intern object

test('creation of Intern object', () => {

    const intern = new Intern('Galahad', 200, 'galahad@roundtable.com', 'Shield of Camelot Public School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

// school name from getSchool()
test('gets Intern school', () => {
    const intern = new Intern('Galahad', 200, 'galahad@roundtable.com', 'Shield of Camelot Public School');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()

test('role of employee', () => {
    const intern = new Intern('Galahad', 200, 'galahad@roundtable.com', 'Shield of Camelot Public School');

    expect(intern.getRole()).toEqual("Intern");
}); 

