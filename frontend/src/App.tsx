import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <>
      <header>
      <SignedOut>
        <SignInButton><button className="px-10 py-1 rounded-3xl m-5 bg-blue-600 text-white">Sign in</button></SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App

