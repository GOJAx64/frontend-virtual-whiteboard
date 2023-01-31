import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider, ClassroomsProvider } from "./context";
import { AuthLayout, DashboardLayout } from "./layouts";

import { Home } from './pages/home/Home';
import { Login, Register, ForgotPassword, NewPassword, ConfirmAccount } from "./pages/auth";
import { Boards, Gestures, Symbols, Profile, NewClassroom } from './pages/app';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ClassroomsProvider>
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
                <Route index                element={ <Boards  />      } />
                <Route path="gestures"      element={ <Gestures/>      } />
                <Route path="symbols"       element={ <Symbols />      } />
                <Route path="profile"       element={ <Profile />      } />
                <Route path="new_classroom" element={ <NewClassroom /> } />
            </Route>

          </Routes>
        </ClassroomsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;