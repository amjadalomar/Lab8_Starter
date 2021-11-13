// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('(310)828-2882 true', () => {
  expect(functions.isPhoneNumber('(310)828-2882')).toBe(true);
});

test('1(310)998-2882 true', () => {
    expect(functions.isPhoneNumber('1(310)998-2882')).toBe(true);
});

test('2882 false', () => {
  expect(functions.isPhoneNumber('2882')).toBe(false);
});

test('310--89-7777 false', () => {
    expect(functions.isPhoneNumber('310--89-7777')).toBe(false);
});




test('x@yahoo.com true', () => {
    expect(functions.isEmail('x@yahoo.com')).toBe(true);
});

test('y@clubpenguinmail.com true', () => {
    expect(functions.isEmail('y@clubpenguinmail.com')).toBe(true);
});

test('xyahoo.com false', () => {
    expect(functions.isEmail('xyahoo.com')).toBe(false);
});

test('yahoo true', () => {
    expect(functions.isEmail('yahoo')).toBe(false);
});




test('lordHH3lp true', () => {
    expect(functions.isStrongPassword('lordHH3lp')).toBe(true);
});
test('lordHH3lp true', () => {
    expect(functions.isStrongPassword('lordHH3lp')).toBe(true);
});
test('l false', () => {
    expect(functions.isStrongPassword('1')).toBe(false);
});
test('9iiiiiiiiiiiii false', () => {
    expect(functions.isStrongPassword('9iiiiiiiiiiiii')).toBe(false);
});


test('11/28/1998 true', () => {
    expect(functions.isDate('11/28/1998')).toBe(true);
});
test('1/28/1998 true', () => {
    expect(functions.isDate('1/28/1998')).toBe(true);
});
test('11 false', () => {
    expect(functions.isDate('11')).toBe(false);
});
test('11/28/19989 false', () => {
    expect(functions.isDate('11/28/19989')).toBe(false);
});
  


test('043', () => {
    expect(functions.isHexColor('043')).toBe(true);
});
test('000000', () => {
    expect(functions.isHexColor('000000')).toBe(true);
});
test('3043', () => {
    expect(functions.isHexColor('3043')).toBe(false);
});
test('f3g', () => {
    expect(functions.isHexColor('f3g')).toBe(false);
});