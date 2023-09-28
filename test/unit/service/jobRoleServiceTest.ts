var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  

const jobRoleService = require('../../../service/jobRoleService');
const JobRole = {
    jobID : 1,
    jobRoleName: 'Test',
    jobSpecification : 'Test Spec',
    bandID: 1,
    responsibilities: 'Test Responsibility',
    sharePointLink: 'Test Sharepoint'
}
describe('JobRoleService', function () {
    describe('getJobRole', function () {
      it('should return job role from response', async () => {
        var mock = new MockAdapter(axios);

        const data=[JobRole];

        mock.onGet(process.env.API_URL+'/api/job-roles').reply(200, data);

        var result = await jobRoleService.getJobRoles();

        chai.expect(result[0]).to.deep.equal(JobRole)
      })

      it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios);

        mock.onGet(process.env.API_URL+'/api/job-roles').reply(500);

        var error;

        try {
          await jobRoleService.getJobRoles()
        } catch (e) { 
          var error = e.message
        }
        
        chai.expect(error).to.equal('Could not get JobRoles')
      })


    })
})
