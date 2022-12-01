/* eslint-disable jsx-a11y/no-redundant-roles */
import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  // FaAlignCenter,
  // FaAlignJustify,
  // FaAlignLeft,
  // FaAlignRight,
  // FaBold,
  // FaCamera,
  // FaCode,
  // FaCompressArrowsAlt,
  // FaEraser,
  // FaExpandArrowsAlt,
  // FaFont,
  // FaImage,
  // FaIndent,
  // FaLink,
  // FaMagic,
  // FaOutdent,
  // FaQuestion,
  // FaUnderline,
  // FaVideo,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Compose = () => {
  const navigate = useNavigate();
  const [isCollapsable, setIsCollapsable] = useState(true);
  const [labelCollapsable, setlabelCollapsable] = useState(true);
  const [maximize, setMaximize] = useState(false);
  // const [modalShow, setModalShow] = React.useState(false);
  // const [imageModalShow, setImageModalShow] = React.useState(false);
  // const [videoModalShow, setVideoModalShow] = React.useState(false);
  // const [vedioLink, setVedioLink] = useState("");
  // const [helpModalShow, setHelpModalShow] = React.useState(false);
  // const [handleSubmitDisable, setHandleSubmitDisable] = useState(false);
  // const [linkChange, setLinkChange] = useState({
  //   text: "",
  //   url: "",
  // });
  // const allShortCut = [
  //   { shortCut: "ESCE", value: "Escape" },
  //   { shortCut: "ENTER", value: "Insert Paragraph" },
  //   { shortCut: "CTRL+Z", value: "Undo the last command" },
  //   { shortCut: "CTRL+Y", value: "Redo the last command" },
  //   { shortCut: "TAB", value: "Tab" },
  //   { shortCut: "SHIFT+TAB", value: "Untab" },
  //   { shortCut: "CTRL+B", value: "Set a bold style" },
  //   { shortCut: "CTRL+I", value: "Set a italic style" },
  //   { shortCut: "CTRL+U", value: "Set a underline style" },
  //   { shortCut: "CTRL+SHIFT+S", value: "Set a strikethrough style" },
  //   { shortCut: "CTRL+BACKSLASH", value: "Clean a style" },
  //   { shortCut: "CTRL+SHIFT+L", value: "Set left align" },
  //   { shortCut: "CTRL+SHIFT+E", value: "Set center align" },
  //   { shortCut: "CTRL+SHIFT+R", value: "Set right align" },
  //   { shortCut: "CTRL+SHIFT+J", value: "Set full align" },
  //   { shortCut: "CTRL+SHIFT+NUM7", value: "Toggle unordered list" },
  //   { shortCut: "CTRL+SHIFT+NUM8", value: "Toggle ordered list" },
  //   { shortCut: "CTRL+LEFTBRACKET", value: "Outdent on current paragraph" },
  //   { shortCut: "CTRL+RIGHTBRACKET", value: "Indent on current paragraph" },
  //   {
  //     shortCut: "CTRL+NUM0",
  //     value: "Change current block's format as a paragraph(P tag)",
  //   },
  //   { shortCut: "CTRL+NUM1", value: "Change current block's format as H1" },
  //   { shortCut: "CTRL+NUM2", value: "Change current block's format as H2" },
  //   { shortCut: "CTRL+NUM3", value: "Change current block's format as H3" },
  //   { shortCut: "CTRL+NUM4", value: "Change current block's format as H4" },
  //   { shortCut: "CTRL+NUM5", value: "Change current block's format as H5" },
  //   { shortCut: "CTRL+NUM6", value: "Change current block's format as H6" },
  //   { shortCut: "CTRL+ENTER", value: "Insert horizontal rule" },
  //   { shortCut: "CTRL+K", value: "Show Link Dialog  " },
  // ];

  // const fullSreen = (elem) => {
  //   if (elem.requestFullscreen && maximize) {
  //     elem.requestFullscreen();
  //   } else if (elem.webkitRequestFullscreen) {
  //     elem.webkitRequestFullscreen();
  //   }
  // };

  // const closeFullScreen = () => {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   }
  // };
  // const handleMaximize = () => {
  //   var elem = document.getElementById("firstMaxCard");
  //   console.log("maximize log _dp");
  //   setMaximize(!maximize);
  //   if (document.fullscreenElement === null) {
  //     fullSreen(elem);
  //   } else {
  //     closeFullScreen();
  //   }
  // };

  // function MyVerticallyCenteredModal(props) {
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //     const { name, value } = e.target;
  //     setLinkChange({
  //       ...linkChange,
  //       [name]: value,
  //     });
  //   };
  //   return (
  //     <Modal
  //       {...props}
  //       size="md"
  //       aria-labelledby="contained-modal-title-vcenter"
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Insert Link
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form>
  //           <Form.Group className="mb-3" controlId="formBasicEmail">
  //             <Form.Label className="text-bold">Text to display</Form.Label>
  //             <Form.Control
  //               type="text"
  //               name="text"
  //               value={linkChange.text}
  //               onChange={handleChange}
  //             />
  //           </Form.Group>
  //           <Form.Group className="mb-3" controlId="formBasicEmail">
  //             <Form.Label className="text-bold">
  //               To what URL should this link go?
  //             </Form.Label>
  //             <Form.Control
  //               type="text"
  //               name="url"
  //               value={linkChange.url}
  //               onChange={handleChange}
  //             />
  //           </Form.Group>
  //           <Form.Group className="mb-2" controlId="formBasicCheckbox">
  //             <Form.Check type="checkbox" label="Open in new window" />
  //           </Form.Group>
  //           <Form.Group className="mb-2" controlId="formBasicCheckbox">
  //             <Form.Check type="checkbox" label="Use default protocol" />
  //           </Form.Group>
  //         </Form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button disabled={handleSubmitDisable}>Insert Link</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }

  // function ImageLinkModel(props) {
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //     const { name, value } = e.target;
  //     setLinkChange({
  //       ...linkChange,
  //       [name]: value,
  //     });
  //   };
  //   return (
  //     <Modal
  //       {...props}
  //       size="md"
  //       aria-labelledby="contained-modal-title-vcenter"
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Insert Image
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form>
  //           <Form.Group className="mb-3" controlId="formBasicEmail">
  //             <Form.Label className="text-bold">Select from files</Form.Label>
  //             <Form.Control type="file" name="text" />
  //           </Form.Group>
  //           <Form.Group className="mb-3" controlId="formBasicEmail">
  //             <Form.Label className="text-bold">Image URL</Form.Label>
  //             <Form.Control type="text" name="url" />
  //           </Form.Group>
  //         </Form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button disabled={handleSubmitDisable}>Insert Image</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }
  // function VideoLinkModel(props) {
  //   const handleChange = (e) => {
  //     setVedioLink(e.target.value);
  //   };

  //   const handleSubmit = (props) => {
  //     console.log(props);
  //   };
  //   return (
  //     <Modal
  //       {...props}
  //       size="md"
  //       aria-labelledby="contained-modal-title-vcenter"
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Insert Video
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form>
  //           <Form.Group className="mb-3" controlId="formBasicEmail">
  //             <Form.Label className="text-bold">
  //               Video URL
  //               <span className="bold-none">
  //                 (YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)
  //               </span>
  //             </Form.Label>
  //             <Form.Control
  //               type="text"
  //               name="url"
  //               value={vedioLink}
  //               onChange={handleChange}
  //             />
  //           </Form.Group>
  //         </Form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button
  //           disabled={handleSubmitDisable}
  //           onClick={() => handleSubmit(vedioLink)}
  //         >
  //           Insert Video
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }
  // function HelpModel(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="md"
  //       aria-labelledby="contained-modal-title-vcenter"
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">Help</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body style={{ maxHeight: "300px", overflow: "scroll" }}>
  //         <Container>
  //           {allShortCut.map((items, index) => {
  //             return (
  //               <Row key={index}>
  //                 <Col xs={6} md={6}>
  //                   <span className="shortCut">{items.shortCut}</span>
  //                 </Col>
  //                 <Col xs={6} md={6}>
  //                   {items.value}
  //                 </Col>
  //               </Row>
  //             );
  //           })}
  //         </Container>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Form.Label className="text-primary">
  //           Summernote 0.8.18 · Project · Issues
  //         </Form.Label>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }
  return (
    <>
      <div className="content-wrapper m-4">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Compose</h1>
              </div>
              <div className="col-sm-6">
                <div className="d-flex flex-row flex-container float-right">
                  <div>
                    <Link
                      to="/"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </div>
                  <span className="ps-1 pe-1">/ </span>
                  <div>Compose</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <Container fluid="xs">
            <Row sm={4} md={4} lg={4}>
              <Col xl={3} lg={12} md={12} sm={2}>
                <button
                  onClick={() => navigate("/mailbox/inbox")}
                  style={{
                    width: "100%",
                    height: "40px",
                    border: "1px solid #007bff",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "white",
                  }}
                >
                  Back to Inbox
                </button>
                <Card className="shadow-sm rounded" style={{ width: "100%" }}>
                  <Card.Header className="d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Folders</Card.Text>
                    <Card.Text
                      onClick={() => setIsCollapsable(!isCollapsable)}
                      style={{ cursor: "pointer" }}
                    >
                      {isCollapsable ? <FaMinus /> : <FaPlus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={isCollapsable}>
                    <Card.Body className="p-0">
                      <Card.Text className="d-flex flex-column bd-highlight">
                        <span
                          className="nav-item mb-0"
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "1px solid gray",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="fas fa-inbox me-1"></i>
                            Inbox
                          </a>
                          <span
                            data-toggle="tooltip"
                            title=""
                            className="bg-primary float-right text-white badgeStyle"
                            data-original-title="3 New Messages"
                          >
                            12
                          </span>
                        </span>
                        <span
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "1px solid gray",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="far fa-envelope me-1"></i>
                            Sent
                          </a>
                        </span>
                        <span
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "1px solid gray",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="far fa-file-alt me-1"></i>
                            Drafts
                          </a>
                        </span>
                        <span
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "1px solid gray",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="fas fa-filter me-1"></i>
                            Junk
                          </a>
                          <span
                            data-toggle="tooltip"
                            title=""
                            className="bg-warning float-right text-white badgeStyle"
                            data-original-title="3 New Messages"
                          >
                            65
                          </span>
                        </span>
                        <span
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "0px solid",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="far fa-trash-alt me-1"></i>
                            Trash
                          </a>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
                <Card className="shadow-sm rounded" style={{ width: "100%" }}>
                  <Card.Header className="d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Labels</Card.Text>
                    <Card.Text
                      onClick={() => setlabelCollapsable(!labelCollapsable)}
                      style={{ cursor: "pointer" }}
                    >
                      {labelCollapsable ? <FaMinus /> : <FaPlus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={labelCollapsable}>
                    <Card.Body className="p-0">
                      <Card.Text className="d-flex flex-column bd-highlight">
                        <span
                          className="nav-item mb-0"
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "1px solid gray",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="far fa-circle text-danger me-1"></i>
                            Important
                          </a>
                        </span>
                        <span
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "1px solid gray",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="far fa-circle text-warning me-1"></i>
                            Promotions
                          </a>
                        </span>
                        <span
                          style={{
                            padding: "0.5rem 1rem",
                            borderBottom: "0px solid",
                          }}
                        >
                          <a
                            href="/"
                            className="foat-left text-decoration-none"
                            style={{ color: "#6c757d" }}
                          >
                            <i className="far fa-circle text-info me-1"></i>
                            Social
                          </a>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={9} lg={12} md={12} sm={12}>
                <div
                  className="box box-primary direct-chat direct-chat-primary shadow-sm border-primary"
                  style={{ width: "100%" }}
                >
                  <div className="box-header with-border">
                    <h3 className="box-title">Compose New Message</h3>
                  </div>
                  <div className="box-body">
                    <div
                      className="direct-chat-messages"
                      style={{ height: "auto" }}
                    >
                      <div className="direct-chat-msg">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="To:"
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Subject:"
                        />
                        <CKEditor
                          editor={ClassicEditor}
                          data="<p>Hello from CKEditor 5!</p>"
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                      <button
                        className="btn btn-light border rounded btn-default btn-file"
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className="fas fa-paperclip"
                          style={{ cursor: "pointer" }}
                        ></i>
                        Attachment
                        <input
                          type="file"
                          name="attachment"
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                      <p className="help-block">Max. 32MB</p>
                    </div>
                  </div>
                  <div className="box-footer">
                    <button
                      type="submit"
                      className="btn btn-light btn-flat border rounded"
                    >
                      <i className="fas fa-times me-1"></i>Discard
                    </button>
                    <div className="box-tools pull-right float-right">
                      <button
                        type="submit"
                        className="btn btn-light btn-flat border rounded me-1"
                      >
                        <i className="fas fa-pencil-alt me-1"></i>Draft
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary btn-flat border rounded me-3"
                      >
                        <i className="far fa-envelope me-1"></i>Send
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Compose;
