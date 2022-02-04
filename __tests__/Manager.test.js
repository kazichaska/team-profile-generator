
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('kazi', 1, 'kazi@email.com', 9);
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets role of employee', () => {
    const manager = new Manager('kazi', 1, 'kazi@email.com', 9);
    expect(manager.getRole()).toEqual("Manager");
});
