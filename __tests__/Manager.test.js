
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('kazi', 1, 'kazi@email.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets role of employee', () => {
    const manager = new Employee('kazi', 1, 'kazi@email.com');
    expect(manager.getRole()).toEqual("Manager");
});
