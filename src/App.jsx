import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import { Login, Register, ForgotPassword, NewPassword, ConfirmAccount, Home } from "./pages/";

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route index element={ <Home /> } />
              <Route path="/" element={ <AuthLayout /> }>
                  <Route path="login"                  element={ <Login />          } />
                  <Route path="register"               element={ <Register />       } />
                  <Route path="forgot_password"        element={ <ForgotPassword /> } />
                  <Route path="forgot_password/:token" element={ <NewPassword />    } />
                  <Route path="confirm_account/:token" element={ <ConfirmAccount /> } />
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App;