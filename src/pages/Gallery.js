import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [modelImageData, setModelImageData] = useState({
    id: 2,
    title: "",
    image: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [firstModel, setFirstModel] = useState(false);
  const [secondModel, setSecondModel] = useState(false);

  const ImageData = [
    {
      id: 1,
      title: "sample 1 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=1",
    },
    {
      id: 2,
      title: "sample 2 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=2",
    },
    {
      id: 3,
      title: "sample 3 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=3",
    },
    {
      id: 4,
      title: "sample 4 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=4",
    },
    {
      id: 5,
      title: "sample 5 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=5",
    },
    {
      id: 6,
      title: "sample 6 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=6",
    },
    {
      id: 7,
      title: "sample 7 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=7",
    },
    {
      id: 8,
      title: "sample 8 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=8",
    },
    {
      id: 9,
      title: "sample 9 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=9",
    },
    {
      id: 10,
      title: "sample 10 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=10",
    },
    {
      id: 11,
      title: "sample 11 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=11",
    },
    {
      id: 12,
      title: "sample 12 - white",
      image: "https://via.placeholder.com/300/FFFFFF?text=12",
    },
  ];
  const handleAllItem = () => {
    console.log("all items");
  };

  const handleWhiteCategory = () => {
    console.log("category white items");
  };

  const handleBlackCategory = () => {
    console.log("category black items");
  };

  const handleColoredCategory = () => {
    console.log("category colored items");
  };

  const handleAllColoredCatgeory = () => {
    console.log("category with all colored");
  };

  // const allItem = ImageData.map((item, i) => {
  //   return (
  //     <div
  //       className={`carousel item${isActive === true ? " active" : ""}`}
  //       key={i}
  //     >
  //       <img src={item.image} className="d-block w-100" alt="..." />
  //     </div>
  //   );
  // });
  return (
    <>
      <div className="content-wrapper m-4">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Gallery</h1>
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
                  <div>Gallery</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <Container fluid="xs">
            <div>
              <Card>
                <Card.Header
                  className="rounded-top cardStyle"
                  style={{ backgroundColor: "#007bff" }}
                >
                  <span
                    className="rounded text-white"
                    style={{ margin: "auto 10px" }}
                  >
                    FilterizR Gallery with Ekko Lightbox
                  </span>
                </Card.Header>
                <Card.Body>
                  <nav className="nav">
                    <ul className="inner-nav">
                      <li className="nav-items" onClick={handleAllItem}>
                        <span className="nav-item">All items</span>
                      </li>
                      <li className="nav-items" onClick={handleWhiteCategory}>
                        <span className="nav-item">Category 1 (WHITE)</span>
                      </li>
                      <li className="nav-items" onClick={handleBlackCategory}>
                        <span className="nav-item">Category 2 (BLACK)</span>
                      </li>
                      <li className="nav-items" onClick={handleColoredCategory}>
                        <span className="nav-item">Category 3 (COLORED)</span>
                      </li>
                      <li
                        className="nav-items"
                        onClick={handleAllColoredCatgeory}
                      >
                        <span className="nav-item">
                          Category 4 (COLORED, BLACK)
                        </span>
                      </li>
                    </ul>
                  </nav>
                  <div className="mb-2 mt-2">
                    <a className="btn btn-secondary" href="/">
                      Shuffle items
                    </a>
                    <div className="float-right d-flex">
                      <select
                        className="custom-select"
                        style={{ width: "auto" }}
                        data-sortorder=""
                      >
                        <option value="index"> Sort by Position </option>
                        <option value="sortData">Sort by Custom Data</option>
                      </select>
                      <div className="btn-group ms-1">
                        <button className="rounded-start ps-3 pe-3">
                          Ascending
                        </button>
                        <button className="rounded-end ps-3 pe-3">
                          Descending
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="filter-container p-0 row"
                    style={{
                      padding: "13px",
                      position: "relative",
                      width: "100%",
                      display: "flex",
                      flexwrap: "wrap",
                      height: "499px",
                    }}
                  >
                    <div
                      className="filtr-item col-sm-2"
                      data-category="1"
                      data-sort="white sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(0px, 0px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 1 - white"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 1 - white",
                            image:
                              "https://via.placeholder.com/300/FFFFFF?text=1",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FFFFFF?text=1"
                          className="img-fluid mb-2"
                          alt="white sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="2, 4"
                      data-sort="black sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(205px, 0px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 2 - black"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setIsActive(true);
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 2 - black",
                            image:
                              "https://via.placeholder.com/300/000000?text=2",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/000000?text=2"
                          className="img-fluid mb-2"
                          alt="black sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="3, 4"
                      data-sort="red sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(410px, 0px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 3 - red"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 3 - red",
                            image:
                              "https://via.placeholder.com/300/FF0000/FFFFFF?text=3",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FF0000/FFFFFF?text=3"
                          className="img-fluid mb-2"
                          alt="red sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="3, 4"
                      data-sort="red sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(615px, 0px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 4 - red"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 4 - red",
                            image:
                              "https://via.placeholder.com/300/FF0000/FFFFFF?text=4",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FF0000/FFFFFF?text=4"
                          className="img-fluid mb-2"
                          alt="red sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="2, 4"
                      data-sort="black sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(820px, 0px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 5 - black"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 5 - black",
                            image:
                              "https://via.placeholder.com/300/000000?text=5",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/000000?text=5"
                          className="img-fluid mb-2"
                          alt="black sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="1"
                      data-sort="white sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(1025px, 0px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 6 - white"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 6 - white",
                            image:
                              "https://via.placeholder.com/300/FFFFFF?text=6",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FFFFFF?text=6"
                          className="img-fluid mb-2"
                          alt="white sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="1"
                      data-sort="white sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(0px, 198px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        href="https://via.placeholder.com/1200/FFFFFF.png?text=7"
                        data-toggle="lightbox"
                        data-title="sample 7 - white"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 7 - white",
                            image:
                              "https://via.placeholder.com/300/FFFFFF?text=7",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FFFFFF?text=7"
                          className="img-fluid mb-2"
                          alt="white sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="2, 4"
                      data-sort="black sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(205px, 198px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        href="https://via.placeholder.com/1200/000000.png?text=8"
                        data-toggle="lightbox"
                        data-title="sample 8 - black"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 8 - black",
                            image:
                              "https://via.placeholder.com/300/000000?text=8",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/000000?text=8"
                          className="img-fluid mb-2"
                          alt="black sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="3, 4"
                      data-sort="red sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(410px, 198px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 9 - red"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 9 - red",
                            image:
                              "https://via.placeholder.com/300/FF0000/FFFFFF?text=9",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FF0000/FFFFFF?text=9"
                          className="img-fluid mb-2"
                          alt="red sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="1"
                      data-sort="white sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(615px, 198px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 10 - white"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 10 - white",
                            image:
                              "https://via.placeholder.com/300/FFFFFF?text=10",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FFFFFF?text=10"
                          className="img-fluid mb-2"
                          alt="white sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="1"
                      data-sort="white sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(820px, 198px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 11 - white"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 11 - white",
                            image:
                              "https://via.placeholder.com/300/FFFFFF?text=11",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/FFFFFF?text=11"
                          className="img-fluid mb-2"
                          alt="white sample"
                        />
                      </span>
                    </div>
                    <div
                      className="filtr-item col-sm-2"
                      data-category="2, 4"
                      data-sort="black sample"
                      // style={{
                      //   opacity: "1",
                      //   transform: "scale(1) translate3d(1025px, 198px, 0px)",
                      //   backfaceVisibility: "hidden",
                      //   perspective: "1000px",
                      //   transformstyle: "preserve-3d",
                      //   position: "absolute",
                      //   width: "auto",
                      //   transition:
                      //     "all 0.5s ease-out 0ms, width 1ms ease 0s",
                      // }}
                    >
                      <span
                        data-toggle="lightbox"
                        data-title="sample 12 - black"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setFirstModel(true);
                          setModelImageData({
                            id: 2,
                            title: "sample 12 - black",
                            image:
                              "https://via.placeholder.com/300/000000?text=12",
                          });
                        }}
                      >
                        <img
                          src="https://via.placeholder.com/300/000000?text=12"
                          className="img-fluid mb-2"
                          alt="black sample"
                        />
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <Row sm={4} md={4} lg={4}>
              <Col xl={12} lg={12} md={12} sm={12}>
                <Card>
                  <Card.Header
                    className="rounded-top cardStyle"
                    style={{ backgroundColor: "#007bff" }}
                  >
                    <span
                      className="rounded text-white"
                      style={{ margin: "auto 10px" }}
                    >
                      Ekko Lightbox
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <div
                      className="filter-container p-0 row"
                      style={{
                        padding: "3px",
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        height: "auto",
                      }}
                    >
                      <div
                        className="filtr-item col-sm-2"
                        data-category="1"
                        data-sort="white sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FFFFFF.png?text=1"
                          data-toggle="lightbox"
                          data-title="sample 1 - white"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                        >
                          <img
                            src="https://via.placeholder.com/300/FFFFFF?text=1"
                            className="img-fluid mb-2"
                            alt="white sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="2, 4"
                        data-sort="black sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/000000.png?text=2"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 2 - black"
                        >
                          <img
                            src="https://via.placeholder.com/300/000000?text=2"
                            className="img-fluid mb-2"
                            alt="black sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="3, 4"
                        data-sort="red sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=3"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 3 - red"
                        >
                          <img
                            src="https://via.placeholder.com/300/FF0000/FFFFFF?text=3"
                            className="img-fluid mb-2"
                            alt="red sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="3, 4"
                        data-sort="red sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=4"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 4 - red"
                        >
                          <img
                            src="https://via.placeholder.com/300/FF0000/FFFFFF?text=4"
                            className="img-fluid mb-2"
                            alt="red sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="2, 4"
                        data-sort="black sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/000000.png?text=5"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 5 - black"
                        >
                          <img
                            src="https://via.placeholder.com/300/000000?text=5"
                            className="img-fluid mb-2"
                            alt="black sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="1"
                        data-sort="white sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FFFFFF.png?text=6"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 6 - white"
                        >
                          <img
                            src="https://via.placeholder.com/300/FFFFFF?text=6"
                            className="img-fluid mb-2"
                            alt="white sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="1"
                        data-sort="white sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FFFFFF.png?text=7"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 7 - white"
                        >
                          <img
                            src="https://via.placeholder.com/300/FFFFFF?text=7"
                            className="img-fluid mb-2"
                            alt="white sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="2, 4"
                        data-sort="black sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/000000.png?text=8"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 8 - black"
                        >
                          <img
                            src="https://via.placeholder.com/300/000000?text=8"
                            className="img-fluid mb-2"
                            alt="black sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="3, 4"
                        data-sort="red sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FF0000/FFFFFF.png?text=9"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 9 - red"
                        >
                          <img
                            src="https://via.placeholder.com/300/FF0000/FFFFFF?text=9"
                            className="img-fluid mb-2"
                            alt="red sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="1"
                        data-sort="white sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FFFFFF.png?text=10"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 10 - white"
                        >
                          <img
                            src="https://via.placeholder.com/300/FFFFFF?text=10"
                            className="img-fluid mb-2"
                            alt="white sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="1"
                        data-sort="white sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/FFFFFF.png?text=11"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 11 - white"
                        >
                          <img
                            src="https://via.placeholder.com/300/FFFFFF?text=11"
                            className="img-fluid mb-2"
                            alt="white sample"
                          />
                        </a>
                      </div>
                      <div
                        className="filtr-item col-sm-2"
                        data-category="2, 4"
                        data-sort="black sample"
                      >
                        <a
                          href="https://via.placeholder.com/1200/000000.png?text=12"
                          data-toggle="lightbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSecondModel(true);
                          }}
                          data-title="sample 12 - black"
                        >
                          <img
                            src="https://via.placeholder.com/300/000000?text=12"
                            className="img-fluid mb-2"
                            alt="black sample"
                          />
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        {firstModel && (
          <section className="model">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        {modelImageData.title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setFirstModel(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={modelImageData.image}
                        className="img-fluid mb-2"
                        alt="white sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {secondModel && (
          <section className="model2">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        {modelImageData.title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setSecondModel(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div
                        id="carouselExampleFade"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="https://via.placeholder.com/300/FFFFFF?text=1"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/000000?text=2"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/FF0000/FFFFFF?text=3"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/FF0000/FFFFFF?text=4"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/000000?text=5"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/FFFFFF?text=6"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/FFFFFF?text=7"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/000000?text=8"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/FF0000/FFFFFF?text=9"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/FFFFFF?text=10"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/FFFFFF?text=11"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://via.placeholder.com/300/000000?text=12"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleFade"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleFade"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
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

export default Gallery;
