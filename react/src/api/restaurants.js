import axios from 'axios'

const url = "http://localhost:3001";

export const registerRestaurant = async (input) => {
    const apiEndpoint = url + '/restaurants' 
    const response = axios.post(apiEndpoint, input)
    return response
}

export const getRestaurants = () => {
    const apiEndpoint = url + '/restaurants'
    const response = axios.get(apiEndpoint)
    return response
}

export const getRestaurant = (id) => {
    const apiEndpoint = url + `/restaurants/${id}`
    const response = axios.get(apiEndpoint)
    return response
  }
  
  export const updateRestaurant = async (id, data) => {
    const apiEndpoint = url + `/restaurants/${id}`
    const response = await axios.put(apiEndpoint, data)
    return response
  }
  
  export const deleteRestaurant = (id) => {
    const apiEndpoint = url + `/restaurants/${id}`;
    const response = axios.delete(apiEndpoint);
    return response;
  };