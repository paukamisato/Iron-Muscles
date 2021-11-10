import AuthService from "../../../../service/auth.service";
import { Container, Form, Button } from "react-bootstrap";
import "../Signup/Signup.css"
import { useForm } from "../../../hooks/useForm";
import { useFiledUpload } from "../../../hooks/useFiledUpload";

const authService = new AuthService();

const Signup = (props) => {

  const[ value, handleSelectInput ] = useForm({
    email: "",
    password: "",
    photo: "",
    name: "",
    lastname: "",
  })
  const { email,password, name, lastname } = value;
  const[ photo, handleFileUpload ] = useFiledUpload('');

  const handleFormSubmit = (e) => {
    
    e.preventDefault();    
    authService
      .signup( email, password, photo, name, lastname )
      .then((res) => props.history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
    <h4 className="title-signup">Signup</h4>
      <Form onSubmit={handleFormSubmit} className='form-signup'>
        <Form.Group className="mb-3-signup" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={ email }
            onChange={ handleSelectInput }
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3-signup" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            onChange={ handleSelectInput }
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3-signup" controlId="formFile">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            onChange={(e) => handleFileUpload(e)}
            type="file"
            placeholder="Photo"
          />
        </Form.Group>
       
        <Form.Group className="mb-3-signup" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
            onChange={ handleSelectInput }
            type="text"
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3-signup" controlId="formBasicLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            name="lastname"
            value={lastname}
            onChange={ handleSelectInput }
            type="text"
            placeholder="Lastname"
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form> 
    </Container>
  );
};
export default Signup;


