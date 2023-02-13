import Validator from '../app.js';

test.each([
    ['testName', true],
    ['test11Name', true],
    ['test-Name', true],
    ['test_Name', true],
    ['test777Name', true],
    ['test7007Name', true],
    ['test70707Name', true],
    ['1testName1', false],
    ['TESTNAME', true],
    ['___testname___', false],
    ['t1e2s3t4N5a6m7e', true],
])('Username Check', (name, expectedResult) => {
    const user = new Validator(name);
    expect(user.validateUsername(name)).toBe(expectedResult);
});
