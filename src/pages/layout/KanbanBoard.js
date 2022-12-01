import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const KanbanBoard = () => {
  return (
    <>
      <div className="content-wrapper m-4">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Kanban Board</h1>
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
                  <div>Kanban Board</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <Container fluid="xs">
            <Row>
              <div className="container">
                <div className="row bootstrap snippets bootdeys">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div
                      className="box box-primary border-none direct-chat direct-chat-primary shadow-sm"
                      style={{ height: "79vh" }}
                    >
                      <div className="box-header with-border rounded-top bg-secondary">
                        <h3 className="box-title text-white">Backlog</h3>
                      </div>
                      <div className="box-body">
                        <div
                          className="direct-chat-messages"
                          style={{ height: "auto" }}
                        >
                          <div
                            className="box m-2 box-primary direct-chat direct-chat-primary shadow-sm"
                            style={{
                              width: "95%",
                              boxShadow:
                                "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                            }}
                          >
                            <div className="box-header with-border">
                              <h3 className="box-title">Create Labels</h3>
                              <div className="box-tools p-1 pull-right">
                                <span
                                  style={{ cursor: "pointer" }}
                                  data-toggle="tooltip"
                                  title=""
                                  className="text-gray shadow-none"
                                  data-original-title="3 New Messages"
                                >
                                  #3
                                </span>
                                <span
                                  className="ps-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-pen"></i>
                                </span>
                              </div>
                            </div>
                            <div className="box-body">
                              <div
                                className="direct-chat-messages"
                                style={{ height: "auto" }}
                              >
                                <div className="direct-chat-msg d-flex flex-column">
                                  <span>
                                    <input
                                      type="checkbox"
                                      name="bug"
                                      id="bug"
                                      value="bug"
                                    />
                                    <span className="ps-2">Bug</span>
                                  </span>
                                  <span>
                                    <input
                                      type="checkbox"
                                      name="feature"
                                      id="feature"
                                      value="Feature"
                                    />
                                    <span className="ps-2">Feature</span>
                                  </span>
                                  <span>
                                    <input
                                      type="checkbox"
                                      name="Enhancement"
                                      id="Enhancement"
                                      value="Enhancement"
                                    />
                                    <span className="ps-2">Enhancement</span>
                                  </span>
                                  <span>
                                    <input
                                      type="checkbox"
                                      name="Documentation"
                                      id="Documentation"
                                      value="Documentation"
                                    />
                                    <span className="ps-2">Documentation</span>
                                  </span>
                                  <span>
                                    <input
                                      type="checkbox"
                                      name="Examples"
                                      id="Examples"
                                      value="Examples"
                                    />
                                    <span className="ps-2">Examples</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="direct-chat-messages"
                          style={{ height: "auto" }}
                        >
                          <div
                            className="box m-2 box-primary direct-chat direct-chat-primary border-primary shadow-sm"
                            style={{
                              width: "95%",
                              boxShadow:
                                "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                            }}
                          >
                            <div className="box-header with-border">
                              <h3 className="box-title">
                                Create Issue template
                              </h3>
                              <div className="box-tools p-1 pull-right">
                                <span
                                  style={{ cursor: "pointer" }}
                                  data-toggle="tooltip"
                                  title=""
                                  className="text-gray shadow-none"
                                  data-original-title="3 New Messages"
                                >
                                  #4
                                </span>
                                <span
                                  className="ps-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-pen"></i>
                                </span>
                              </div>
                            </div>
                            <div className="box-body">
                              <div
                                className="direct-chat-messages"
                                style={{ height: "auto" }}
                              >
                                <div className="direct-chat-msg d-flex flex-column">
                                  <span>
                                    <input
                                      type="checkbox"
                                      name="bug"
                                      id="bug"
                                      value="bug"
                                    />
                                    <span className="ps-2">Bug Report</span>
                                  </span>
                                  <span>
                                    <input
                                      type="checkbox"
                                      name="feature"
                                      id="feature"
                                      value="Feature"
                                    />
                                    <span className="ps-2">
                                      Feature Request
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="direct-chat-messages"
                          style={{ height: "auto" }}
                        >
                          <div
                            className="box m-2 box-primary direct-chat direct-chat-primary shadow-sm border-primary"
                            style={{
                              width: "95%",
                              boxShadow:
                                "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                            }}
                          >
                            <div className="box-header rounded-top">
                              <h3 className="box-title">Create PR template</h3>
                              <div className="box-tools p-1 pull-right">
                                <span
                                  style={{ cursor: "pointer" }}
                                  data-toggle="tooltip"
                                  title=""
                                  className="text-gray shadow-none"
                                  data-original-title="3 New Messages"
                                >
                                  #6
                                </span>
                                <span
                                  className="ps-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-pen"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="direct-chat-messages"
                          style={{ height: "auto" }}
                        >
                          <div
                            className="box m-2 box-primary direct-chat direct-chat-primary shadow-sm border-light"
                            style={{
                              width: "95%",
                              boxShadow:
                                "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                            }}
                          >
                            <div className="box-header with-border">
                              <h3 className="box-title">Create Actions</h3>
                              <div className="box-tools p-1 pull-right">
                                <span
                                  style={{ cursor: "pointer" }}
                                  data-toggle="tooltip"
                                  title=""
                                  className="text-gray shadow-none"
                                  data-original-title="3 New Messages"
                                >
                                  #7
                                </span>
                                <span
                                  className="ps-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-pen"></i>
                                </span>
                              </div>
                            </div>
                            <div className="box-body">
                              <div
                                className="direct-chat-messages"
                                style={{ height: "auto" }}
                              >
                                <div className="direct-chat-msg">
                                  <span>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div
                      className="box box-primary border-none direct-chat direct-chat-primary shadow-sm"
                      style={{ height: "79vh" }}
                    >
                      <div className="box-header with-border rounded-top bg-primary">
                        <h3 className="box-title text-white">To Do</h3>
                      </div>
                      <div className="box-body">
                        <div
                          className="direct-chat-messages"
                          style={{ height: "auto" }}
                        >
                          <div
                            className="box m-2 box-primary direct-chat direct-chat-primary shadow-sm"
                            style={{
                              width: "95%",
                              boxShadow:
                                "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                            }}
                          >
                            <div className="box-header with-border">
                              <h3 className="box-title">
                                Create first milestone
                              </h3>
                              <div className="box-tools p-1 pull-right">
                                <span
                                  style={{ cursor: "pointer" }}
                                  data-toggle="tooltip"
                                  title=""
                                  className="text-gray shadow-none"
                                  data-original-title="3 New Messages"
                                >
                                  #5
                                </span>
                                <span
                                  className="ps-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-pen"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div
                      className="box box-primary border-none direct-chat direct-chat-primary shadow-sm"
                      style={{ height: "79vh" }}
                    >
                      <div className="box-header with-border rounded-top bg-info">
                        <h3 className="box-title text-white">In Progress</h3>
                      </div>
                      <div className="box-body">
                        <div
                          className="direct-chat-messages"
                          style={{ height: "auto" }}
                        >
                          <div
                            className="box m-2 box-primary direct-chat direct-chat-primary shadow-sm"
                            style={{
                              width: "95%",
                              boxShadow:
                                "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                            }}
                          >
                            <div className="box-header with-border">
                              <h3 className="box-title">Update Readme</h3>
                              <div className="box-tools p-1 pull-right">
                                <span
                                  style={{ cursor: "pointer" }}
                                  data-toggle="tooltip"
                                  title=""
                                  className="text-gray shadow-none"
                                  data-original-title="3 New Messages"
                                >
                                  #2
                                </span>
                                <span
                                  className="ps-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-pen"></i>
                                </span>
                              </div>
                            </div>
                            <div className="box-body">
                              <div
                                className="direct-chat-messages"
                                style={{ height: "auto" }}
                              >
                                <div className="direct-chat-msg">
                                  <span>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div
                      className="box box-success border-none direct-chat direct-chat-success shadow-sm"
                      style={{ height: "79vh" }}
                    >
                      <div className="box-header with-border rounded-top bg-success">
                        <h3 className="box-title text-white">Done</h3>
                      </div>
                      <div className="box-body">
                        <div
                          className="direct-chat-messages"
                          style={{ height: "auto" }}
                        >
                          <div
                            className="box m-2 box-primary direct-chat direct-chat-primary shadow-sm"
                            style={{
                              width: "95%",
                              boxShadow:
                                "0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)",
                            }}
                          >
                            <div className="box-header with-border">
                              <h3 className="box-title">
                                Create first milestone
                              </h3>
                              <div className="box-tools p-1 pull-right">
                                <span
                                  style={{ cursor: "pointer" }}
                                  data-toggle="tooltip"
                                  title=""
                                  className="text-gray shadow-none"
                                  data-original-title="3 New Messages"
                                >
                                  #1
                                </span>
                                <span
                                  className="ps-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-pen"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default KanbanBoard;
