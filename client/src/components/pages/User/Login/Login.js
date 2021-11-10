import { Container, Form, Button } from "react-bootstrap";
import AuthService from "../../../../service/auth.service";
import { useForm } from "../../../hooks/useForm";
import "../Login/Login.css"

const authService = new AuthService(); 

const Login = (props) => {

  const [ value, setvalue ] = useForm( {
    
    email: "",
    password: "", 

  } );

  const { email, password } = value;

  const handleFormSubmit = (e) => {

    e.preventDefault();

    authService
    .login(email, password)
    .then((res) => {
      props.storeUser(res.data);
      props.history.push("/profile");
    })
    .catch((err) => console.log(err));
  };
  

  return (
          <Container>
            <Form onSubmit={ handleFormSubmit } className='form-login'>
              <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className= "box"
                  name="email"
                  value={ email }
                  onChange={ setvalue }
                  type="text"
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className= "box"
                  name="password"
                  value={ password }
                  onChange={ setvalue }
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="dark
              " type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        );
};
export default Login;

