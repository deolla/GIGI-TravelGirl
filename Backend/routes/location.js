import express from 'express';
import LocationController from '../controllers/LocationController.js';


const router = express.Router();

router.get('/', LocationController.getLocations);
router.get('/:id', LocationController.getLocation);
router.delete('/:id', LocationController.deleteLocation);

export default router;
