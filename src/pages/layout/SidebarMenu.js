import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/redux-action";
import "./sidebar.css";
import Collapse from "@mui/material/Collapse";

function SidebarManu() {
  const [mailCollapse, setMailCollapse] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const sideWidth = useSelector((state) => state.sidebarWidth);
  // const loginUser = JSON.parse(localStorage.getItem("loginUser"));

  const handleLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm("Are you sure, Do you want to Logout?");
    if (result === true) {
      localStorage.removeItem("authTokenADminLTE");
      dispatch(logoutUser());
    }
  };

  const handleMouseHover = () => {
    if (sideWidth.width === "60px") {
      const mainMenu = document.getElementById("main-menu");
      mainMenu.style.width = "250px";
      let sideNav = document.getElementsByClassName("title");
      for (let i = 0; i < sideNav.length; i++)
        sideNav[i].style.display = "block";
    }
  };

  const handleMouseOut = () => {
    if (sideWidth.width === "60px") {
      const mainMenu = document.getElementById("main-menu");
      mainMenu.style.width = "60px";
      let sideNav = document.getElementsByClassName("title");
      for (let i = 0; i < sideNav.length; i++)
        sideNav[i].style.display = "none";
    }
  };

  useEffect(() => {
    const mainMenu = document.getElementById("main-menu");
    mainMenu.style.width = sideWidth.width;
    let sideNav = document.getElementsByClassName("title");
    for (let i = 0; i < sideNav.length; i++)
      sideNav[i].style.display = sideWidth.title;
  }, [sideWidth]);

  return (
    <>
      <nav
        id="main-menu"
        className="main-menu"
        ref={inputRef}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
      >
        <ul>
          <li style={{ borderBottom: "1px solid #fff", height: "53px" }}>
            <Link to="/">
              <div className="MenuIcon" style={{ paddingTop: "5px" }}>
                <img
                  src="./images/AdminLTELogo.png"
                  alt="Logo"
                  className="border rounded-circle shadow"
                  style={{
                    opacity: ".8",
                    width: "2em",
                    boxShadow: "2px 2px 2px #000",
                  }}
                />
              </div>
              <span className="nav-text">AdminLTE 3</span>
            </Link>
          </li>
          <li
            style={{
              borderBottom: "1px solid #fff",
              height: "53px",
              display: "flex",
            }}
          >
            <Link to="/">
              <div className="MenuIcon" style={{ paddingLeft: "0.8rem" }}>
                <Image
                  src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                  className="direct-chat-img border rounded-circle shadow"
                ></Image>
              </div>
              <span className="nav-text">Alexander Pierce</span>
              {/* <span className="nav-text">{loginUser.name.toUpperCase()}</span> */}
            </Link>
          </li>
          <li id="instructionEl" className="title">
            <form className="d-flex pt-3 pe-4 p-1">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/widgets">
              <div className="MenuIcon">
                <i className="fas fa-th"></i>
              </div>
              <span className="nav-text">Wedgets</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-copy"></i>
              </div>
              <span className="nav-text">layout Options</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <span className="nav-text">Charts</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-tree"></i>
              </div>
              <span className="nav-text">UI Elements</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-edit"></i>
              </div>
              <span className="nav-text">Forms</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-table"></i>
              </div>
              <span className="nav-text">Table</span>
            </Link>
          </li>
          <p className="title nav-header">EXAMPLES</p>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="far fa-calendar-alt"></i>
              </div>
              <span className="nav-text">Calender</span>
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <div className="MenuIcon">
                <i className="far fa-image"></i>
              </div>
              <span className="nav-text">Gallery</span>
            </Link>
          </li>
          <li>
            <Link to="/kanbanBoard">
              <div className="MenuIcon">
                <i className="fas fa-columns"></i>
              </div>
              <span className="nav-text">Kanban Board</span>
            </Link>
          </li>
          <li onClick={() => setMailCollapse(!mailCollapse)}>
            <Link to="/mailbox">
              <div className="MenuIcon">
                <i className="far fa-envelope"></i>
              </div>
              <span className="nav-text">
                Mailbox
                <i
                  className="fas fa-angle-left right text-white"
                  style={{
                    transition: "all 2s linear",
                    transform: `${
                      mailCollapse ? "rotate(-90deg)" : "rotate(0deg)"
                    }`,
                    marginLeft: "4vw",
                  }}
                ></i>
              </span>
            </Link>
          </li>
          <Collapse in={mailCollapse}>
            <li>
              <Link to="/mailbox/inbox">
                <div className="MenuIcon">
                  <i className="far fa-circle text-light"></i>
                </div>
                <span className="nav-text">Inbox</span>
              </Link>
            </li>
            <li>
              <Link to="/mailbox/compose">
                <div className="MenuIcon">
                  <i className="far fa-circle text-light"></i>
                </div>
                <span className="nav-text">Compose</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="MenuIcon">
                  <i className="far fa-circle text-light"></i>
                </div>
                <span className="nav-text">Read</span>
              </Link>
            </li>
          </Collapse>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-book"></i>
              </div>
              <span className="nav-text">Pages</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="far fa-plus-square"></i>
              </div>
              <span className="nav-text">Extras</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-search"></i>
              </div>
              <span className="nav-text">Search</span>
            </Link>
          </li>
          <p className="title nav-header">MISCELLANEOUS</p>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <span className="nav-text">Tabbed IFrame Plugin</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-file"></i>
              </div>
              <span className="nav-text">Documentation</span>
            </Link>
          </li>
          <p className="title nav-header">MULTI LEVEL EXAMPLE</p>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-circle"></i>
              </div>
              <span className="nav-text">Level 1</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-circle"></i>
              </div>
              <span className="nav-text">Level 1</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fas fa-circle"></i>
              </div>
              <span className="nav-text">Level 1</span>
            </Link>
          </li>
          <p className="title nav-header">LABELS</p>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="far fa-circle text-danger"></i>
              </div>
              <span className="nav-text">Important</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="far fa-circle text-warning"></i>
              </div>
              <span className="nav-text">Warning</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="MenuIcon">
                <i className="far fa-circle text-info"></i>
              </div>
              <span className="nav-text">Informational</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link to="/">
              <div className="MenuIcon">
                <i className="fa fa-power-off fa-2x"></i>
              </div>
              <span className="nav-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SidebarManu;
