import { useContext } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { ProfileContext } from "../App";

export default function ImageList({ onClick }) {
  const { lists } = useContext(ProfileContext);

  return (
    <Row className="mb-5 justify-content-center">
      {lists.map((list, index) => (
        <Col xs={3} sm={2} lg={1} key={index} className="mx-4">
          <Button
            className="bg-transparent border-0 p-1 mb-2"
            onClick={onClick}
          >
            <Image
              src={list.image}
              className="border border-2 p-1"
              height="80px"
              roundedCircle
            />
            <p className="text-center fs-6 fw-medium text-dark mt-2">
              {list.description}
            </p>
          </Button>
        </Col>
      ))}
    </Row>
  );
}
