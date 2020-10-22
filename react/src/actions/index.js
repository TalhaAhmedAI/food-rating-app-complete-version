import axios from "axios";
const url = "http://localhost:3001/";

export const submitLocation = (location) => {
  return {
    type: "SUBMIT_LOCATION",
    payload: location,
  };
};

export const getUser = () => async (dispatch) => {
  const apiEndpoint = url + 'users/:id'
  const response = await axios.get(apiEndpoint)

  dispatch({type: 'GET_USER', payload: response})
}

export const fetchRests = () => async (dispatch) => {
  const apiEndpoint = url
  const response = await axios.get(apiEndpoint);

  dispatch({ type: "FETCH_RESTS", payload: response });
};

export const selectRest = (rest) => {
  return {
    type: "SELECT_REST",
    payload: rest,
  };
};
