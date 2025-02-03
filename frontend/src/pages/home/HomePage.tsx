import { useEffect } from "react"
import Navbar from "../../components/Navbar"
import { useMusicStore } from "../../stores/useMusicStore"
import FeatureSect from "../../components/FeatureSect"
import MidSec from "../../components/MidSec"


const HomePage = () => {

  const {fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs, isLoading, featureSongs, madeForYouSongs, trendingSongs} = useMusicStore()

  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  },[fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]) 

  
  

  return (
    
    <div className="rounded-md overflow-hidden">
      <Navbar />

      <div className="card  shadow-lg no-scrollbar  max-h-120  overflow-y-scroll">
         <div className="p-4 sm:p-6">
          <h1 className="text-2xl font-bold mb-6 sm:text-3xl">Good afternoon</h1>
      <FeatureSect />
         </div>

        <div className="space-y-8">
          <MidSec />
        </div>

        </div>

    </div>

  )
}

export default HomePage
