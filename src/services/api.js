// base url = https://api.json-generator.com/templates/ZM1r0eic3XEy/data

import axios from 'axios';

const baseUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
const key = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

axios.defaults.baseURL = baseUrl;

export const fetchJobs = async () => {
    const response = await axios.get(`?access_token=${key}`);
    console.log(response);    
    return response;
}

