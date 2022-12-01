import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Widgets from "./pages/Widgets";
import TopNavbar from "./pages/layout/TopNavbar";
import SidebarMenu from "./pages/layout/SidebarMenu";
import { useSelector } from "react-redux";
import { createContext, useState } from "react";
import Gallery from "./pages/Gallery";
import KanbanBoard from "./pages/layout/KanbanBoard";
import Inbox from "./pages/Inbox";
import Mailbox from "./pages/Mailbox";
import Compose from "./pages/Compose";
export const GlobalInfo = createContext();

function App() {
  const topBarMargin = useSelector((state) => state.sidebarWidth);
  const [maximize, setMaximize] = useState(false);

  const fullSreen = (elem) => {
    if (elem.requestFullscreen && maximize) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
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
    var elem = document.getElementById("allScreen");
    setMaximize(!maximize);
    if (document.fullscreenElement === null) {
      fullSreen(elem);
    } else {
      closeFullScreen();
    }
  };

  return (
    <>
      <Router>
        <div
          id="allScreen"
          className="d-flex flex-row"
          style={{ marginTop: "-20px", backgroundColor: "#eee" }}
        >
          <SidebarMenu />
          <div
            className="p-0 w-100"
            style={{
              marginLeft: topBarMargin.width,
              transition: "all .2s linear",
            }}
          >
            <TopNavbar handleMaximize={handleMaximize} maximize={maximize} />
            <div>
              <Routes>
                <Route exact path="/" element={<Dashboard />}></Route>
                <Route exact path="/widgets" element={<Widgets />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/gallery" element={<Gallery />}></Route>
                <Route
                  exact
                  path="/kanbanBoard"
                  element={<KanbanBoard />}
                ></Route>
                <Route exact path="/mailbox" element={<Mailbox />}></Route>
                <Route exact path="/mailbox/inbox" element={<Inbox />}></Route>
                <Route
                  exact
                  path="/mailbox/compose"
                  element={<Compose />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
