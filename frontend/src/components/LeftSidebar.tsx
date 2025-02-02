import { SignedIn } from "@clerk/clerk-react";
import { HomeIcon, Library, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PlaylistSkeleton from "../Skeletons/PlaylistSkeleton";

const LeftSidebar = () => {

  const isLoading = !true

  return (
    <div className="h-full flex flex-col mt-5 gap-3">
      <div className="rounded-2xl bg-emerald-950 hover:bg-zinc-800  p-4">
        <div className="space-y-2 ml-12 mt-3">
          <Link className="flex items-center " to={"/"}>
            <HomeIcon className="mr-3 size-5" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </div>

        <SignedIn>
          <div className="space-y-2 ml-12 mt-6">
            <Link className="flex items-center " to={"/chat"}>
              <MessageCircle className="mr-3 size-5" />
              <span className="hidden md:inline">Message</span>
            </Link>
          </div>
        </SignedIn>
      </div>

      <div className="flex-1 rounded-lg bg-emerald-950 hover:bg-zinc-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-white px-12">
            <Library className="mr-3 size-6 font-bold" />
            <span className="hidden md:inline font-bold ">Playlists</span>
          </div>
        </div>

        <div className="card  shadow-lg no-scrollbar  max-h-120  overflow-y-scroll">
          
          {
            isLoading ? (<PlaylistSkeleton/>) : (
              <div className="card-body flex flex-col gap-7">
              <h2 className="card-title">Scrollable Area</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in dui eu sem laoreet scelerisque at nec odio. Nullam
                id ligula sit amet ligula malesuada interdum.
              </p>
              <p>More content...</p>
              <p>Even more content...</p>
              <p>Keep scrolling...</p>
              <p>Almost there...</p>
              <p>Almost there...</p>
              <p>Almost there...</p>
              <p>Almost there...</p>
              <p>Done!</p>
            </div>
            )
          }
          
        
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;


// 3 7