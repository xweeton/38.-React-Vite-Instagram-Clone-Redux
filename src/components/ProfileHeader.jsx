import { useContext } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { ProfileContext } from "../App";

export default function ProfileHeader() {
  const {
    image,
    name,
    posts_no,
    followers,
    following,
    subheader,
    account_type: accountType, //rename after
    description,
    link,
  } = useContext(ProfileContext);
  return (
    <Row className="p-5">
      <Col
        md={3}
        className="d-flex align-items-center justify-content-center mb-md-1 mb-5"
      >
        <Image src={image} style={{ height: "150px" }} roundedCircle />
      </Col>
      <Col md={9}>
        <span className="me-4 fw-medium fs-5">{name}</span>
        <Button className="me-2 fw-bold">Follow Back</Button>
        <Button variant="light me-2 fw-bold">Message</Button>
        <Button variant="light me-2">
          <i className="bi bi-person-plus"></i>
        </Button>
        <Button variant="light">
          <i className="bi bi-three-dots"></i>
        </Button>
        <br />
        <br />
        <span className="me-4 fw-medium">
          <strong>{posts_no}</strong> posts
        </span>
        <span className="me-4 fw-medium">
          <strong>{followers}</strong> followers
        </span>
        <span className="me-4 fw-medium">
          <strong>{following}</strong> following
        </span>
        <br />
        <br />
        <p style={{ margin: 0, fontWeight: "bold" }}>{subheader}</p>
        <p className="fw-medium" style={{ margin: 0, color: "grey" }}>
          {accountType}
        </p>
        <p className="fw-medium" style={{ margin: 0 }}>
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <a className="fw-medium" href={link}>
          {link}
        </a>
      </Col>
    </Row>
  );
}
