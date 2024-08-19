import express from 'express'
import { add_venue, exploreVenue, fetchCities, fetchPlus, getMostSearchedVenues } from '../controller/venueController.js';
const venueRoute = express.Router()

venueRoute.post('/add-venue', add_venue)
venueRoute.get('/search-venue/:city/:plus', exploreVenue)
venueRoute.get('/get-all-cities', fetchCities)
venueRoute.get('/get-all-plusP/:city', fetchPlus)
venueRoute.get('/get-most-searched-venue', getMostSearchedVenues)

export default venueRoute;