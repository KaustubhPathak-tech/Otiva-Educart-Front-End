const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };
    case "GET_PREMIUM":
      return { ...state, data: null };
    case "SIGNUP":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, data: null };
    case "RESET":
      return { ...state, data: null };
    case "VERIFY":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };
    default:
      return state;
  }
};

export default authReducer;
