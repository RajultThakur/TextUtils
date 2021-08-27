import './App.css';
import React from 'react'
import TextArea from "./component/TextArea"
import Navbar from './component/navbar';
import Alert from "./component/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom"
// import About from "./component/About";
// import ContactUs from "./component/ContactUs";
function App () {
  const name = {
    nav: "TextUtils",
    h: "Home",
    a: "About",
    c: "Contact"
  }
  let st = ({
    backgroundColor: "white",
    state: false,
  })
  const [checked, setchecked] = React.useState("off");
  const [alert, setAlert] = React.useState(null);

  let showAlerts = (mess, type) => {
    setAlert({
      message: mess,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  function change () {
    if (checked === "off") {
      setchecked("on");
      st = ({
        backgroundColor: "black",
        state: true,
      })
      setStyle(st);
      document.body.style.backgroundColor = "black";
      showAlerts("Dark Mode has been enabled", "success")
    }
    else {
      setchecked("off")
      st = ({
        backgroundColor: "white",
        state: false,
      })
      setStyle(st);
      document.body.style.backgroundColor = "white";
      showAlerts("Light Mode has been enabled", "success")
    }
  }

  const [style, setStyle] = React.useState(st)

  const [names, setName] = React.useState(name);
  return (
    <>
      {/* <Router> */}
        <Navbar obj={names} />
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={change} />
        </div>
        <Alert alerts={alert} />

        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <TextArea alerts={showAlerts} state={style.state} />
          {/* </Route> */}
          {/* <Route exact path="/about">
            <About state={style.state}/>
          </Route>
          <Route exact path="/contact">
            <ContactUs state={style.state}/>
          </Route>
        </Switch> */}
      {/* </Router> */}
    </>
  )

}

export default App;
