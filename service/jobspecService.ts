import { JobSpec } from '../model/jobSpec';
let axios = require('axios');

module.exports.getJobspecById = async function (id: number): Promise<JobSpec> {
    if(id == null){
        throw new Error('Invalid ID')
    }
    
    try {
        const response = await axios.get(process.env.API_URL+'/api/job-specification/'+ id);
        return response.data;
    } catch (e) {
        if(e.response.status === 404){
            throw new Error('Job does not exist')
        }else{
           throw new Error('Could not get Job Specification') 
        }
        
    }
}
