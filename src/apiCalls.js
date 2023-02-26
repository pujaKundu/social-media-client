import axios from "axios";

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