import { baseUrl } from '../../.mocharc';
const axios = require('axios');

export const getAllKeyValues = async () => {
   const response = await axios.get(`${baseUrl}`);
   return response.data;
};

export const postKeyValue = async (mainKey, value) => {
  try {
    const response = await axios.post(`${baseUrl}`, {
      main_key: mainKey,
      value: value
    });

    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      console.log('Error: The key is not in the store');
    } else {
      console.log('Error: ' + error.message);
      }
    }
};

export const putKeyValue = async (mainKey, value) => {
  try {
    const response = await axios.put(`${baseUrl}`, {
      main_key: mainKey,
      value: value
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Quota reached');
    } else {
      throw new Error('Server error');
    }
  }
};

export const deleteKeyValue = async (mainKey) => {
    await axios.delete(`${baseUrl}`, {
      data: {
        main_key: mainKey
      }
    }).then((response) => {
      return response.data;
    }).catch((err) => {
      throw new Error(`${err} Server error`);
    });
  };