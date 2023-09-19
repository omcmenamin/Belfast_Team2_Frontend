import { JobSpec } from '../model/jobSpec';
const axios = require('axios');
require('dotenv').config();

module.exports.getJobspecById = async function (id: number): Promise<JobSpec> {
    try {
        const response = await axios.get(process.env.URL+'/job-specification/'+ id);

        return response.data;
    } catch (e) {
        throw new Error('Could not get Job Specification by ID')
    }
}
