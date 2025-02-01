import {Song} from "../model/song.model.js"
import {Album} from "../model/album.model.js"
import {User} from "../model/user.model.js"

export const getStats = async (req, res, next) => {
  
try {
  
  const totalSongs = await Song.countDocuments({});
  const totalAlbums = await Album.countDocuments({});
  const totalUsers = await User.countDocuments({});

  const uniqueArtist = await Song.aggregate([
    {
      $unionWith: {
        collection: "albums",
        pipeline: []
      }
    },
    {
      $group: {
        _id: "$artist"
      }
    },    
    {                      
      $count: "count" 
    }
  ])


  res.status(200).json({totalSongs, totalAlbums, totalUsers, totalArtists:uniqueArtist[0]?.$count || 0})

} catch (error) {
  console.log("error in statics route", error)
  next(error) 
}

}