import {Login, ActiveSession, User } from "../model/auth";
const axios =require('axios');

module.exports.login = async function (login: Login): Promise<ActiveSession>{
    try{
        const response= await axios.post('http://localhost:8080/api/login', login)
        
        return response.data
    }catch (e) {
        // if(e.response.status === 401){
        //     throw new Error ('Your Email or Password is incorrect') 
        // }
        throw new Error ('Unable to Login')
       
    }
}

module.exports.register = async function (user: User): Promise<void>{
    try{
        const response= await axios.post('http://localhost:8080/api/register', user)
        
        return response.data
    }catch (e) {
        throw new Error ('Registration failure')
    }
}