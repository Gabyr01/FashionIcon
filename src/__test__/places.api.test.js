import {PlacesAPI, ClothingStore } from '../helpers/places.api'
import apiKey from '../helpers/places.api.key'
import expected_clothing_store from './sample_data/place.json'
import raw_results from './sample_data/places.json'

/**
 * This Files Tests the PlacesAPI class
 */
//declaring expected variables
const place_id = "ChIJVzq5qqVW2YARvJkTmjfzD-U" //string
const name =  "Cali Wear SD"//string
const business_status = "OPERATIONAL"//string
const formatted_address = "5871 University Ave Suite 331, San Diego, CA 92115, United States" //string
const geometry = {
    location:{
        lat: 32.7487793,
        lng: -117.07042
    },
    viewport:{
        northeast: {
            lat: 32.75012912989272,
            lng: -117.0690701701073
        },
        southwest: {
            lat: 32.74742947010728,
            lng: -117.0717698298927
        }
    }
}
const icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png"
const photos = [
    {
        height:3024,
        html_attributions: [
            "\u003ca href=\"https://maps.google.com/maps/contrib/113742680564847114038\"\u003eA Google User\u003c/a\u003e"
        ],
        photo_reference: "ATtYBwLRbPTa2YcD6QA7Ys50XXhR-v15JutKmA2FPBNlXM8LKgfbpeTQQIqaFLu85cgYOB5g0sxcmKLn0r8MVt0j177C_am4DZ-NLHM28IhtIlEhDO5L9jXF7kqTLSFjzJGzX20zSipUOS6K3obo4jPXsNOJtJGNaPzbPS475yhdkJGR1sFj",
        width: 4032
    }
]
const rating = 4.7
const types = ["point_of_interest", "clothing_store", "store", "establishment"]
const opening_hours = {
    open_now: true
}  
//creating expected clothing store object
const actual_clothing_store = new ClothingStore(place_id, name, business_status, formatted_address, geometry, icon, photos, rating, types, opening_hours)

function compare(actual_clothing_store, expected_clothing_store)
{
    return (actual_clothing_store.place_id === expected_clothing_store.place_id &&
    actual_clothing_store.name === expected_clothing_store.name &&
    actual_clothing_store.business_status === expected_clothing_store.business_status &&
    actual_clothing_store.formatted_address === expected_clothing_store.formatted_address &&
    actual_clothing_store.geometry.location.lat === expected_clothing_store.geometry.location.lat &&
    actual_clothing_store.geometry.location.lng === expected_clothing_store.geometry.location.lng &&
    actual_clothing_store.icon === expected_clothing_store.icon &&
    actual_clothing_store.photos.length === expected_clothing_store.photos.length &&
    actual_clothing_store.rating === expected_clothing_store.rating &&
    actual_clothing_store.types.length === expected_clothing_store.types.length &&
    actual_clothing_store.opening_hours.open_now === expected_clothing_store.opening_hours.open_now)
    
}

//testing the PlacesAPI class
describe('PlacesAPI', () => {
    it("getClothingStoresByZipCode() returns valid link given zipcode:92115", () => {
        const api = new PlacesAPI();  // Creates the API Object.
        const expected_link = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=92115&type=clothing_store&key=${apiKey}`;  // Expected Results.
        const actual_link = api.getClothingStoresNear("92115");  // Actual results.
        expect(actual_link).toBe(expected_link);
    })

    it("getSanitizedResults() returns correct results given zipcode:92115", () =>{
        const size = 20
        const api = new PlacesAPI()
        const actual_sanitized_results =  api.getSanitizedResults(raw_results.results)
        const asExpected = (
            actual_sanitized_results.length === size && //comparing sizes
            compare(actual_sanitized_results[0], actual_clothing_store)//comparing 1st element of results with actual clothing store
        )
        expect(asExpected).toBe(true)
    })
});


//testing the CLothingStore class
describe('ClothingStore',() =>{
    it("the clothing store constructor working as planned", ()=>{
        
        const asExpected = compare(actual_clothing_store, expected_clothing_store)
        expect(asExpected).toBe(true)
    })
});
