import {User} from '../model/user.model.js';


export const callback = async (req, res) => {

  try {
    
    const {id, firstName, lastName, imageUrl} = req.body;

    const existingUser = await User.findOne({clerkId:id})

    // if(existingUser) res.status(200).json({success:false, message:'User already exists'});


    //sign up the user if it doesn't exist
    if(!existingUser) {
      await User.create({clerkId:id, firstName, lastName, imageUrl});
    }

    res.status(200).json({success:true, message:'User added successfully'});

  } catch (error) {
    console.log('Error in auth callback controller: ', error); 
    res.status(500).json({success:false, message:'Internal server error', error});
  }

}