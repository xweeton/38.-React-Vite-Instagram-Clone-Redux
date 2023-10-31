import { useContext, useState, useEffect } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { ProfileContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { updateTagged } from "../features/taggeds/taggedsSlice";

export default function UpdateTaggedModal({ show, handleClose, taggedId }) {
  const { image, name } = useContext(ProfileContext);
  const dispatch = useDispatch();

  const tagged = useSelector((state) =>
    state.taggeds.find((tagged) => tagged.id === taggedId)
  );

  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [invalidUrl, setInvalidUrl] = useState(false);

  useEffect(() => {
    if (tagged) {
      setImageUrl(tagged.image);
      setDescription(tagged.description);
    }
  }, [tagged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUrl) {
      dispatch(
        updateTagged({
          id: taggedId,
          image: imageUrl,
          description,
        })
      );
      setImageUrl("");
      setDescription("");
      handleClose();
    } else {
      setInvalidUrl(true);
    }
  };

  const handleImageError = () => {
    setInvalidUrl(true);
  };

  const handleImageLoad = () => {
    setInvalidUrl(false);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header>
        <Modal.Title>Edit tagged</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col sm={7} style={{ margin: `0px` }}>
              <Image
                src={imageUrl ? imageUrl : "https://sig1.co/img-placeholder-1"}
                alt="uploaded content"
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={5}>
              <Image
                src={image}
                alt="uploader"
                style={{ width: "32px" }}
                roundedCircle
              />
              <span className="ms-3">{name}</span>
              <Form.Control
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="my-3"
                placeholder="Add image url"
              />
              {invalidUrl && (
                <div className="text-danger">
                  Invalid URL or failed to load image
                </div>
              )}
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="my-3"
                as="textarea"
                rows={3}
                placeholder="Write a caption..."
              />
              <Button type="submit" style={{ width: "100%" }}>
                Share
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
