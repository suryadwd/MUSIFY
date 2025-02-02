import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthCallPage from "./pages/auth/authCallPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/home/ChatPage"

const App = () => {

  return (
    <>
   
      <Routes>

      <Route element={<MainLayout/>}>
      <Route path="/" element={<HomePage/>} />
      <Route path="/chat" element={<ChatPage/>} />
      </Route>

      <Route path="/" element={<HomePage/>} />
      <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />} />
      <Route path="/auth-callback" element={<AuthCallPage/>} />
      </Routes>

    </>
  )
}

export default App

