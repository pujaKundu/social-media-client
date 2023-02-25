import axios from "axios";

// export const loginCall = async (userCredential, dispatch) => {
//   dispatch({ type: "LOGIN_START" });
//   try {
//       const res = await axios.post(
//         "https://socialnetworkingsitebackend.onrender.com/auth/login",
//         userCredential
//       );
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//   } catch (error) {
//        dispatch({ type: "LOGIN_FAILURE", payload: error });
//   }
// };
export const loginCall = async (userCredential) => {
  try {
    const res = await axios.post(
      "https://socialnetworkingsitebackend.onrender.com/api/auth/login",
      userCredential
    );
    return res;
  } catch (err) {
    throw err;
  }
};