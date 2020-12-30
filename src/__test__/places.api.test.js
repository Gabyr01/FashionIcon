import {PlacesAPI } from '../helpers/places.api'
import apiKey from '../helpers/places.api.key'
import sample_results from './sample_data/places.json'

/**
 * This Files Tests the PlacesAPI class
 */

describe('PlacesAPI', () => {
    it("getClothingStoresByZipCode() returns valid link given zipcode:92115", () => {
        const api = new PlacesAPI();  // Creates the API Object.
        const expected_link = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=92115&type=clothing_store&key=${apiKey}`;  // Expected Results.
        const actual_link = api.getClothingStoresNear("92115");  // Actual results.
        expect(actual_link).toBe(expected_link);
    })
});
