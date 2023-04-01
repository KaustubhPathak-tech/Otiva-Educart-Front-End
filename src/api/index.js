import axios from "axios";

const API = axios.create({ baseURL: "https://stack-overflow-server.vercel.app" }); //  
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
export const logIn = (authData) => API.post("/user/login", authData);
export const glogIn = (authData) => API.post("/user/glogin", authData);
export const logout = (authData) => API.post("/user/logout", authData);
export const getPremium = (authData) => API.post("/payment/checkout", authData);
export const VerifiedPayment = (authData) => API.post("/payment/paymentverification", authData);
export const getkey = () => API.get("/getkey");
export const reset =(authData)=>API.patch("/user/reset",authData);
export const signUp = (authData) => API.post("/user/signup", authData);
export const verify=(authData)=>API.post("/user/verifyOTP",authData);

export const postQuestion = (questionData) =>
API.post("/questions/Ask", questionData);

export const getAllquestions = () => API.get("/questions/get");

export const postAnswer = (id, noOfAnswer, answerBody, userAnswered, userId) =>
API.patch(`/answer/post/${id}`, {
  noOfAnswer,
  answerBody,
  userAnswered,
  userId,
});

export const deleteaccount = (id) => API.delete(`/user/delete/${id}`);
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

export const deleteAnswer = (id, answerId, noOfAnswer) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswer });

export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const fetchAllUsers = () => API.get("/user/getAllUsers");


export const updateProfile =(id,updateData)=>API.patch(`/user/update/${id}`,updateData)