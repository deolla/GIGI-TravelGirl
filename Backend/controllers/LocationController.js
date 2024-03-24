import Location from '../models/Location.js';


const getLocations = async (req, res, next) => {
    try {
        const location = await Location.find();
        res.status(200).json(location);
    } catch (err) {
        next(err);
    }
}

const getLocation = async (req, res, next) => {
    try {
        const location = await Location.findById(req.params.id);
        res.status(200).json(location);
    } catch (err) {
        next(err);
    }
}


const deleteLocation = async (req, res, next) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.status(204).json({"success": true});
    } catch (err) {
        next(err);
    }
}

export default {
    getLocations,
    getLocation,
    deleteLocation
}
