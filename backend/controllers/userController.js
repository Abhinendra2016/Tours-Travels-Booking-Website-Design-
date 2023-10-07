import user from '../routes/users.js';

// create new user
export const createuser = async (req, res) => {
    const newUser = new user(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: 'User successfully created',
            data: savedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create user. Please try again.',
        });
    }
}

// update user
export const updateuser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await user.findByIdAndUpdate(id, {
            $set: req.body 
        }, { new: true });

        res.status(200).json({
            success: true,
            message: 'User successfully updated',
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update user.',
        });
    }
}

// delete user
export const deleteuser = async (req, res) => {
    const id = req.params.id;

    try {
          await user.findByIdAndDelete(id) 
        res.status(200).json({
            success: true,
            message: 'Successfully Deleted',
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to delete",
        })
    }
}

// get single user
export const getSingleuser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await user.findById(id) 
        res.status(200).json({
            success: true,
            message: 'Successfully',
            data: user
        });
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:"Not found",
        })
    }
}

// get all users
export const getAllUser = async (req, res) => {
    try {
        const users = await user.find({})
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved users',
            data: users
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "Failed to retrieve users",
            error: err.message
        });
    }
}
