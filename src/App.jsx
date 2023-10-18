import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, ClassroomsProvider } from "./context";
import { AuthLayout, DashboardLayout } from "./layouts";
import { Home } from './pages/home/Home';
import { Login, Register, ForgotPassword, NewPassword, ConfirmAccount } from "./pages/auth";
import { NewClassroom, Dashboard, Summary, Chat, Activities, Board, Images, ClassroomSettings } from './pages/app';


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
                <Route index                element={ <Dashboard />         } />
                <Route path="settings/:id"  element={ <ClassroomSettings /> } />
                <Route path="home/:id"      element={ <Summary />           } />
                {/* <Route path="tasks/:id"     element={ <Activities/>         } /> */}
                <Route path="chat/:id"      element={ <Chat />              } />
                <Route path="notes/:id"     element={ <Images />            } />
                <Route path="board/:id"     element={ <Board />             } />
                <Route path="new_classroom" element={ <NewClassroom />      } />
            </Route>

          </Routes>
        </ClassroomsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;