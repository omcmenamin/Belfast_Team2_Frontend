import { JobSpec } from '../model/jobSpec';
const axios = require('axios');


module.exports.getJobspecById = async function (id: number): Promise<JobSpec> {
    try {
        const response = await axios.get('http://localhost:8080/api/job-specification/'+ id);

        return response.data;
    } catch (e) {
        throw new Error('Could not get Job Specification by ID')
    }
}