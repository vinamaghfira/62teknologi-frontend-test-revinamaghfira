import axios from 'axios'

const API_KEY = 'Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx';
const BASE_URL = 'https://api.yelp.com/v3/businesses'
const CORS_BYPASS = 'https://cors-anywhere.herokuapp.com/';
const API_URL = CORS_BYPASS + BASE_URL

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
}

export const getBusiness = params => {
    return axios({
        method: 'GET',
        url: `${API_URL}/search`,
        params,
        headers
    })
}

export const getDetailBusiness= (businessId) => {
    return axios({
      method: 'GET',
      url: `${API_URL}/${businessId}`,
      headers
    });
  }

  export const getDetailBusinessReview= (businessId) => {
    return axios({
      method: 'GET',
      url: `${API_URL}/${businessId}/reviews`,
      headers
    });
  }