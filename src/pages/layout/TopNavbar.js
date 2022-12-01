import React, { useState } from "react";
import "./topNavbar.css";
import { useDispatch } from "react-redux";
import { sidebarWidth } from "../../redux/redux-action";
import { Link } from "react-router-dom";
import { FaCompressArrowsAlt, FaExpandArrowsAlt } from "react-icons/fa";
// import { sidebarWidth } from '../../redux/redux-action';

function TopNavbar({ handleMaximize, maximize }) {
  const dispatch = useDispatch();
  const [sideWidth, setSideWidth] = useState("60px");
  const [title, setTitle] = useState("none");
  const [search, setSearch] = useState(false);

  const handleClickSidebar = () => {
    if (sideWidth === "60px") {
      setSideWidth("250px");
      setTitle("block");
    } else {
      setSideWidth("60px");
      setTitle("none");
    }
    dispatch(sidebarWidth(sideWidth, title));
  };

  const handleSaerchClicked = () => {
    setSearch(!search);
  };

  const handleCancelSearchClick = () => {
    setSearch(false);
  };

  return (
    <>
      <ul
        className="top-main"
        style={{
          overflow: "visible",
          backgroundColor: "white",
          height: "55px",
        }}
      >
        <div>
          <li className="topbar-li" style={{ float: "left", display: "flex" }}>
            <p className="menuBar" onClick={handleClickSidebar}>
              <i className="fas fa-bars"></i>
            </p>
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
          </li>
          <li
            className="topbar-li d-flex flex-row justify-content-center align-items-center"
            style={{ float: "right", display: "flex" }}
          >
            <div
              className="d-flex flex-row p-3"
              style={{ cursor: "pointer" }}
              onClick={handleSaerchClicked}
            >
              <i className="fas fa-search"></i>
            </div>

            <div className="dropdown">
              <div className="d-flex flex-row p-3" data-bs-toggle="dropdown">
                <div style={{ cursor: "pointer" }}>
                  <i className="fas fa-comments"></i>
                  <span
                    title="3 New Messages"
                    className="badge bg-danger"
                    style={{ fontSize: "0.55em" }}
                  >
                    3
                  </span>
                </div>
              </div>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="dropdownMenuButton1"
              >
                <div className="dropStyle show" style={{ padding: "0" }}>
                  <a
                    href="/"
                    className="dropdown-item"
                    style={{
                      borderBottom: "1px solid #d0d0d0",
                      padding: "0 16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "15em",
                      }}
                    >
                      <img
                        src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                        className="direct-chat-img img-circle mt-3 mb-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                        <h3
                          className="dropdown-item-title text-start mb-0"
                          style={{ fontSize: "1rem", marginLeft: "0" }}
                        >
                          Brad Diesel
                          <span className="float-right text-sm text-danger">
                            <i className="fas fa-star"></i>
                          </span>
                        </h3>
                        <p className="mb-0" style={{ fontSize: ".875rem" }}>
                          Call me whenever you can...
                        </p>
                        <p
                          className="text-muted float-left mb-0"
                          style={{ fontSize: ".875rem" }}
                        >
                          <i className="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="dropdown-item"
                    style={{
                      borderBottom: "1px solid #d0d0d0",
                      padding: "0 16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "15em",
                      }}
                    >
                      <img
                        src="	https://adminlte.io/themes/v3/dist/img/user8-128x128.jpg"
                        alt="User Avatar"
                        className="direct-chat-img img-circle mt-3 mb-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                        <h3
                          className="dropdown-item-title text-start mb-0"
                          style={{ fontSize: "1rem", marginLeft: "0" }}
                        >
                          John Pierce
                          <span className="float-right text-sm text-muted">
                            <i className="fas fa-star"></i>
                          </span>
                        </h3>
                        <p className="mb-0" style={{ fontSize: ".875rem" }}>
                          I got your message bro
                        </p>
                        <p
                          className="mb-0 text-muted float-left"
                          style={{ fontSize: ".875rem" }}
                        >
                          <i className="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="dropdown-item"
                    style={{
                      borderBottom: "1px solid #d0d0d0",
                      padding: "0 16px",
                    }}
                  >
                    <div
                      className="media d-flex align-items-center"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "15em",
                      }}
                    >
                      <img
                        src="	https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg"
                        alt="User Avatar"
                        className="direct-chat-img img-circle mt-3 mb-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                        <h3
                          className="dropdown-item-title text-start mb-0"
                          style={{ fontSize: "1rem", marginLeft: "0" }}
                        >
                          Nora Silvester
                          <span className="float-right text-sm text-warning">
                            <i className="fas fa-star"></i>
                          </span>
                        </h3>
                        <p className="mb-0" style={{ fontSize: ".875rem" }}>
                          The subject goes here
                        </p>
                        <p
                          className="mb-0 text-muted float-left"
                          style={{ fontSize: ".875rem" }}
                        >
                          <i className="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="dropdown-item dropdown-footer"
                    style={{
                      borderBottom: "1px solid #d0d0d0",
                      padding: "10px 16px",
                    }}
                  >
                    See All Messages
                  </a>
                </div>
              </ul>
            </div>
            <div className="dropdown">
              <div className="d-flex flex-row p-3" data-bs-toggle="dropdown">
                <div style={{ cursor: "pointer" }}>
                  <i className="far fa-bell"></i>
                  <span
                    title="3 New Messages"
                    className="badge bg-warning"
                    style={{ fontSize: "0.55em", margin: "3px -2px" }}
                  >
                    15
                  </span>
                </div>
              </div>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="dropdownMenuButton1"
              >
                <li
                  className="dropStyle"
                  style={{ borderBottom: "1px solid #d0d0d0" }}
                >
                  15 Notifications
                </li>
                <li
                  className="d-flex flex-row dropStyle"
                  style={{ borderBottom: "1px solid #d0d0d0" }}
                >
                  <div style={{ marginRight: "0.5rem", fontWeight: "900" }}>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <span>4 new messages</span>
                  <span className="float-right">3 mins</span>
                </li>
                <li
                  className="d-flex flex-row dropStyle"
                  style={{ borderBottom: "1px solid #d0d0d0" }}
                >
                  <div style={{ marginRight: "0.5rem", fontWeight: "900" }}>
                    <i className="fas fa-users"></i>
                  </div>
                  <span>8 friend requests</span>
                  <span>12 hours</span>
                </li>
                <li
                  className="d-flex dropStyle"
                  style={{ borderBottom: "1px solid #d0d0d0" }}
                >
                  <div
                    style={{
                      marginRight: "0.5rem",
                      fontWeight: "900",
                      marginLeft: "4px",
                    }}
                  >
                    <i className="fas fa-file"></i>
                  </div>
                  <span>3 new reports</span>
                  <span>2 days</span>
                </li>
                <li className="dropStyle">See All Notifications</li>
              </ul>
            </div>
            <div
              className="d-flex flex-row p-3"
              style={{ cursor: "pointer" }}
              onClick={handleMaximize}
            >
              {!maximize ? <FaExpandArrowsAlt /> : <FaCompressArrowsAlt />}
              {/* <i
              className={`fas ${
                !maximize ? "fa-expand- arrows-alt" : "fa-compress-arrows-alt"
              }`}
            ></i> */}
            </div>
            <div className="d-flex flex-row p-3" style={{ cursor: "pointer" }}>
              <i className="fas fa-th-large"></i>
            </div>
          </li>
        </div>
        {search && (
          <div
            className="navbar-search-block navbar-search-open"
            style={{ display: "flex", zIndex: "900000" }}
          >
            <form className="form-inline" style={{ width: "100%" }}>
              <div className="input-group input-group-sm inputWithButton">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "95%" }}
                />
                <div className="input-group-append" style={{ top: "0" }}>
                  <button className="btn" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <button
                    className="btn"
                    type="button"
                    data-widget="navbar-search"
                    onClick={handleCancelSearchClick}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </ul>
    </>
  );
}

export default TopNavbar;
