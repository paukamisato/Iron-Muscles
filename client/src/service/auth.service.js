import axios from "axios";

const AuthService = () =>  {
  
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + "/auth",
    withCredentials: true,
  });

  const login = (email, password) => instance.post("/login", { email, password });
  const signup = ( email, password, photo, name, lastname, age,  gender, height,  weight ) =>
  instance.post("/signup", { email, password, photo, name, lastname, age,  gender, height,  weight });
  const logout = () => instance.get("/logout");
  const isloggedin = () => instance.post("/profile");
  const updateAuth = (auth_id, photo, name, lastname, age, gender, height, weight) =>
  instance.put(`/${auth_id}`, {auth_id, photo, name, lastname, age, gender, height, weight });

  return [ login, signup, logout, isloggedin, updateAuth ];
}

export default AuthService;
