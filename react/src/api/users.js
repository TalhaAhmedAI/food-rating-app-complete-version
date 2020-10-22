import axios from "axios";

const url = "http://localhost:3001";

export const registerUser = ({ name, email, password }) => {
  const apiEndpoint = url + "/users";
  axios.post(apiEndpoint, {
    name,
    email,
    password,
  });
};

export const login = ({ email, password }) => {
  const apiEndpoint = url + "/auth";
  const response = axios.post(apiEndpoint, { email, password });
  return response;
};

export const getUsers = () => {
  const apiEndpoint = url + "/users";
  const response = axios.get(apiEndpoint);
  return response;
};

export const getUser = (id) => {
  const apiEndpoint = url + `/users/${id}`
  const response = axios.get(apiEndpoint)
  return response
}

export const updateUser = (id, data) => {
  const apiEndpoint = url + `/users/${id}`
  const response = axios.put(apiEndpoint, data)
  return response
}

export const deleteUser = (id) => {
  const apiEndpoint = url + `/users/${id}`;
  const response = axios.delete(apiEndpoint);
  return response;
};


