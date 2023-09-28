import { createJob } from '../model/createJob';
const axios = require('axios');

module.exports.createJob = async function (Job : createJob ) {
    try {
        const response = await axios.post(process.env.API_URL+'/api/create-job-roles');
        return response.data;
    } catch (e) {
        if(e.response.status === 500){
            throw new Error('Error connecting to database')
        }else if (e.response.status === 400) {
           throw new Error('Failed to Create new Job Role') 
        }
    }
}