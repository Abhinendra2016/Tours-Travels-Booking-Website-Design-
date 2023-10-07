import { ClientSession } from 'mongodb';
import Tour from '../models/Tour.js';

// create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: 'Tour successfully created',
            data: savedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create tour. Please try again.',
        });
    }
}

// update Tour
export const updateTour = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body 
        }, { new: true });

        res.status(200).json({
            success: true,
            message: 'Tour successfully updated',
            data: updatedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update tour.',
        });
    }
}

// delete Tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;

    try {
          await Tour.findByIdAndDelete(id) 
        res.status(200).json({
            success: true,
            message: 'successfully Deleted',
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"failed to delete",
        })
    }
}

// get single Tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;

    try {
        const tour = await Tour.findById(id).populate('reviews')
        res.status(200).json({
            success: true,
            message: 'successfully',
            data:tour
        });
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:"Not found",
        })
    }
}

// get all Tour
export const getAllTour = async (req, res) => {
    //for pagination 
    const page = parseInt(req.query.page, 10); 

    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8); 
        res.status(200).json({
            success: true,
            count:tours.length,
            message: 'Successfully retrieved tours',
            data: tours
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to retrieve tours",
            error: err.message
        });
    }
}

// get tour by search 
export const getTourBySearch = async(req,res)=>{


    // here 'i' means case sensitive 
    const city = new RegExp(req.query,'i')
    const distance =parseInt(req.query.distance)
    const maxGroupSize =parseInt(req.query.maxGroupSize)
    try{
        const tours = await Tour.find({city,distance:{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize}}).populate('reviews');

        res.status(200).json({
            success: true,
            message: 'Successfully',
            data: tours
        });
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:"Not found",
        })
    }
}


// get featured Tour
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8); 
        res.status(200).json({
            success: true,
            message: 'Successful',
            data: tours,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found", 
        });
    }
}
// get tour Counts
export const getTourCount = async (req, res) => {
    try {
        const toursCount = await Tour.estimatedDocumentCount(); 
        res.status(200).json({
            success: true,
            data: toursCount, 
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "failed to fetch", 
        });
    }
}
