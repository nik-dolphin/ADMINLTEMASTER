import React, { useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaMinus,
  FaExpand,
  FaCompress,
  FaSyncAlt,
} from "react-icons/fa";
import Collapse from "@mui/material/Collapse";

function Widgets() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsable, setIsCollapsable] = useState(true);
  const [isExpandedInAll, setIsExpandedInAll] = useState(true);
  const [shadnowNoneClp, setShadnowNoneClp] = useState(false);
  const [shadnowSmallClp, setShadnowSmallClp] = useState(true);
  const [primaryClp, setPrimaryClp] = useState(true);
  const [warningClp, setWarningClp] = useState(true);
  const [primaryOutClp, setPrimaryOutClp] = useState(true);
  const [warningOutClp, setWarningOutClp] = useState(true);
  const [primary2Clp, setPrimary2Clp] = useState(true);
  const [warning2Clp, setWarning2Clp] = useState(true);
  const [primaryGrtClp, setPrimaryGrtClp] = useState(true);
  const [warningGrtClp, setWarningGrtClp] = useState(true);
  const [socialClp1, setSocialClp1] = useState(true);
  const [socialClp2, setSocialClp2] = useState(true);
  const [directChatClp1, setDirectChatClp1] = useState(true);
  const [directChatClp2, setDirectChatClp2] = useState(true);
  const [directChatClp3, setDirectChatClp3] = useState(true);
  const [directChatClp4, setDirectChatClp4] = useState(true);
  const [directShadowClp1, setDirectShadowClp1] = useState(true);
  const [directShadowClp2, setDirectShadowClp2] = useState(true);
  const [directShadowClp3, setDirectShadowClp3] = useState(true);
  const [directShadowClp4, setDirectShadowClp4] = useState(true);
  const [removable, setRemovable] = useState(true);
  const [rShadow, setRSahdow] = useState(true);
  const [rSuccess1, setRSuccess1] = useState(true);
  const [rSuccess2, setRSuccess2] = useState(true);
  const [rSuccess3, setRSuccess3] = useState(true);
  const [rSuccess4, setRSuccess4] = useState(true);
  const [rDirect1, setRDirect1] = useState(true);
  const [rDirect2, setRDirect2] = useState(true);
  const [rDirect3, setRDirect3] = useState(true);
  const [rDirect4, setRDirect4] = useState(true);
  const [rDirect5, setRDirect5] = useState(true);
  const [rDirect6, setRDirect6] = useState(true);
  const [rDirect7, setRDirect7] = useState(true);
  const [rDirect8, setRDirect8] = useState(true);
  const [rSocial1, setRSocial1] = useState(true);
  const [rSocial2, setRSocial2] = useState(true);
  const [removableInAll, setRemovableInAll] = useState(true);
  const [maximize, setMaximize] = useState(false);
  const [maximizeAll, setMaximizeAll] = useState(false);
  const [maximizeInShadow, setMaximizeAllInShadow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [refreshAll, setRefreshAll] = useState(false);
  const [visible, setVisible] = useState(false);
  const [handleComment1, setHandleComment1] = useState(false);
  const [handleComment2, setHandleComment2] = useState(false);
  const [handleComment3, setHandleComment3] = useState(false);
  const [handleComment4, setHandleComment4] = useState(false);
  const [handleComment5, setHandleComment5] = useState(false);
  const [handleComment6, setHandleComment6] = useState(false);
  const [handleComment7, setHandleComment7] = useState(false);
  const [handleComment8, setHandleComment8] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const handleRemovable = () => {
    console.log("removalbe");
    setRemovable(!removable);
  };

  const handleRemovableInAll = () => {
    setRemovableInAll(!removableInAll);
  };

  const fullSreen = (elem) => {
    if (elem.requestFullscreen && maximize) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  };

  const closeFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const handleMaximize = () => {
    var elem = document.getElementById("firstMaxCard");
    console.log("maximize log _dp");
    setMaximize(!maximize);
    if (document.fullscreenElement === null) {
      fullSreen(elem);
    } else {
      closeFullScreen();
    }
  };

  const handleAllMaximize = () => {
    var elem = document.getElementById("MaxCardInAll");
    setMaximizeAll(!maximizeAll);
    if (document.fullscreenElement === null) {
      fullSreen(elem);
    } else {
      closeFullScreen();
    }
  };

  const handleMaximizeInShadow = () => {
    var elem = document.getElementById("MaxCardInShadow");
    setMaximizeAllInShadow(!maximizeInShadow);
    if (document.fullscreenElement === null) {
      fullSreen(elem);
    } else {
      closeFullScreen();
    }
  };

  const handleRefersh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 100);
  };

  const handleAllRefersh = () => {
    setRefreshAll(true);
    setTimeout(() => {
      setRefreshAll(false);
    }, 100);
  };

  return (
    <>
      <div className="content-wrapper m-4">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Widgets</h1>
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
                  <div>Widgets</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="fs-4">Info Box</div>
            <Row sm={4} md={4} lg={4}>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 d-flex align-items-center flex-row shadow-sm bg-body rounded productCard">
                  <Card.Header
                    className="rounded"
                    style={{ marginLeft: "20px", backgroundColor: "#17a2b8" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-envelope"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Messages</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">1,410</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 d-flex align-items-center flex-row shadow-sm bg-body rounded productCard">
                  <Card.Header
                    className="bg-success rounded"
                    style={{ marginLeft: "20px" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-flag"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Bookmarks</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">410</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 d-flex align-items-center flex-row shadow-sm bg-body rounded productCard">
                  <Card.Header
                    className="bg-warning rounded"
                    style={{ marginLeft: "20px" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-copy"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Uploads</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">13,648</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 d-flex align-items-center flex-row shadow-sm bg-body rounded productCard">
                  <Card.Header
                    className="bg-danger rounded"
                    style={{ marginLeft: "20px" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-star"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Likes</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">93,139</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div>
                <span className=" fs-4">Info Box With Custom Shadows</span>
                <span className="fst-italic ps-1">
                  Using Bootstrap's Shadow Utility
                </span>
              </div>
            </div>
            <Row>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 shadow-none d-flex align-items-center flex-row bg-body rounded productCard">
                  <Card.Header
                    className="rounded"
                    style={{ marginLeft: "20px", backgroundColor: "#17a2b8" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-envelope"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Shadows</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">None</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 d-flex align-items-center flex-row shadow-sm bg-body rounded productCard">
                  <Card.Header
                    className="bg-success rounded"
                    style={{ marginLeft: "20px" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-flag"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Shadows</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">Small</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 d-flex align-items-center flex-row shadow bg-body rounded productCard">
                  <Card.Header
                    className="bg-warning rounded"
                    style={{ marginLeft: "20px" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-copy"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Shadows</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">Regular</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="m-2 d-flex align-items-center flex-row shadow-lg bg-body rounded productCard">
                  <Card.Header
                    className="bg-danger rounded"
                    style={{ marginLeft: "20px" }}
                  >
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-star"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>Shadows</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">Large</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div className=" fs-4">
                Info Box With
                <span className="ps-1 text-danger">bg-*</span>
              </div>
            </div>
            <Row>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card
                  className="m-2 shadow-sm d-flex align-items-center flex-row rounded productCard"
                  style={{ backgroundColor: "#17a2b8" }}
                >
                  <Card.Text style={{ marginLeft: "20px" }}>
                    <span style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-bookmark"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Bookmarks</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        style={{
                          whiteSpace: "pre-wrap",
                          overflowWrap: "break-word",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        70% Increase in 30 Days
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-success m-2 d-flex align-items-center flex-row shadow-sm rounded productCard">
                  <Card.Text className="rounded" style={{ marginLeft: "20px" }}>
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-thumbs-up"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Likes</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span>70% Increase in 30 Days</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-warning m-2 d-flex align-items-center flex-row shadow-sm  rounded productCard">
                  <Card.Text className="rounded" style={{ marginLeft: "20px" }}>
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-calendar-alt"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Events</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span>70% Increase in 30 Days</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-danger m-2 d-flex align-items-center flex-row shadow-sm rounded productCard">
                  <Card.Text className="rounded" style={{ marginLeft: "20px" }}>
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="fas fa-comments"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Comments</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span>70% Increase in 30 Days</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div className=" fs-4">
                Info Box With
                <span className="ps-1 text-danger">bg-gradient-*</span>
              </div>
            </div>
            <Row>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card
                  className="bg-gradient m-2 shadow-sm d-flex align-items-center flex-row rounded productCard"
                  style={{ backgroundColor: "#17a2b8" }}
                >
                  <Card.Text style={{ marginLeft: "20px" }}>
                    <span style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-bookmark"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Bookmarks</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span>70% Increase in 30 Days</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-success bg-gradient m-2 d-flex align-items-center flex-row shadow-sm rounded productCard">
                  <Card.Text style={{ marginLeft: "20px" }}>
                    <span style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-thumbs-up"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Likes</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span>70% Increase in 30 Days</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-warning bg-gradient m-2 d-flex align-items-center flex-row shadow-sm  rounded productCard">
                  <Card.Text className="rounded" style={{ marginLeft: "20px" }}>
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="far fa-calendar-alt"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Events</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span>70% Increase in 30 Days</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-danger bg-gradient m-2 d-flex align-items-center flex-row shadow-sm rounded productCard">
                  <Card.Text className="rounded" style={{ marginLeft: "20px" }}>
                    <span className="rounded" style={{ margin: "auto 10px" }}>
                      <i
                        className="fas fa-comments"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </span>
                  </Card.Text>
                  <Card.Body>
                    <Card.Text>
                      <span>Comments</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold">41,410</span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        className="progress"
                        style={{
                          height: "3px",
                          backgroundColor: "rgba(0,0,0,.1)",
                        }}
                      >
                        <span
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ backgroundColor: "#fff" }}
                        ></span>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span>70% Increase in 30 Days</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div className=" fs-4">Small Box</div>
            </div>
            <Row>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card
                  className="bg-gradient shadow-sm rounded hoverSmallBox"
                  style={{ backgroundColor: "#17a2b8" }}
                >
                  <Card.Body
                    className="d-flex flex-row justify-content-around"
                    style={{
                      padding: "5px",
                      paddingTop: "10px",
                      height: "7em",
                    }}
                  >
                    <Card.Text className="textValue">
                      <span className="h3">150</span>
                      <span>New Orders</span>
                    </Card.Text>
                    <div className="float-right p-1 iconWidth">
                      <i
                        className="fas fa-5x fa-shopping-cart hoverIcon"
                        style={{ zIndex: "-1000", color: "rgba(0,0,0,.1)" }}
                      ></i>
                    </div>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "rgba(0,0,0,.1)",
                      padding: "5px",
                      paddingTop: "13px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      to="/"
                      className="small-box-footer text-decoration-none h6"
                    >
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-success bg-gradient shadow-sm rounded hoverSmallBox">
                  <Card.Body
                    className="d-flex flex-row justify-content-around"
                    style={{
                      padding: "5px",
                      paddingTop: "10px",
                      height: "7em",
                    }}
                  >
                    <Card.Text className="textValue">
                      <span className="h3">53%</span>
                      <span>Bounce Rate</span>
                    </Card.Text>
                    <div className="float-right p-1 iconWidth">
                      {/* <i className="ion ion-stats-bars" style={{color: 'rgba(0,0,0,.1)' }}></i> */}
                      <i
                        className="fas fa-5x fa-stats-bars hoverIcon"
                        style={{ color: "rgba(0,0,0,.1)" }}
                      ></i>
                    </div>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "rgba(0,0,0,.1)",
                      padding: "5px",
                      paddingTop: "13px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      to="/"
                      className="small-box-footer text-decoration-none h6"
                    >
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-warning bg-gradient shadow-sm rounded hoverSmallBox">
                  <Card.Body
                    className="d-flex flex-row justify-content-around"
                    style={{
                      padding: "5px",
                      paddingTop: "10px",
                      height: "7em",
                    }}
                  >
                    <Card.Text className="textValue">
                      <span className="h3">44</span>
                      <span>User Registrations</span>
                    </Card.Text>
                    <div className="float-right p-1 iconWidth">
                      <i
                        className="fas fa-5x fa-user-plus hoverIcon"
                        style={{ zIndex: "-1000", color: "rgba(0,0,0,.1)" }}
                      ></i>
                    </div>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "rgba(0,0,0,.1)",
                      padding: "5px",
                      paddingTop: "13px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      to="/"
                      className="small-box-footer text-decoration-none h6"
                    >
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="bg-danger bg-gradient shadow-sm rounded hoverSmallBox">
                  <Card.Body
                    className="d-danger d-flex flex-row justify-content-around"
                    style={{
                      padding: "5px",
                      paddingTop: "10px",
                      height: "7em",
                    }}
                  >
                    <Card.Text className="textValue">
                      <span className="h3">65</span>
                      <span>Unique Visitors</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="float-right p-1 iconWidth">
                        <i
                          className="fas fa-5x fa-chart-pie hoverIcon"
                          style={{ zIndex: "-1000", color: "rgba(0,0,0,.1)" }}
                        ></i>
                      </span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "rgba(0,0,0,.1)",
                      padding: "5px",
                      paddingTop: "13px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      to="/"
                      className="small-box-footer text-decoration-none h6"
                    >
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card
                  className="bg-gradient shadow-sm rounded hoverSmallBox overlay"
                  style={{ backgroundColor: "#17a2b8" }}
                >
                  <Card.Body
                    className="d-flex flex-row justify-content-around"
                    style={{
                      padding: "5px",
                      paddingTop: "10px",
                      height: "7em",
                    }}
                  >
                    <Card.Text className="textValue">
                      <span className="h3">150</span>
                      <span>New Orders</span>
                    </Card.Text>
                    <div className="float-right p-1 iconWidth">
                      <i
                        className="fas fa-5x fa-shopping-cart hoverIcon"
                        style={{ zIndex: "-1000", color: "rgba(0,0,0,.1)" }}
                      ></i>
                    </div>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "rgba(0,0,0,.1)",
                      padding: "5px",
                      paddingTop: "13px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      to="/"
                      className="small-box-footer text-decoration-none h6"
                    >
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                  </Card.Footer>
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: "white",
                      opacity: ".5",
                      fontSize: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaSyncAlt />
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card
                  className="bg-success bg-gradient shadow-sm rounded hoverSmallBox"
                  style={{ backgroundColor: "rgba(255,255,255,.7)" }}
                >
                  <Card.Body
                    className="d-flex flex-row justify-content-around "
                    style={{ padding: "5px", paddingTop: "8px", height: "7em" }}
                  >
                    <Card.Text className="textValue">
                      <span className="h3">53%</span>
                      <span>Bounce Rate</span>
                    </Card.Text>
                    <div className="float-right iconWidth">
                      <i
                        className="fas fa-5x fa-stats-bars hoverIcon"
                        style={{ color: "rgba(0,0,0,.1)" }}
                      ></i>
                    </div>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      backgroundColor: "rgba(0,0,0,.1)",
                      padding: "5px",
                      paddingTop: "13px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      to="/"
                      className="small-box-footer text-decoration-none h6"
                    >
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                  </Card.Footer>
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: "rgb(0 0 0 / 96%)",
                      color: "white",
                      opacity: ".5",
                      fontSize: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaSyncAlt />
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="fs-4">Cards</div>
            <Row>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-primary d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Expandable</Card.Text>
                    <Card.Text
                      onClick={() => setIsExpanded(!isExpanded)}
                      style={{ cursor: "pointer" }}
                    >
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={isExpanded}>
                    <Card.Body>
                      <div>The body of the card</div>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-success d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Collapsable</Card.Text>
                    <Card.Text
                      onClick={() => setIsCollapsable(!isCollapsable)}
                      style={{ cursor: "pointer" }}
                    >
                      {isCollapsable ? <FaMinus /> : <FaPlus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={isCollapsable}>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Collapse in={removable}>
                  <Card
                    className={`shadow-sm rounded`}
                    style={{ transition: "all 0.9s" }}
                  >
                    <Card.Header className="bg-warning d-flex flex-row justify-content-between cardStyle">
                      <Card.Text>Removable</Card.Text>
                      <Card.Text
                        onClick={handleRemovable}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fas fa-times"></i>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Collapse>
              </Col>
              <Col className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <Card className={`shadow-sm rounded`} id="firstMaxCard">
                  <Card.Header className="bg-danger d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Maximizable</Card.Text>
                    <Card.Text
                      onClick={handleMaximize}
                      style={{ cursor: "pointer" }}
                    >
                      {maximize ? <FaCompress /> : <FaExpand />}
                    </Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-primary d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Card Refresh</Card.Text>
                    <Card.Text
                      onClick={handleRefersh}
                      style={{ cursor: "pointer" }}
                    >
                      <FaSyncAlt />
                    </Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>The body of the card after card refresh</span>
                    </Card.Text>
                  </Card.Body>
                  {refresh && (
                    <Card.ImgOverlay
                      style={{
                        backgroundColor: "white",
                        opacity: ".5",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaSyncAlt />
                    </Card.ImgOverlay>
                  )}
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Collapse in={removableInAll}>
                  <Card
                    id="MaxCardInAll"
                    className={`shadow-sm rounded ${maximizeAll && "square"}`}
                    style={{ transition: "all 0.5s" }}
                  >
                    <Card.Header className="bg-success d-flex flex-row justify-content-between cardStyle">
                      <Card.Text>All together</Card.Text>
                      <Card.Text
                        style={{
                          width: "6em",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={handleAllRefersh}
                        >
                          <FaSyncAlt />
                        </span>
                        <span
                          onClick={handleAllMaximize}
                          style={{ cursor: "pointer" }}
                        >
                          {maximizeAll ? <FaCompress /> : <FaExpand />}
                        </span>
                        <span
                          onClick={() => setIsExpandedInAll(!isExpandedInAll)}
                          style={{ cursor: "pointer" }}
                        >
                          {isExpandedInAll ? <FaMinus /> : <FaPlus />}
                        </span>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={handleRemovableInAll}
                        >
                          <i className="fas fa-times"></i>
                        </span>
                      </Card.Text>
                    </Card.Header>
                    <Collapse in={isExpandedInAll}>
                      <Card.Body>
                        <Card.Text>
                          <span>The body of the card</span>
                        </Card.Text>
                      </Card.Body>
                    </Collapse>
                    {refreshAll && (
                      <Card.ImgOverlay
                        style={{
                          backgroundColor: "white",
                          opacity: ".5",
                          fontSize: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FaSyncAlt />
                      </Card.ImgOverlay>
                    )}
                  </Card>
                </Collapse>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-warning d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Loading State</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: "white",
                      opacity: ".5",
                      fontSize: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaSyncAlt />
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-danger d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Loading State (dark)</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: "rgb(0 0 0 / 96%)",
                      color: "white",
                      opacity: ".5",
                      fontSize: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaSyncAlt />
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div>
                <span className=" fs-4">Custom Shadows Variations</span>
                <span className="fst-italic ps-1">
                  Using Bootstrap's Shadow Utility
                </span>
              </div>
            </div>
            <Row>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded shadow-none">
                  <Card.Header className="bg-primary d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Shadow - None</Card.Text>
                    <Card.Text
                      onClick={() => setShadnowNoneClp(!shadnowNoneClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {shadnowNoneClp ? <FaMinus /> : <FaPlus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={shadnowNoneClp}>
                    <Card.Body>
                      <Card.Text>The body of the card</Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded shadow-sm">
                  <Card.Header className="bg-success d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Shadow - Small</Card.Text>
                    <Card.Text
                      onClick={() => setShadnowSmallClp(!shadnowSmallClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {shadnowSmallClp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={shadnowSmallClp}>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Collapse in={rShadow}>
                  <Card className="shadow rounded">
                    <Card.Header className="bg-warning d-flex flex-row justify-content-between cardStyle">
                      <Card.Text>Shadow - Regular</Card.Text>
                      <Card.Text
                        onClick={() => setRSahdow(!rShadow)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fas fa-times"></i>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Collapse>
              </Col>
              <Col className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <Card
                  id="MaxCardInShadow"
                  className={`shadow-lg rounded ${maximize && "square"}`}
                >
                  <Card.Header className="bg-danger d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Shadow - Large</Card.Text>
                    <Card.Text
                      onClick={handleMaximizeInShadow}
                      style={{ cursor: "pointer" }}
                    >
                      {maximize ? <FaCompress /> : <FaExpand />}
                    </Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div>
                <span className=" fs-4">Colors Variations</span>
              </div>
            </div>
            <Row>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-primary d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Primary</Card.Text>
                    <Card.Text
                      onClick={() => setPrimaryClp(!primaryClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!primaryClp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={primaryClp}>
                    <Card.Body>
                      <Card.Text>The body of the card</Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Collapse in={rSuccess1}>
                  <Card className="shadow-sm rounded">
                    <Card.Header className="bg-success d-flex flex-row justify-content-between cardStyle">
                      <Card.Text>Success</Card.Text>
                      <Card.Text
                        onClick={() => setRSuccess1(!rSuccess1)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fas fa-times"></i>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Collapse>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-warning d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Warning</Card.Text>
                    <Card.Text
                      onClick={() => setWarningClp(!warningClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!warningClp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={warningClp}>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <Card className={`shadow-sm rounded ${maximize && "square"}`}>
                  <Card.Header className="bg-danger d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Danger</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card
                  className="shadow-sm rounded"
                  style={{ borderTop: "3px solid #007bff" }}
                >
                  <Card.Header className="d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Primary Outline</Card.Text>
                    <Card.Text
                      onClick={() => setPrimaryOutClp(!primaryOutClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!primaryOutClp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={primaryOutClp}>
                    <Card.Body>
                      <Card.Text>The body of the card</Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Collapse in={rSuccess2}>
                  <Card
                    className="shadow-sm rounded"
                    style={{ borderTop: "3px solid #28a745" }}
                  >
                    <Card.Header className="d-flex flex-row justify-content-between cardStyle">
                      <Card.Text>Success Outline</Card.Text>
                      <Card.Text
                        onClick={() => setRSuccess2(!rSuccess2)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fas fa-times"></i>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Collapse>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card
                  className="shadow-sm rounded"
                  style={{ borderTop: "3px solid #ffc107" }}
                >
                  <Card.Header className="d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Warning Outline</Card.Text>
                    <Card.Text
                      onClick={() => setWarningOutClp(!warningOutClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!warningOutClp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={warningOutClp}>
                    <Card.Body>
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <Card
                  className={`shadow-sm rounded ${maximize && "square"}`}
                  style={{ borderTop: "3px solid #dc3545" }}
                >
                  <Card.Header className="d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Danger Outline</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-primary d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Primary</Card.Text>
                    <Card.Text
                      onClick={() => setPrimary2Clp(!primary2Clp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!primary2Clp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={primary2Clp}>
                    <Card.Body className="bg-primary">
                      <Card.Text>The body of the card</Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Collapse in={rSuccess3}>
                  <Card className="shadow-sm rounded">
                    <Card.Header className="bg-success d-flex flex-row justify-content-between cardStyle">
                      <Card.Text>Success</Card.Text>
                      <Card.Text
                        onClick={() => setRSuccess3(!rSuccess3)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fas fa-times"></i>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body className="bg-success">
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Collapse>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-warning d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Warning</Card.Text>
                    <Card.Text
                      onClick={() => setWarning2Clp(!warning2Clp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!warning2Clp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={warning2Clp}>
                    <Card.Body className="bg-warning">
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <Card className={`shadow-sm rounded ${maximize && "square"}`}>
                  <Card.Header className="bg-danger d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Danger</Card.Text>
                  </Card.Header>
                  <Card.Body className="bg-danger">
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-primary bg-gradient d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Primary Gradient</Card.Text>
                    <Card.Text
                      onClick={() => setPrimaryGrtClp(!primaryGrtClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!primaryGrtClp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={primaryGrtClp}>
                    <Card.Body className="bg-primary">
                      <Card.Text>The body of the card</Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Collapse in={rSuccess4}>
                  <Card className="shadow-sm bg-gradient rounded">
                    <Card.Header className="bg-success d-flex flex-row justify-content-between cardStyle">
                      <Card.Text>Success Gradient</Card.Text>
                      <Card.Text
                        onClick={() => setRSuccess4(!rSuccess4)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fas fa-times"></i>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body className="bg-success">
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Collapse>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-warning bg-gradient d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Warning Gradient</Card.Text>
                    <Card.Text
                      onClick={() => setWarningGrtClp(!warningGrtClp)}
                      style={{ cursor: "pointer" }}
                    >
                      {!warningGrtClp ? <FaPlus /> : <FaMinus />}
                    </Card.Text>
                  </Card.Header>
                  <Collapse in={warningGrtClp}>
                    <Card.Body className="bg-warning">
                      <Card.Text>
                        <span>The body of the card</span>
                      </Card.Text>
                    </Card.Body>
                  </Collapse>
                </Card>
              </Col>
              <Col className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <Card className={`shadow-sm rounded ${maximize && "square"}`}>
                  <Card.Header className="bg-danger bg-gradient d-flex flex-row justify-content-between cardStyle">
                    <Card.Text>Danger Gradient</Card.Text>
                  </Card.Header>
                  <Card.Body className="bg-danger">
                    <Card.Text>
                      <span>The body of the card</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="fs-4">Direct Chat</div>
            <Row>
              <div className="container">
                <div className="row bootstrap snippets bootdeys">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect1}>
                      <div className="box box-primary direct-chat direct-chat-primary shadow-sm">
                        <div className="box-header with-border">
                          <h3 className="box-title">Direct Chat</h3>
                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title=""
                              className="bg-primary text-white badgeStyle shadow-none"
                              data-original-title="3 New Messages"
                            >
                              3
                            </span>
                            <button
                              onClick={() => setDirectChatClp1(!directChatClp1)}
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="collapse"
                            >
                              {directChatClp1 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                              onClick={() => setHandleComment1(!handleComment1)}
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect1(!rDirect1)}
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directChatClp1}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>

                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-primary border-none">
                                  You better believe it!
                                </div>
                              </div>
                            </div>

                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment1 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <a href="/">
                                    <Image
                                      className="contacts-list-img"
                                      src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                    />

                                    <div className="contacts-list-info">
                                      <span className="contacts-list-name">
                                        Count Dracula
                                        <small className="contacts-list-date pull-right">
                                          2/28/2015
                                        </small>
                                      </span>
                                      <span className="contacts-list-msg">
                                        How have you been? I was...
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect2}>
                      <div className="box box-success direct-chat direct-chat-success shadow-sm">
                        <div className="box-header with-border">
                          <h3 className="box-title">Direct Chat</h3>

                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title="3 New Messages"
                              className="bg-success badgeStyle shadow-none"
                            >
                              3
                            </span>
                            <button
                              onClick={() => setDirectChatClp2(!directChatClp2)}
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="collapse"
                            >
                              {directChatClp2 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              onClick={() => setHandleComment2(!handleComment2)}
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect2(!rDirect2)}
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directChatClp2}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>

                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-success border-none">
                                  You better believe it!
                                </div>
                              </div>
                            </div>

                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment2 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <a href="/">
                                    <Image
                                      className="contacts-list-img"
                                      src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                    />

                                    <div className="contacts-list-info">
                                      <span className="contacts-list-name">
                                        Count Dracula
                                        <small className="contacts-list-date pull-right">
                                          2/28/2015
                                        </small>
                                      </span>
                                      <span className="contacts-list-msg">
                                        How have you been? I was...
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-success btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect3}>
                      <div className="box box-warning direct-chat direct-chat-warning border-none shadow-sm">
                        <div className="box-header bg-warning rounded-top">
                          <h3 className="box-title">Direct Chat</h3>

                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title="3 New Messages"
                              className="badgeStyle bg-warning text-black shadow-none"
                            >
                              3
                            </span>
                            <button
                              onClick={() => setDirectChatClp3(!directChatClp3)}
                              type="button"
                              className="btn btn-box-tool text-black shadow-none"
                              data-widget="collapse"
                            >
                              {directChatClp3 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              type="button"
                              onClick={() => setHandleComment3(!handleComment3)}
                              className="btn btn-box-tool text-black shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect3(!rDirect3)}
                              type="button"
                              className="btn btn-box-tool text-black shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directChatClp3}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>

                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-warning border-none text-black">
                                  You better believe it!
                                </div>
                              </div>
                            </div>
                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment3 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <Image
                                    className="contacts-list-img"
                                    src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Count Dracula
                                      <small className="contacts-list-date pull-right">
                                        2/28/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      How have you been? I was...
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-warning btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect4}>
                      <div className="box box-danger direct-chat direct-chat-danger border-none shadow-sm">
                        <div className="box-header bg-danger text-white rounded-top">
                          <h3 className="box-title text-white">Direct Chat</h3>
                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title="3 New Messages"
                              className="badgeStyle bg-danger shadow-none"
                            >
                              3
                            </span>
                            <button
                              onClick={() => setDirectChatClp4(!directChatClp4)}
                              type="button"
                              className="btn btn-box-tool text-white shadow-none"
                              data-widget="collapse"
                            >
                              {directChatClp4 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              type="button"
                              onClick={() => setHandleComment4(!handleComment4)}
                              className="btn btn-box-tool text-white shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect4(!rDirect4)}
                              type="button"
                              className="btn btn-box-tool text-white shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directChatClp4}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>
                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-danger border-none">
                                  You better believe it!
                                </div>
                              </div>
                            </div>
                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment4 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <Image
                                    className="contacts-list-img"
                                    src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  />

                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Count Dracula
                                      <small className="contacts-list-date pull-right">
                                        2/28/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      How have you been? I was...
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-danger btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div>
                <span className=" fs-4">Custom Shadows Variations</span>
                <span className="fst-italic ps-1">
                  Using Bootstrap's Shadow Utility
                </span>
              </div>
            </div>
            <Row>
              <div className="container">
                <div className="row bootstrap snippets bootdeys">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect5}>
                      <div className="box box-primary direct-chat direct-chat-primary shadow-none">
                        <div className="box-header with-border">
                          <h3 className="box-title">Shadow - None</h3>
                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title=""
                              className="bg-primary text-white badgeStyle shadow-none"
                              data-original-title="3 New Messages"
                            >
                              3
                            </span>
                            <button
                              onClick={() =>
                                setDirectShadowClp1(!directShadowClp1)
                              }
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="collapse"
                            >
                              {directShadowClp1 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              type="button"
                              onClick={() => setHandleComment5(!handleComment5)}
                              className="btn btn-box-tool shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect5(!rDirect5)}
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directShadowClp1}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>

                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-primary border-none">
                                  You better believe it!
                                </div>
                              </div>
                            </div>

                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment5 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <a href="/">
                                    <Image
                                      className="contacts-list-img"
                                      src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                    />

                                    <div className="contacts-list-info">
                                      <span className="contacts-list-name">
                                        Count Dracula
                                        <small className="contacts-list-date pull-right">
                                          2/28/2015
                                        </small>
                                      </span>
                                      <span className="contacts-list-msg">
                                        How have you been? I was...
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect6}>
                      <div className="box box-success direct-chat direct-chat-success shadow-sm">
                        <div className="box-header with-border">
                          <h3 className="box-title">Shadow - small</h3>

                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title="3 New Messages"
                              className="bg-success badgeStyle shadow-none"
                            >
                              3
                            </span>
                            <button
                              onClick={() =>
                                setDirectShadowClp2(!directShadowClp2)
                              }
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="collapse"
                            >
                              {directShadowClp2 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              type="button"
                              onClick={() => setHandleComment6(!handleComment6)}
                              className="btn btn-box-tool shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect6(!rDirect6)}
                              type="button"
                              className="btn btn-box-tool shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directShadowClp2}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>

                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-success border-none">
                                  You better believe it!
                                </div>
                              </div>
                            </div>

                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment6 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <a href="/">
                                    <Image
                                      className="contacts-list-img"
                                      src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                    />

                                    <div className="contacts-list-info">
                                      <span className="contacts-list-name">
                                        Count Dracula
                                        <small className="contacts-list-date pull-right">
                                          2/28/2015
                                        </small>
                                      </span>
                                      <span className="contacts-list-msg">
                                        How have you been? I was...
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-success btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect7}>
                      <div className="box box-warning direct-chat direct-chat-warning shadow border-none">
                        <div className="box-header bg-warning rounded-top">
                          <h3 className="box-title ">Shadow - Regular</h3>

                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title="3 New Messages"
                              className="badgeStyle bg-warning text-black shadow-none"
                            >
                              3
                            </span>
                            <button
                              onClick={() =>
                                setDirectShadowClp3(!directShadowClp3)
                              }
                              type="button"
                              className="btn btn-box-tool text-black shadow-none"
                              data-widget="collapse"
                            >
                              {directShadowClp3 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              type="button"
                              onClick={() => setHandleComment7(!handleComment7)}
                              className="btn btn-box-tool text-black shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect7(!rDirect7)}
                              type="button"
                              className="btn btn-box-tool text-black shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directShadowClp3}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>

                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-warning border-none text-black">
                                  You better believe it!
                                </div>
                              </div>
                            </div>
                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment7 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <Image
                                    className="contacts-list-img"
                                    src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Count Dracula
                                      <small className="contacts-list-date pull-right">
                                        2/28/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      How have you been? I was...
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-warning btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Collapse in={rDirect8}>
                      <div className="box box-danger direct-chat direct-chat-danger shadow-lg border-none">
                        <div className="box-header bg-danger text-white rounded-top">
                          <h3 className="box-title text-white">
                            Shadow - Large
                          </h3>
                          <div className="box-tools pull-right">
                            <span
                              data-toggle="tooltip"
                              title="3 New Messages"
                              className="badgeStyle bg-danger shadow-none"
                            >
                              3
                            </span>
                            <button
                              onClick={() =>
                                setDirectShadowClp4(!directShadowClp4)
                              }
                              type="button"
                              className="btn btn-box-tool text-white shadow-none"
                              data-widget="collapse"
                            >
                              {directShadowClp4 ? <FaMinus /> : <FaPlus />}
                            </button>
                            <button
                              type="button"
                              onClick={() => setHandleComment8(!handleComment8)}
                              className="btn btn-box-tool text-white shadow-none"
                              data-toggle="tooltip"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fa fa-comments"></i>
                            </button>
                            <button
                              onClick={() => setRDirect8(!rDirect8)}
                              type="button"
                              className="btn btn-box-tool text-white shadow-none"
                              data-widget="remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <Collapse in={directShadowClp4}>
                          <div className="box-body">
                            <div className="direct-chat-messages">
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    Alexander Pierce
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text">
                                  Is this template really for free? That's
                                  unbelievable!
                                </div>
                              </div>
                              <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-right">
                                    Sarah Bullock
                                  </span>
                                  <span className="direct-chat-timestamp pull-left">
                                    23 Jan 2:05 pm
                                  </span>
                                </div>
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="Message User Image"
                                />
                                <div className="direct-chat-text bg-danger border-none">
                                  You better believe it!
                                </div>
                              </div>
                            </div>
                            <div
                              className="direct-chat-contacts"
                              style={{
                                transition: "all .5s",
                                left: `${handleComment8 ? "-100%" : "100%"}`,
                              }}
                            >
                              <ul className="contacts-list">
                                <li>
                                  <Image
                                    className="contacts-list-img"
                                    src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                                  />

                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Count Dracula
                                      <small className="contacts-list-date pull-right">
                                        2/28/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      How have you been? I was...
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="box-footer">
                            <form action="#" method="post">
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Type Message ..."
                                  className="form-control"
                                />
                                <span className="input-group-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-danger btn-flat"
                                  >
                                    Send
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="fs-4">Social Widgets</div>
            <Row>
              <Col xl={4} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header className="bg-warning d-flex flex-row justify-content-normal">
                    <Image
                      style={{
                        boxShadow:
                          "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
                        float: "left",
                        height: "65px",
                        width: "65px",
                        marginTop: "15px",
                      }}
                      className="direct-chat-img"
                      src="https://adminlte.io/themes/v3/dist/img/user7-128x128.jpg"
                      alt="Message User Image"
                    />
                    <Card.Text
                      className="d-flex flex-column p-2"
                      style={{ cursor: "pointer", float: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      >
                        Nadia Carmichael
                      </span>
                      <span style={{ fontSize: "1.25rem" }}>
                        Lead Developer
                      </span>
                    </Card.Text>
                  </Card.Header>
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
                          style={{ color: "#007bff" }}
                        >
                          Projects
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-primary float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          3
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
                          style={{ color: "#007bff" }}
                        >
                          Tasks
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-info float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          5
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
                          style={{ color: "#007bff" }}
                        >
                          Completed Projects
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-success float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          12
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
                          style={{ color: "#007bff" }}
                        >
                          Followers
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-danger float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          842
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header
                    className="bg-info d-flex flex-column"
                    style={{ height: "135px" }}
                  >
                    <Card.Text
                      className="d-flex flex-column p-2 justify-content-center align-items-center"
                      style={{ cursor: "pointer", float: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      >
                        Alexander Pierce
                      </span>
                      <span style={{ fontSize: "1.25rem" }}>Founder & CEO</span>
                    </Card.Text>
                  </Card.Header>
                  <Image
                    style={{
                      boxShadow:
                        "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
                      border: "3px solid #fff",
                      float: "left",
                      height: "65px",
                      width: "65px",
                      marginTop: "15px",
                      backgroundColor: "#1f2d3d !important",
                      left: "50%",
                      marginLeft: "-33px",
                      position: "absolute",
                      top: "80px",
                      zIndex: "100",
                    }}
                    className="direct-chat-img"
                    src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
                  <Card.Body
                    className="p-0"
                    style={{ padding: "0.75rem 1.25rem", borderTop: "0px" }}
                  >
                    <Card.Text
                      className="d-flex flex-row justify-content-center align-items-center  bd-highlight"
                      style={{ paddingTop: "50px", paddingBottom: "10px" }}
                    >
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          3,200
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          SALES
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center  mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          13,000
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          FOLLOWERS
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          35
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          PRODUCTS
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12}>
                <Card className="shadow-sm rounded">
                  <Card.Header
                    className="bg-info d-flex flex-column"
                    style={{ height: "135px" }}
                  >
                    <Card.Text
                      className="d-flex flex-column p-2 justify-content-center align-items-end"
                      style={{ cursor: "pointer", float: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      >
                        Elizabeth Pierce
                      </span>
                      <span style={{ fontSize: "1.25rem" }}>Web Designer</span>
                    </Card.Text>
                  </Card.Header>
                  <Image
                    style={{
                      boxShadow:
                        "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
                      border: "3px solid #fff",
                      float: "left",
                      height: "65px",
                      width: "65px",
                      marginTop: "15px",
                      backgroundColor: "#1f2d3d !important",
                      left: "50%",
                      marginLeft: "-33px",
                      position: "absolute",
                      top: "80px",
                      zIndex: "100",
                    }}
                    className="direct-chat-img"
                    src="https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  <Card.Body
                    className="p-0"
                    style={{ padding: "0.75rem 1.25rem", borderTop: "0px" }}
                  >
                    <Card.Text
                      className="d-flex flex-row justify-content-center align-items-center  bd-highlight"
                      style={{ paddingTop: "50px", paddingBottom: "10px" }}
                    >
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          3,200
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          SALES
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center  mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          13,000
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          FOLLOWERS
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          35
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          PRODUCTS
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <div className="container">
                <div className="row bootstrap snippets bootdeys">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <Collapse in={rSocial1}>
                      <div className="box box-primary direct-chat direct-chat-primary shadow-none border-none">
                        <div className="box-header with-border">
                          <span className="float-left d-block">
                            <Image
                              className="direct-chat-img"
                              src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                              alt="Message User Image"
                            />
                            <span className="box-title d-flex flex-column">
                              <a
                                href="/"
                                style={{ fontSize: "16px", marginLeft: "10px" }}
                              >
                                Jonathan Burke Jr.
                              </a>
                              <span
                                style={{ fontSize: "13px", marginLeft: "10px" }}
                              >
                                Shared publicly - 7:30 PM Today
                              </span>
                            </span>
                          </span>
                          <div className="box-tools pull-right">
                            <span style={{ margin: "10px" }}>
                              <i className="fas fa-circle"></i>
                            </span>
                            <span
                              onClick={() => setSocialClp1(!socialClp1)}
                              style={{ cursor: "pointer", margin: "10px" }}
                            >
                              {socialClp1 ? <FaMinus /> : <FaPlus />}
                            </span>
                            <span
                              style={{ cursor: "pointer", margin: "10px" }}
                              onClick={() => setRSocial1(!rSocial1)}
                            >
                              <i className="fa fa-times"></i>
                            </span>
                          </div>
                        </div>
                        <Collapse in={socialClp1}>
                          <div className="box-body">
                            <div className="p-3">
                              <Image
                                src="https://adminlte.io/themes/v3/dist/img/photo2.png"
                                alt="Message User Image"
                              />
                              <span>
                                I took this photo this morning. What do you guys
                                think?
                              </span>
                            </div>
                            <div className="ps-3">
                              <button
                                type="button"
                                className="btn btn-default btn-sm border "
                              >
                                <i className="fas fa-share"></i> Share
                              </button>
                              <button
                                type="button"
                                className="btn btn-default btn-sm border ms-1"
                              >
                                <i className="far fa-thumbs-up"></i> Like
                              </button>
                              <span className="float-right text-muted pe-3">
                                127 likes - 3 comments
                              </span>
                            </div>
                            <div className="d-flex flex-column p-3 ">
                              <div className="">
                                <Image
                                  className="direct-chat-img"
                                  src="https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="User Image"
                                />
                                <div className="d-flex flex-column ps-2">
                                  <span className="fw-bold">
                                    Maria Gonzales
                                    <span className="text-muted float-right">
                                      8:03 PM Today
                                    </span>
                                  </span>
                                  <span>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                  </span>
                                </div>
                              </div>
                              <hr />
                              <div className="">
                                <Image
                                  className="direct-chat-img"
                                  src="https://adminlte.io/themes/v3/dist/img/user4-128x128.jpg"
                                  alt="User Image"
                                />
                                <div className="d-flex flex-column ps-2">
                                  <span className="fw-bold">
                                    Luna Stark
                                    <span className="text-muted float-right">
                                      8:03 PM Today
                                    </span>
                                  </span>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <form action="#" method="post">
                              <div className="d-flex flex-row justify-content-center align-items-center">
                                <Image
                                  className="direct-chat-img"
                                  src="https://adminlte.io/themes/v3/dist/img/user4-128x128.jpg"
                                  alt="User Image"
                                />
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Press enter to post comment"
                                  className="ms-2"
                                />
                                <span className="input-group-btn"></span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <Collapse in={rSocial2}>
                      <div className="box box-primary direct-chat direct-chat-primary shadow-none border-none">
                        <div className="box-header with-border">
                          <span className="float-left d-block">
                            <Image
                              className="direct-chat-img"
                              src="	https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                              alt="Message User Image"
                            />
                            <span className="box-title d-flex flex-column">
                              <a
                                href="/"
                                style={{ fontSize: "16px", marginLeft: "10px" }}
                              >
                                Jonathan Burke Jr.
                              </a>
                              <span
                                style={{ fontSize: "13px", marginLeft: "10px" }}
                              >
                                Shared publicly - 7:30 PM Today
                              </span>
                            </span>
                          </span>
                          <div className="box-tools pull-right">
                            <span style={{ margin: "10px" }}>
                              <i className="fas fa-circle"></i>
                            </span>
                            <span
                              onClick={() => setSocialClp2(!socialClp2)}
                              style={{ cursor: "pointer", margin: "10px" }}
                            >
                              {socialClp2 ? <FaMinus /> : <FaPlus />}
                            </span>
                            <span
                              style={{ cursor: "pointer", margin: "10px" }}
                              onClick={() => setRSocial2(!rSocial2)}
                            >
                              <i className="fa fa-times"></i>
                            </span>
                          </div>
                        </div>
                        <Collapse in={socialClp2}>
                          <div className="box-body">
                            <div className="p-3 d-flex flex-column">
                              <span style={{ marginBottom: "16px" }}>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at
                              </span>
                              <span>
                                the coast of the Semantics, a large language
                                ocean. A small river named Duden flows by their
                                place and supplies it with the necessary
                                regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your
                                mouth.
                              </span>
                              <div
                                className="d-flex flex-row"
                                style={{
                                  backgroundColor: "#f8f9fa",
                                  border: "1px solid rgba(0,0,0,.125)",
                                  marginBottom: "10px",
                                  padding: "5px",
                                }}
                              >
                                <div
                                  style={{
                                    maxWidth: "100px",
                                    maxHeight: "100px",
                                  }}
                                >
                                  <Image
                                    className="attachment-img"
                                    src="https://adminlte.io/themes/v3/dist/img/photo1.png"
                                    alt="Attachment Image"
                                  />
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                  <h4 className="attachment-heading">
                                    <a href="https://www.lipsum.com/">
                                      Lorem ipsum text generator
                                    </a>
                                  </h4>
                                  <div className="attachment-text">
                                    Description about the attachment can be
                                    placed here. Lorem Ipsum is simply dummy
                                    text of the printing and typesetting
                                    industry...
                                    <a href="/">more</a>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <button
                                  type="button"
                                  className="btn btn-default btn-sm border "
                                >
                                  <i className="fas fa-share"></i> Share
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-default btn-sm border ms-1"
                                >
                                  <i className="far fa-thumbs-up"></i> Like
                                </button>
                                <span className="float-right text-muted">
                                  45 likes - 2 comments
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-column p-3 ">
                              <div className="">
                                <Image
                                  className="direct-chat-img"
                                  src="https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                                  alt="User Image"
                                />
                                <div className="d-flex flex-column ps-2">
                                  <span className="fw-bold">
                                    Maria Gonzales
                                    <span className="text-muted float-right">
                                      8:03 PM Today
                                    </span>
                                  </span>
                                  <span>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                  </span>
                                </div>
                              </div>
                              <hr />
                              <div className="">
                                <Image
                                  className="direct-chat-img"
                                  src="	https://adminlte.io/themes/v3/dist/img/user5-128x128.jpg"
                                  alt="User Image"
                                />
                                <div className="d-flex flex-column ps-2">
                                  <span className="fw-bold">
                                    Luna Stark
                                    <span className="text-muted float-right">
                                      8:03 PM Today
                                    </span>
                                  </span>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <form action="#" method="post">
                              <div className="d-flex flex-row justify-content-center align-items-center">
                                <Image
                                  className="direct-chat-img"
                                  src="https://adminlte.io/themes/v3/dist/img/user4-128x128.jpg"
                                  alt="User Image"
                                />
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="Press enter to post comment"
                                  className="ms-2"
                                />
                                <span className="input-group-btn"></span>
                              </div>
                            </form>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="d-flex flex-row">
              <div>
                <span className=" fs-4">Custom Shadows Variations</span>
                <span className="fst-italic ps-1">
                  Using Bootstrap's Shadow Utility
                </span>
              </div>
            </div>
            <Row>
              <Col xl={4} lg={4} md={6} sm={12}>
                <Card className="shadow-none rounded">
                  <Card.Header className="bg-warning d-flex flex-row justify-content-normal">
                    <Image
                      style={{
                        boxShadow:
                          "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
                        float: "left",
                        height: "65px",
                        width: "65px",
                        marginTop: "15px",
                      }}
                      className="direct-chat-img"
                      src="https://adminlte.io/themes/v3/dist/img/user7-128x128.jpg"
                      alt="Message User Image"
                    />
                    <Card.Text
                      className="d-flex flex-column p-2"
                      style={{ cursor: "pointer", float: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      >
                        Nadia Carmichael
                      </span>
                      <span style={{ fontSize: "1.25rem" }}>
                        Lead Developer
                      </span>
                    </Card.Text>
                  </Card.Header>
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
                          style={{ color: "#007bff" }}
                        >
                          Projects
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-primary float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          3
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
                          style={{ color: "#007bff" }}
                        >
                          Tasks
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-info float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          5
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
                          style={{ color: "#007bff" }}
                        >
                          Completed Projects
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-success float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          12
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
                          style={{ color: "#007bff" }}
                        >
                          Followers
                        </a>
                        <span
                          data-toggle="tooltip"
                          title=""
                          className="bg-danger float-right text-white badgeStyle"
                          data-original-title="3 New Messages"
                        >
                          842
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12}>
                <Card className="shadow rounded">
                  <Card.Header
                    className="bg-info d-flex flex-column"
                    style={{ height: "135px" }}
                  >
                    <Card.Text
                      className="d-flex flex-column p-2 justify-content-center align-items-center"
                      style={{ cursor: "pointer", float: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      >
                        Alexander Pierce
                      </span>
                      <span style={{ fontSize: "1.25rem" }}>Founder & CEO</span>
                    </Card.Text>
                  </Card.Header>
                  <Image
                    style={{
                      boxShadow:
                        "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
                      border: "3px solid #fff",
                      float: "left",
                      height: "65px",
                      width: "65px",
                      marginTop: "15px",
                      backgroundColor: "#1f2d3d !important",
                      left: "50%",
                      marginLeft: "-33px",
                      position: "absolute",
                      top: "80px",
                      zIndex: "100",
                    }}
                    className="direct-chat-img"
                    src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                    alt="Message User Image"
                  />
                  <Card.Body
                    className="p-0"
                    style={{ padding: "0.75rem 1.25rem", borderTop: "0px" }}
                  >
                    <Card.Text
                      className="d-flex flex-row justify-content-center align-items-center  bd-highlight"
                      style={{ paddingTop: "50px", paddingBottom: "10px" }}
                    >
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          3,200
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          SALES
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center  mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          13,000
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          FOLLOWERS
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          35
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          PRODUCTS
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12}>
                <Card className="shadow-lg rounded">
                  <Card.Header
                    className="bg-info d-flex flex-column"
                    style={{ height: "135px" }}
                  >
                    <Card.Text
                      className="d-flex flex-column p-2 justify-content-center align-items-end"
                      style={{ cursor: "pointer", float: "left" }}
                    >
                      <span
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      >
                        Elizabeth Pierce
                      </span>
                      <span style={{ fontSize: "1.25rem" }}>Web Designer</span>
                    </Card.Text>
                  </Card.Header>
                  <Image
                    style={{
                      boxShadow:
                        "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
                      border: "3px solid #fff",
                      float: "left",
                      height: "65px",
                      width: "65px",
                      marginTop: "15px",
                      backgroundColor: "#1f2d3d !important",
                      left: "50%",
                      marginLeft: "-33px",
                      position: "absolute",
                      top: "80px",
                      zIndex: "100",
                    }}
                    className="direct-chat-img"
                    src="https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                    alt="Message User Image"
                  />
                  <Card.Body
                    className="p-0"
                    style={{ padding: "0.75rem 1.25rem", borderTop: "0px" }}
                  >
                    <Card.Text
                      className="d-flex flex-row justify-content-center align-items-center  bd-highlight"
                      style={{ paddingTop: "50px", paddingBottom: "10px" }}
                    >
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          3,200
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          SALES
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center  mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRight: "1px solid #dee2e6",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          13,000
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          FOLLOWERS
                        </span>
                      </span>
                      <span
                        className="d-flex flex-column justify-content-center align-items-center mb-0"
                        style={{
                          padding: "0.5rem 1rem",
                        }}
                      >
                        <span
                          className=""
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          35
                        </span>
                        <span
                          className=""
                          style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          PRODUCTS
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div className="fs-4">Card with Image Overlay</div>
          </Container>
          <Card>
            <Card.Body>
              <Row>
                <div className="col-md-12 col-lg-6 col-xl-4">
                  <div className="card mb-2 bg-gradient-dark">
                    <Image
                      className="card-img-top"
                      src="https://adminlte.io/themes/v3/dist/img/photo1.png"
                      alt="Dist Photo 1"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="card-title text-primary text-white">
                        Card Title
                      </h5>
                      <p className="card-text text-white pb-2 pt-1 fs-6 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do eiusmod tempor.
                      </p>
                      <a
                        href="/"
                        className="text-white fs-6 text-decoration-none"
                      >
                        Last update 2 mins ago
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                  <div className="card mb-2 bg-gradient-dark">
                    <Image
                      className="card-img-top"
                      src="https://adminlte.io/themes/v3/dist/img/photo2.png"
                      alt="Dist Photo 1"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                      <h5 className="card-title text-primary text-white">
                        Card Title
                      </h5>
                      <p className="card-text text-white pb-2 pt-1 fs-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do eiusmod tempor.
                      </p>
                      <a
                        href="/"
                        className="text-white fs-6 text-decoration-none"
                      >
                        Last update 15 hours ago
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                  <div className="card mb-2 bg-gradient-dark">
                    <Image
                      className="card-img-top"
                      src="https://adminlte.io/themes/v3/dist/img/photo3.jpg"
                      alt="Dist Photo 1"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-start">
                      <h5 className="card-title text-primary">Card Title</h5>
                      <p className="card-text text-white pb-2 pt-1 fs-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do eiusmod tempor.
                      </p>
                      <a
                        href="/"
                        className="text-white fs-6 text-decoration-none"
                      >
                        Last update 3 days ago
                      </a>
                    </div>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </section>
        <span
          onClick={scrollToTop}
          id="back-to-top"
          className="btn btn-primary back-to-top"
          role="button"
          aria-label="Scroll to top"
          style={{ display: visible ? "inline" : "none" }}
        >
          <i className="fas fa-chevron-up"></i>
        </span>
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
}

export default Widgets;
