const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('kazi', 1, 'kazi@email.com', 'UofM');
    expect(intern.school).toEqual(expect.any(String));
});

test('get school detail', () => {
    const intern = new Intern('kazi', 1, 'kazi@email.com', 'UofM');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get the role of intern', () => {
    const intern = new Intern('kazi', 1, 'kazi@email.com', 'UofM');
    expect(intern.getRole()).toEqual("Intern");
});