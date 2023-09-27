const axios = require('axios');
import { JobRole } from '../model/jobRole';



module.exports.getJobRoles = async function(): Promise<JobRole[]> {
    try {
        const response = await axios.get(process.env.API_URL+'/api/job-roles');
        return response.data;
    } catch (e) {
           throw new Error('Could not get JobRoles') 
        }
        
    }
