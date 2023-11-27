import axios from 'axios'
export const fetchStackquestions = () => async (dispatch) => {
    try {
        const response = await axios.get(
          "https://stack-overflow-server.vercel.app/api/stackexchange"
        );
        dispatch({ type: "STACK_EXCHANGE", payload: response.data.items });
      } catch (error) {
        console.error(error);
      }
  };