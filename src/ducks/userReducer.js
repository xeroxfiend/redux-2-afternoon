import axios from "axios";

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};

export const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export function requestUserData() {
  const data = axios.get("/auth/user-data").then(res => res.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA + "_PENDING":
      return {...state, loading: "Loading..."};
    case REQUEST_USER_DATA + "_REJECTED":
      return {...state};
    case REQUEST_USER_DATA + "_FULFILLED":
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    default:
      return state;
  }
}
