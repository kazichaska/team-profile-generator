const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('kazi', 1, 'kazi@email.com');
    expect(engineer.github).toEqual(expect.any(String));
});

test('get github acccount detail', () => {
    const engineer = new Engineer('kazi', 1, 'kazi@email.com');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of engineer', () => {
    const engineer = new Engineer('kazi', 1, 'kazi@email.com');
    expect(engineer.getRole()).toEqual("Engineer");
});


