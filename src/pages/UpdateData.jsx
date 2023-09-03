import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
 
function UpdateData() {
  const name = useRef("");
  const username = useRef("");
  const email = useRef("");
  const website = useRef("");
  const phone=useRef(""); 
  const street = useRef("");
  const city = useRef("");
  const zipcode = useRef("");
 
  const { id } = useParams();
 
  const navigate = useNavigate();
 
  useEffect(() => {
    axios.get(`https://64f345b0edfa0459f6c6749b.mockapi.io/api/users/data/${id}`).then((response) => {
      name.current.value = response.data.name;
      username.current.value = response.data.username;
      email.current.value = response.data.email;
      website.current.value = response.data.website;
      phone.current.value = response.data.phone;
      street.current.value = response.data.address.street;
      city.current.value = response.data.address.city;
      zipcode.current.value = response.data.address.zipcode;
     
    });
  }, []);
 
  const updateDataHandler = () => {
    var payload = {
      name: name.current.value,
      username: username.current.value ,
      email: email.current.value ,
      website: website.current.value,
      phone: phone.current.value,
      address: {
        street: street.current.value,
        city: city.current.value,
        zipcode: zipcode.current.value,
      },
    };
 
    axios.put(`https://64f345b0edfa0459f6c6749b.mockapi.io/api/users/data/${id}`, payload).then((response) => {
        navigate("/");
    })
  };
 
  return (
    <>
      <legend className="m-3" style={{color:"peru"}}><strong>Update</strong></legend>
      <hr />
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
        <Button variant="dark" type="button" onClick={updateDataHandler}>
          Update
        </Button>
      </Form>
    </>
  );
}
export default UpdateData;