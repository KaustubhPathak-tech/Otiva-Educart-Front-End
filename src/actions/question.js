import * as api from "../api";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllquestions());
    navigate("/");
  } catch (error) {
    
    console.log(error);
    toast(error.response.data);
    <ToastContainer/>
  }
};

export const fetchAllquestions = () => async (dispatch) => {
  try {
    
    const { data } = await api.getAllquestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
    toast(error.response.data);
    <ToastContainer/>
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    const { data } = api.deleteQuestion(id);
    dispatch(fetchAllquestions());

    navigate("/");
  } catch (error) {
    console.log(error);
    toast(error.response.data);
    <ToastContainer/>
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswer, answerBody, userAnswered, userId } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswer,
      answerBody,
      userAnswered,
      userId
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllquestions());
  } catch (error) {
    console.log(error);
    toast(error.response.data);
    <ToastContainer/>
  }
};

export const deleteAnswer = (id, answerId, noOfAnswer) => async (dispatch) => {
  try {
    const { data } = await api.deleteAnswer(id, answerId, noOfAnswer);
    dispatch(fetchAllquestions());
  } catch (error) {
    console.log(error);
    toast(error.response.data);
    <ToastContainer/>
  }
};

export const voteQuestion =(id,value,userId)=>async(dispatch)=>{
  try {
    const {data} =await api.voteQuestion(id,value,userId)
    dispatch(fetchAllquestions())
  } catch (error) {
    console.log(error);
    toast(error.response.data);
    <ToastContainer/>
  }
}
