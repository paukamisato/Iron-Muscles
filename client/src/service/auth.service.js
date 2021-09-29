import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5010/api/auth',
            withCredentials: true
        })
    }

    login = (email, password) => this.app.post('/login', {email, password})
    signup = (email, password, role, photo, personal_data) => this.app.post('/signup', { email, password, role, photo, personal_data })
    logout = () => this.app.get('/logout')
    isloggedin = () => this.app.post('/isloggedin')
}

export default AuthService