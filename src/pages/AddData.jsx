import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
 
function AddData() {
  const name = useRef("");
  const username = useRef("");
  const email = useRef("");
  const website = useRef("");
  const phone=useRef(""); 
  const street = useRef("");
  const city = useRef("");
  const zipcode = useRef("");
  
  const navigate = useNavigate();
 
  const addDataHandler = () => {
    var payload = {
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
      website: website.current.value,
      phone:phone.current.value,
       // the address object with its fields
       address: {
        street: street.current.value,
        city: city.current.value,
        zipcode: zipcode.current.value,
      },

    };
    axios.post("https://64f345b0edfa0459f6c6749b.mockapi.io/api/users/data", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <legend className="m-3" style={{color:"peru"}}><strong>Create</strong></legend>
      <hr/>

      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" ref={username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" ref={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" ref={website} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" ref={phone} />
        </Form.Group>
           {/* Add the address fields to the form */}
           <Form.Group className="mb-3" controlId="formStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" ref={street} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" ref={city} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formZipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control type="text" ref={zipcode} />
        </Form.Group>
        <Button variant="dark" type="button" onClick={addDataHandler}>
          Add
        </Button>
      </Form>
    </>
  );
}
export default AddData;