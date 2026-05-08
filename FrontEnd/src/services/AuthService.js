import API from "./api";

export const registerUser = async (userData) => {

    const res = await API.post("/auth/register", userData);

    return res.data;
};

export const loginUser = async (credentials) => {

  const res = await API.post(
      "/auth/login",
      credentials
  );

  // res.data itself is token

  localStorage.setItem(
      "token",
      res.data
  );

  return res.data;
};

export const logoutUser = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");
};