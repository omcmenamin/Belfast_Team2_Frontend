import { CapabilityLead } from '../model/capabilityLead';
const axios = require('axios');

module.exports.getCapabilityLeadByCapabilityId = async function (id: number): Promise<CapabilityLead> {
    if(id == null) {
        throw new Error('Invalid ID')
    }

    try {
        const response = await axios.get(process.env.API_URL + '/api/capability-lead-info/' + id);
        return response.data;
    } catch (e) {
        if(e.response.status === 404) {
            throw new Error('Capability Lead Does Not Exist');
        } else {
            throw new Error('Could Not Get Capability Lead Info');
        }

    }
}