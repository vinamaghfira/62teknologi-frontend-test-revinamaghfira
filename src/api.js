import axios from 'axios'

const API_KEY = 'Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx';
const BASE_URL = 'https://api.yelp.com/v3/businesses/search'
const CORS_BYPASS = 'https://cors-anywhere.herokuapp.com/';
const API_URL = CORS_BYPASS + BASE_URL

export const getBusiness = params => {
    return axios({
        method: 'GET',
        url: API_URL,
        params,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        }
    })
}