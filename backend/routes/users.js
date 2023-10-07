import express from 'express';
import { 
    getAllUser,
    updateuser,
    deleteuser,
    getSingleuser,
} from '../controllers/userController.js';

const router = express.Router();

import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"


// Update user
router.put("/:id", verifyUser,updateuser);

// Delete user
router.delete("/:id", verifyUser,deleteuser);

// Get single use
router.get("/:id", verifyUser,getSingleuser);

// Get all user
router.get("/", verifyAdmin,getAllUser);

export default router;
