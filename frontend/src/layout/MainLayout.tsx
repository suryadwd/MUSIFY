import { Outlet } from "react-router-dom"
import LeftSidebar from "../components/LeftSidebar"

const MainLayout = () => {

 

  return (
    <div className="h-screen bg-black text-white flex">
      
      <div className="  w-[20%] h-[100%]"> <LeftSidebar /> </div>
      <div className="  border-2 w-[60%] h-[100%]"><Outlet /></div>
      <div className="  border-2 w-[20%] h-[100%]">kr</div>

    </div>
  )
}

export default MainLayout
