const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('kazi', 1, 'kazi@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

test('gets employees name an object', () => {
    const employee = new Employee('kazi', 1, 'kazi@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets an ID object for the employee', () => {
    const employee = new Employee('kazi', 1, 'kazi@email.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets a email object for the employee', () => {
    const employee = new Employee('kazi', 1, 'kazi@email.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get role of the employee', () => {
    const employee = new Employee('kazi', 1, 'kazi@email.com');
    expect(employee.getRole()).toEqual("Employee");
});