import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import { AuthLayout, DashboardLayout } from "./layouts";
import { Login, Register, ForgotPassword, NewPassword, ConfirmAccount, Home, Boards } from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={ <Home /> } />
          
          <Route path="/" element={ <AuthLayout /> }>
              <Route path="login"                  element={ <Login />          } />
              <Route path="register"               element={ <Register />       } />
              <Route path="forgot_password"        element={ <ForgotPassword /> } />
              <Route path="forgot_password/:token" element={ <NewPassword />    } />
              <Route path="confirm_account/:token" element={ <ConfirmAccount /> } />
          </Route>

          <Route path="/dashboard" element={ <DashboardLayout /> }>
              <Route index element={ <Boards /> } />
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;