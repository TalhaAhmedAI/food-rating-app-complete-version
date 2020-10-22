import { combineReducers } from "redux";

const submitLocationReducer = (location = null, action) => {
  if (action.type === "SUBMIT_LOCATION") {
    return action.payload;
  }
  return location;
};

const fetchRestsReducer = (response = null, action) => {
  if (action.type === "FETCH_RESTS") {
    return action.payload;
  }
  return response;
};

const selectRestReducer = (rest = null, action) => {
  if (action.type === "SELECT_REST") {
    return action.payload;
  }
  return rest;
};

const getUserReducer = (user = null, action) => {
  if (action.type === 'GET_USER') {
    return action.payload
  }
  return user
}

export default combineReducers({
  location: submitLocationReducer,
  rests: fetchRestsReducer,
  rest: selectRestReducer,
  user: getUserReducer
});
