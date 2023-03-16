import {getAllKeyValues, postKeyValue, putKeyValue, deleteKeyValue} from '../utils/api-request';
import { dataApi } from '../data/api-data';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

describe('Validate API response', async () => {
    it('GET key-value', async()=>{
      await expect(getAllKeyValues()).to.be.fulfilled
        .then(response => 
          expect(response.status).to.be.eql(200));
    });

    it('POST key-value', async()=>{
      await postKeyValue(`${dataApi.main_key}`,`${dataApi.value}`)
    });

    it('PUT key-value', async()=>{
      await putKeyValue(`${dataApi.main_key}UPDATED`,`${dataApi.value}`)
    });

    it('DELETE key-value', async()=>{
      await deleteKeyValue(`${dataApi.main_key}UPDATED`)
    })
});
 