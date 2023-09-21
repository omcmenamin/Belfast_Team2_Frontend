const { mock } = require('jest-mock-extended');
const Validator = require('../path/to/validator');
const Login = require('../path/to/login');
const Register = require('../path/to/register');

describe('ValidatorServiceTest', () => {
    let validator;

    beforeEach(() => {
        validator = mock(Validator);
    });

    test('testIsValidLogin_EmailTooLong', () => {
        const login = new Login("ssssssssssssssssssandjbfsdhjbfdhsjbfhjsdbfhjdsbfjhbsdhfjbsdhjfbsdhjfbdsjhfbsdjhbfdshjfbjhsdbf@example.com", "password123");
        validator.isValidLogin.mockReturnValue("Email greater than 64 characters");

        const result = validator.isValidLogin(login);

        expect(result).toBe("Email greater than 64 characters");
    });

    test('testIsValidLogin_EmailMissingAtSymbol', () => {
        const login = new Login("noAtSymbol.com", "password123");
        validator.isValidLogin.mockReturnValue("Email must contain an '@' symbol");
    
        const result = validator.isValidLogin(login);
    
        expect(result).toBe("Email must contain an '@' symbol");
    });
    
    test('testIsValidLogin_PasswordTooShort', () => {
        const login = new Login("test@example.com", "123");
        validator.isValidLogin.mockReturnValue("Password length not between 8 and 64 characters");
    
        const result = validator.isValidLogin(login);
    
        expect(result).toBe("Password length not between 8 and 64 characters");
    });
    
    test('testIsValidLogin_ValidLogin', () => {
        const login = new Login("success@example.com", "password123");
        validator.isValidLogin.mockReturnValue(null);
    
        const result = validator.isValidLogin(login);
    
        expect(result).toBeNull();
    });
    test('testIsValidRegister_EmailTooLong', () => {
        const register = new Register("ssssssssssssssssssandjbfsdhjbfdhsjbfhjsdbfhjdsbfjhbsdhfjbsdhjfbsdhjfbdsjhfbsdjhbfdshjfbjhsdbf@example.com", "password123", "Admin");
        validator.isValidRegister.mockReturnValue("Email greater than 64 characters");

        const result = validator.isValidRegister(register);

        expect(result).toBe("Email greater than 64 characters");
    });


    test('testIsValidRegister_EmailMissingAtSymbol', () => {
        const register = new Register("noAtSymbol.com", "password123", "Admin");
        validator.isValidRegister.mockReturnValue("Email must contain an '@' symbol");
    
        const result = validator.isValidRegister(register);
    
        expect(result).toBe("Email must contain an '@' symbol");
    });
    
    test('testIsValidRegister_PasswordTooShort', () => {
        const register = new Register("test@example.com", "123", "Employee");
        validator.isValidRegister.mockReturnValue("Password length not between 8 and 64 characters");
    
        const result = validator.isValidRegister(register);
    
        expect(result).toBe("Password length not between 8 and 64 characters");
    });
    
    test('testIsValidRegister_ValidRegister', () => {
        const register = new Register("success@example.com", "password123", "Admin");
        validator.isValidRegister.mockReturnValue(null);
    
        const result = validator.isValidRegister(register);
    
        expect(result).toBeNull();
    });
});
