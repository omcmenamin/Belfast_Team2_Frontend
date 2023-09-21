const { validateLogin } = require('./validateLogin');
const { Login } = require('../model/auth'); 

describe('validateLogin', () => {
    test('isValidLogin_EmailTooLong', () => {
        const login = new Login("ssssssssssssssssssandjbfsdhjbfdhsjbfhjsdbfhjdsbfjhbsdhfjbsdhjfbsdhjfbdsjhfbsdjhbfdshjfbjhsdbf@example.com", "password123");
        const result = validateLogin(login);
        expect(result).toBe("Email greater than 64 characters");
    });

    test('isValidLogin_EmailMissingAtSymbol', () => {
        const login = new Login("noAtSymbol.com", "password123");
        const result = validateLogin(login);
        expect(result).toBe("Email must contain an '@' symbol");
    });

    test('isValidLogin_PasswordTooShort', () => {
        const login = new Login("test@example.com", "123");
        const result = validateLogin(login);
        expect(result).toBe("Password length not between 8 and 64 characters");
    });

    test('isValidLogin_ValidLogin', () => {
        const login = new Login("sucess@example.com", "password123");
        const result = validateLogin(login);
        expect(result).toBeNull();
    });
});
