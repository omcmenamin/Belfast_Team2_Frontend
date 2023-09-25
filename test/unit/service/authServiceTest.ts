const { Login, Register } = require('../../../model/auth'); 
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
import { expect } from 'chai';

describe('AuthService', () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    it('should login successfully', async () => {
        const loginData = { email: "test@example.com", password: "password123" };
    
        mock.onPost(process.env.URL+'/login/', loginData).reply(200);
    
        try {
            await Login(loginData);
        } catch (e) {
            throw new Error('Expected login not to throw an error');
        }
    
    });
    it('should throw error when login fails', async () => {
        const loginData = { email: "test@example.com", password: "password123" };
    
        mock.onPost(process.env.URL+'/login/', loginData).reply(500);
    
        try {
            await Login(loginData);
        } catch (e) {
            expect(e.message).to.equal('Unable to Login');
        }
    });
    
    it('should register successfully', async () => {
        const registerData = { email: "test@example.com", password: "password123", role: "Admin" };
    
        mock.onPost(process.env.URL+'/register/', registerData).reply(200);
    
        try {
            await Register(registerData);
        } catch (e) {
            throw new Error('Expected register not to throw an error');
        }
    });
    
    it('should throw error when registration fails', async () => {
        const registerData = { email: "test@example.com", password: "password123", role: "Admin" };
    
        mock.onPost(process.env.URL+'/register/', registerData).reply(500);
    
        try {
            await Register(registerData);
        } catch (e) {
            expect(e.message).to.equal('Registration failure, please try again and make sure to enter a valid email and password');
        }
    });
})