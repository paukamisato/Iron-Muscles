import { Container, Form, Button, Card, Col } from "react-bootstrap";
import AuthService from "../../../../service/auth.service";
import { useFiledUpload } from "../../../hooks/useFiledUpload";
import { useForm } from "../../../hooks/useForm";
import "../Profile/Profile.css";

const authService = new AuthService();

const Profile = ( props ) => {
  
  const [ value, handleChange ] = useForm({
    ...props.loggedUser,
  });
  const { _id, photo, name, lastname, age, gender, height, weight } = value;
  console.log(_id, photo, name, lastname, age, gender, height, weight)
  const [image, handleFileUpload] = useFiledUpload("");
 
  const handleFormSubmit = (e) => {
    
    e.preventDefault(); 
    
    authService
      .updateAuth( _id, image, name, lastname, age, gender, height, weight )
      .then(( res ) => {
        props.storeUser(res.data.user);
        props.history.push("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      { props.loggedUser._id ? (
        <Container>
          <h4 className="profile">Personal Information</h4>
          <Col className="photo">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={ photo } />
            </Card>
          </Col>
          <Form onSubmit={handleFormSubmit} className="form-profile">
            
            <Form.Group className="mb-3-profile" controlId="formFile">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                onChange={ handleFileUpload }
                type="file"
                placeholder="Photo"
              />
            </Form.Group>
            
            <Form.Group className="mb-3-profile" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={ name }
                onChange={ handleChange }
                type="text"
                placeholder="Name"
              />
            </Form.Group>
           
            <Form.Group className="mb-3-profile" controlId="formBasicLastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                name="lastname"
                value={lastname}
                onChange={ handleChange }
                type="text"
                placeholder="Lastname"
              />
            </Form.Group>
            <Form.Group className="mb-3-profile" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                name="age"
                value={ age }
                onChange={ handleChange }
                type="number"
                placeholder="Age"
              />
            </Form.Group>
            <Form.Group className="mb-3-profile" controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                name="gender"
                value={ gender }
                onChange={ handleChange }
                type="text"
                placeholder="Gender"
              />
            </Form.Group>
            <Form.Group className="mb-3-profile" controlId="formBasicHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control
                name="height"
                value={ height }
                onChange={ handleChange }
                type="number"
                placeholder="Height"
              />
            </Form.Group>
            <Form.Group className="mb-3-profile" controlId="formBasicWeight">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                name="weight"
                value={ weight }
                onChange={ handleChange }
                type="number"
                placeholder="Weight"
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Save
            </Button>
          </Form>
        </Container>
      ) : (<p>Loading....</p>)}
    </>
  );
};

export default Profile;
