const { isValidRegister } = require('./isValidRegister');
const { Register } = require('../model/auth');

describe('isValidRegister', () => {
    test('isValidRegister_EmailTooLong', () => {
        const register = new Register("ssssssssssssssssssandjbfsdhjbfdhsjbfhjsdbfhjdsbfjhbsdhfjbsdhjfbsdhjfbdsjhfbsdjhbfdshjfbjhsdbf@example.com", "password123");
        const result = isValidRegister(register);
        expect(result).toBe("Email greater than 64 characters");
    });

    test('isValidRegister_EmailMissingAtSymbol', () => {
        const register = new Register("noAtSymbol.com", "password123");
        const result = isValidRegister(register);
        expect(result).toBe("Email must contain an '@' symbol");
    });

    test('isValidRegister_PasswordTooShort', () => {
        const register = new Register("test@example.com", "123");
        const result = isValidRegister(register);
        expect(result).toBe("Password length not between 8 and 64 characters");
    });

    test('isValidRegister_ValidRegister', () => {
        const register = new Register("sucess@example.com", "password123");
        const result = isValidRegister(register);
        expect(result).toBeNull();
    });
});
