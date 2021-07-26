  
import React from "react"
import Signup from "./components/SignUp"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Home from "./components/Home"
import Svg from "./components/Mysvg"
import "./components/Intro.css"

function App() {
  return (
    
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/home" component={Home} />
              <div className="formbg">
                <Svg />
              
              <div
      className="d-flex align-items-center justify-content-center formcont"
      style={{ minHeight: "100vh" }}
    > 
      <div className="w-100" style={{ maxWidth: "400px"}}>
       
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              </div>
    </div> 
    </div>
            </Switch>
          </AuthProvider>
        </Router>
      
  )
}
export default App;