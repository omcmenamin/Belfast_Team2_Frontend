var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;

const createJobService = require('../../../service/createJobService');
const createJob = {
    jobID : 1,
    jobRoleName: 'Test',
    jobSpecification : 'Test Spec',
    bandID: 1,
    responsibilities: 'Test Responsibility',
    sharePointLink: 'Test Sharepoint'
}
describe('createJobService', function () {
    describe('createJobService', function () {
      it('should create a new Job Role', async () => {
        var mock = new MockAdapter(axios);

        const data=[createJob];

        mock.onPost(process.env.API_URL+'/api/create-job-roles').reply(201, data);

        var result = await createJobService.createJob();

        expect(result[0]).to.deep.equal(createJob)
      })


      it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios);

        mock.onPost(process.env.API_URL+'/api/create-job-roles').reply(500);

        var error;

        try {
          await createJobService.createJob()
        } catch (e) { 
          var error = e.message
        }
        expect(error).to.equal('Could not create JobRoles')
      })
    })
})
