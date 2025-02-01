
export const createSong = async (req, res) => {

  try {
    if(!req.files || !req.files.audioFile || !req.files.imageFile)
      return res.status(400).json({message: "Please upload all files"})

    

  } catch (error) {
    console.log(error)
  }

}