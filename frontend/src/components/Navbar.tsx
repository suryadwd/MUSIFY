import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react"
import { LayoutDashboardIcon } from "lucide-react"
import { Link } from "react-router-dom"
import SignInOAuthButtons from "./SignInOAuthButtons "

const Navbar = () => {


  const isAdmin = false

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
      <div className="flex gap-2 items-center">
        MUSIFY
      </div>
      <div className="flex items-center gap-4">

      {
        isAdmin && (
          <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-3"/>
            Admin Dashboard
          </Link>
        )
      }

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <SignInOAuthButtons />
      </SignedOut>

      </div>
    </div>
  )
}

export default Navbar

