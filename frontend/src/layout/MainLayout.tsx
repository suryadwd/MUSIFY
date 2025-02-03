import { Outlet } from "react-router-dom"
import LeftSidebar from "../components/LeftSidebar"
import Friends from "../components/Friends"

const MainLayout = () => {

 

  return (
    <div className="h-screen bg-black text-white flex">
      
      <div className="  w-[17%] h-[100%]"> <LeftSidebar /> </div>
      <div className="  w-[66%] h-[100%]"><Outlet /></div>
      <div className="  w-[17%] h-[100%]"><Friends/></div>

    </div>
  )
}

export default MainLayout
