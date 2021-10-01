import axios from "axios";

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true,
    });
  }

  login = (email, password) => this.app.post("/login", { email, password });
  signup = ( email, password, photo, name, lastname, age, gender, height, weight) =>
    this.app.post("/signup", { email, password, photo, name, lastname, age, gender, height, weight});
  logout = () => this.app.get("/logout");
  isloggedin = () => this.app.post("/profile");
  updateAuth = (auth_id, photo, name, lastname, age, gender, height, weight) =>
    this.app.put(`/${auth_id}`, { photo, name, lastname, age, gender, height, weight });
}

export default AuthService;
