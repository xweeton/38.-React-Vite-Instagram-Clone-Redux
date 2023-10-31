import { useState } from "react";
import {
  Button,
  Col,
  Image,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
import { deleteReel } from "../features/reels/reelsSlice";
import { deleteTagged } from "../features/taggeds/taggedsSlice";
import UpdatePostModal from "./UpdatePostModal";
import UpdateReelModal from "./UpdateReelModal";
import UpdateTaggedModal from "./UpdateTaggedModal";

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const reels = useSelector((state) => state.reels);
  const taggeds = useSelector((state) => state.taggeds);
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [currentReel, setCurrentReel] = useState(null);
  const [currentTagged, setCurrentTagged] = useState(null);

  const dispatch = useDispatch();

  const handleClosePost = () => {
    setCurrentPost(null);
    setShow(false);
  };
  const handleShowPost = (post) => {
    setCurrentPost(post);
    setShow(true);
  };
  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleCloseReel = () => {
    setCurrentReel(null);
    setShow(false);
  };
  const handleShowReel = (reel) => {
    setCurrentReel(reel);
    setShow(true);
  };
  const handleDeleteReel = (reelId) => {
    dispatch(deleteReel(reelId));
  };

  const handleCloseTagged = () => {
    setCurrentTagged(null);
    setShow(false);
  };
  const handleShowTagged = (tagged) => {
    setCurrentTagged(tagged);
    setShow(true);
  };
  const handleDeleteTagged = (taggedId) => {
    dispatch(deleteTagged(taggedId));
  };

  const renderImagesPost = () => {
    return posts.map((post) => (
      <Col md={6} lg={4} key={post.id} className="mb-4 p-1">
        <Button className="bg-transparent border-0 p-0">
          <div className="postContainer position-relative">
            <Image src={post.image} fluid />
            <div className="postInfoContainer position-absolute top-50 start-50 translate-middle">
              <span className="me-3 fw-bold">
                <i className="bi bi-heart-fill me-2"></i>
                {post.likes}
              </span>
              <span className="fw-bold">
                <i className="bi bi-chat-fill me-2"></i>
                {post.comments}
              </span>
            </div>
          </div>
        </Button>

        <Button onClick={() => handleShowPost(post)} variant="outline-primary">
          <i className="bi bi-pencil-square"></i>
        </Button>

        <Button
          onClick={() => handleDeletePost(post.id)}
          variant="outline-danger"
        >
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    ));
  };

  const renderImagesReel = () => {
    return reels.map((reel) => (
      <Col md={6} lg={4} key={reel.id} className="mb-4 p-1">
        <Button className="bg-transparent border-0 p-0">
          <div className="postContainer position-relative">
            <Image src={reel.image} fluid />
            <div className="postInfoContainer position-absolute top-50 start-50 translate-middle">
              <span className="me-3 fw-bold">
                <i className="bi bi-heart-fill me-2"></i>
                {reel.likes}
              </span>
              <span className="fw-bold">
                <i className="bi bi-chat-fill me-2"></i>
                {reel.comments}
              </span>
            </div>
          </div>
        </Button>

        <Button onClick={() => handleShowReel(reel)} variant="outline-primary">
          <i className="bi bi-pencil-square"></i>
        </Button>

        <Button
          onClick={() => handleDeleteReel(reel.id)}
          variant="outline-danger"
        >
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    ));
  };

  const renderImagesTagged = () => {
    return taggeds.map((tagged) => (
      <Col md={6} lg={4} key={tagged.id} className="mb-4 p-1">
        <Button className="bg-transparent border-0 p-0">
          <div className="postContainer position-relative">
            <Image src={tagged.image} fluid />
            <div className="postInfoContainer position-absolute top-50 start-50 translate-middle">
              <span className="me-3 fw-bold">
                <i className="bi bi-heart-fill me-2"></i>
                {tagged.likes}
              </span>
              <span className="fw-bold">
                <i className="bi bi-chat-fill me-2"></i>
                {tagged.comments}
              </span>
            </div>
          </div>
        </Button>

        <Button
          onClick={() => handleShowTagged(tagged)}
          variant="outline-primary"
        >
          <i className="bi bi-pencil-square"></i>
        </Button>

        <Button
          onClick={() => handleDeleteTagged(tagged.id)}
          variant="outline-danger"
        >
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    ));
  };

  return (
    <>
      <Tab.Container id="tabs" defaultActiveKey="posts">
        <Nav className="tabContainer mb-4">
          <Nav.Item>
            <Nav.Link eventKey="posts" className="tabItem fw-medium">
              <i className="bi bi-grid-3x3"></i>
              <span className="ms-2">POSTS</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reels" className="tabItem fw-medium">
              <i className="bi bi-collection-play"></i>
              <span className="ms-2">REELS</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tagged" className="tabItem fw-medium">
              <i className="bi bi-person-square"></i>
              <span className="ms-2">TAGGED</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="posts">
            <Row>{renderImagesPost()}</Row>
          </Tab.Pane>
          <Tab.Pane eventKey="reels">
            <Row>{renderImagesReel()}</Row>
          </Tab.Pane>
          <Tab.Pane eventKey="tagged">
            <Row>{renderImagesTagged()}</Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {currentPost && (
        <UpdatePostModal
          show={show}
          handleClose={handleClosePost}
          postId={currentPost.id}
        />
      )}
      {currentReel && (
        <UpdateReelModal
          show={show}
          handleClose={handleCloseReel}
          reelId={currentReel.id}
        />
      )}
      {currentTagged && (
        <UpdateTaggedModal
          show={show}
          handleClose={handleCloseTagged}
          taggedId={currentTagged.id}
        />
      )}
    </>
  );
}
