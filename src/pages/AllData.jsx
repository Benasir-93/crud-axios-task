import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../component/shared/DeleteConfirmation"; 
function AllData() {
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();
 
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);
 
  useEffect(() => {
    axios.get("https://64f345b0edfa0459f6c6749b.mockapi.io/api/users/data").then((response) => {
      setAllData(response.data);
    });
  }, []);
 
  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };
 
  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };
 
  const confirmDeleteHandler = () => {
    axios
      .delete(`https://64f345b0edfa0459f6c6749b.mockapi.io/api/users/data/${itemToDeleteId}`)
      .then((response) => {
        setAllData((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };
 
  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button className="m-4" variant="dark" onClick={() => navigate("/add-data")}>
            Add New Data
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-2">
        {allData.map((item) => (
          <Col key={item.id}>
            <Card className="shadow-lg m-3">
              
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <hr />
                <Card.Text><b>Username - </b>{item.username}</Card.Text>
                <Card.Text><b>Email - </b>{item.email}</Card.Text>
                <Card.Text><b>Website - </b>{item.website}</Card.Text>
                <Card.Text><b>Address - </b>{item.address.street},{item.address.city}<br/>{item.address.zipcode}</Card.Text>
                <Card.Text><b>Phone - </b>{item.phone}</Card.Text>



                <Button className="mx-3"
                  variant="primary"
                  onClick={() => navigate(`/update-data/${item.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default AllData;