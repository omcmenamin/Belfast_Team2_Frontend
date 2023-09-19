import { JobSpec } from '../model/jobSpec';
const axios = require('axios');
require('dotenv').config();

module.exports.getJobspecById = async function (id: number): Promise<JobSpec> {
    if(id == null){
        throw new Error('Invalid ID')
    }
    
    try {
        const response = await axios.get(process.env.URL+'/job-specification/'+ id);
        return response.data;
    } catch (e) {
        if(e.response.status === 400){
            throw new Error('Job does not exist')
        }else{
           throw new Error('Could not get Job Specification') 
        }
        
    }
}
