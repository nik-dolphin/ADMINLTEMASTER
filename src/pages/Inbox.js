import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Inbox = () => {
  const navigate = useNavigate();
  const [isCollapsable, setIsCollapsable] = useState(true);
  const [labelCollapsable, setlabelCollapsable] = useState(true);
  const [checkItem, setCheckItem] = useState(false);
  const [checkValue, setCheckValue] = useState("");

  const handleChangeCheck = (e) => {
    e.preventDefault();
    setCheckValue(e.target.value);
  };

  return (
    <>
      <div className="content-wrapper m-4">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Inbox</h1>
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
                  <div>Inbox</div>
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
                  style={{
                    width: "100%",
                    height: "40px",
                    border: "1px solid #007bff",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "white",
                  }}
                  onClick={() => navigate("/mailbox/compose")}
                >
                  Compose
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
                {/* <Collapse in={rDirect1}> */}
                <div
                  className="box box-primary direct-chat direct-chat-primary shadow-sm"
                  style={{ width: "100%" }}
                >
                  <div className="box-header with-border">
                    <h3 className="box-title">Inbox</h3>
                    <div className="box-tools pull-right">
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Mail"
                        />
                        <div className="btn btn-primary">
                          <i className="fas fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Collapse in={}> */}
                  <div className="box-body">
                    <div
                      className="direct-chat-messages"
                      style={{ height: "auto" }}
                    >
                      <div className="direct-chat-msg">
                      
                        <div className="mailbox-controls">
                          <button
                            type="button"
                            className="btn btn-default btn-sm checkbox-toggle border bg-light me-1"
                            onClick={() => setCheckItem(!checkItem)}
                          >
                            <input
                              type="checkbox"
                              value={checkValue}
                              onChange={handleChangeCheck}
                              checked={checkItem}
                              id="check1"
                            />
                          </button>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-default btn-sm  border bg-light"
                            >
                              <i className="far fa-trash-alt"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-default btn-sm  border bg-light"
                            >
                              <i className="fas fa-reply"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-default btn-sm  border bg-light me-1"
                            >
                              <i className="fas fa-share"></i>
                            </button>
                          </div>

                          <button
                            type="button"
                            className="btn btn-default btn-sm  border bg-light"
                          >
                            <i className="fas fa-sync-alt"></i>
                          </button>
                          <div className="float-right">
                            1-50/200
                            <div className="btn-group ms-1">
                              <button
                                type="button"
                                className="btn btn-default btn-sm  border bg-light"
                              >
                                <i className="fas fa-chevron-left"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-default btn-sm  border bg-light"
                              >
                                <i className="fas fa-chevron-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <table className="table table-hover table-striped">
                          <tbody>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check1"
                                  />
                                  <label htmlFor="check1"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment"></td>
                              <td className="mailbox-date">5 mins ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check2"
                                  />
                                  <label htmlFor="check2"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star-o text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">28 mins ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check3"
                                  />
                                  <label htmlFor="check3"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star-o text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">11 hours ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check4"
                                  />
                                  <label htmlFor="check4"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment"></td>
                              <td className="mailbox-date">15 hours ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check5"
                                  />
                                  <label htmlFor="check5"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">Yesterday</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check6"
                                  />
                                  <label htmlFor="check6"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star-o text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">2 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check7"
                                  />
                                  <label htmlFor="check7"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star-o text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">2 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check8"
                                  />
                                  <label htmlFor="check8"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment"></td>
                              <td className="mailbox-date">2 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check9"
                                  />
                                  <label htmlFor="check9"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment"></td>
                              <td className="mailbox-date">2 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check10"
                                  />
                                  <label htmlFor="check10"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star-o text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment"></td>
                              <td className="mailbox-date">2 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check11"
                                  />
                                  <label htmlFor="check11"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star-o text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">4 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check12"
                                  />
                                  <label htmlFor="check12"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment"></td>
                              <td className="mailbox-date">12 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check13"
                                  />
                                  <label htmlFor="check13"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star-o text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">12 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check14"
                                  />
                                  <label htmlFor="check14"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">14 days ago</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    value={checkValue}
                                    onChange={handleChangeCheck}
                                    checked={checkItem}
                                    id="check15"
                                  />
                                  <label htmlFor="check15"></label>
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="/">
                                  <i className="fas fa-star text-warning"></i>
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">Alexander Pierce</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>AdminLTE 3.0 Issue</b> - Trying to find a
                                solution to this problem...
                              </td>
                              <td className="mailbox-attachment">
                                <i className="fas fa-paperclip"></i>
                              </td>
                              <td className="mailbox-date">15 days ago</td>
                            </tr>
                          </tbody>
                        </table>
                        {/* foooooooooooooooooter mailllllllllllll option section */}
                        <div className="mailbox-controls">
                          <button
                            type="button"
                            className="btn btn-default btn-sm checkbox-toggle border bg-light me-1"
                            onClick={() => setCheckItem(!checkItem)}
                          >
                            <input
                              type="checkbox"
                              value={checkValue}
                              onChange={handleChangeCheck}
                              checked={checkItem}
                              id="check1"
                            />
                          </button>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-default btn-sm  border bg-light"
                            >
                              <i className="far fa-trash-alt"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-default btn-sm  border bg-light"
                            >
                              <i className="fas fa-reply"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-default btn-sm  border bg-light me-1"
                            >
                              <i className="fas fa-share"></i>
                            </button>
                          </div>

                          <button
                            type="button"
                            className="btn btn-default btn-sm  border bg-light"
                          >
                            <i className="fas fa-sync-alt"></i>
                          </button>
                          <div className="float-right">
                            1-50/200
                            <div className="btn-group ms-1">
                              <button
                                type="button"
                                className="btn btn-default btn-sm  border bg-light"
                              >
                                <i className="fas fa-chevron-left"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-default btn-sm  border bg-light"
                              >
                                <i className="fas fa-chevron-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Collapse> */}
                </div>
                {/* </Collapse> */}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <section className="content-footer">
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.2.0
          </div>
          <strong>
            Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>
      </section>
    </>
  );
};

export default Inbox;
