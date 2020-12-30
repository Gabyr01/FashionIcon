/**
 * This file contains a class that has informtaion about the Places API.
 */
import apikey from "./places.api.key"
/********************************
 * TODO: Implement this class based on https://developers.google.com/places/web-service/search
 * 
 * Gaby do you want to volunteer on this ? We can Mob Program again but you ll be the driver :)
 * 
 * Step 1: Import API key. 
 * Step 2: Go to the TextSearch Request Section and read take note of the required parameters.
 * Step 4: Read about the Query parameter. (Should we add a types parameter? probably yes)
 *        
 * Step 5: Go to the Documentation and grab the textsearch link under Place Search.
 *         https://maps.googleapis.com/maps/api/place/textsearch/output?parameters
 * We are now ready to write the code
 * 
 * Step 6: Create a private variable called key, and set its value to the imported API key from step 1.
 * Step 7: Create a private variable called endpoint, and set it equal to the link found in the doc
 *         on step 5.
 * 
 * Step 8: Implement getPlacesByZipCode(zipCode)
 */

 export class PlacesAPI{
//private variables
    #key = null
    #endpoint = null
    #proxyUrl = null
    #zipcodeLength = null
    #typeOfClothingStore = null
    constructor(){
         //Step 6 to 7
         this.#key = apikey
         this.#endpoint = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
         this.#proxyUrl = "https://cors-anywhere.herokuapp.com/"
         this.#zipcodeLength = 5 
         this.#typeOfClothingStore = "clothing_store"
     
    }

     // Gets clothing stores around a given zip code.
     // Note that this may include clothing stores outside of the zip code but still near by.
     /**
      * @param:zipcode
      * @returns:api link based on zipcode
      */
     getClothingStoresNear(zipcode){
        // 1. Create a try catch to verify if input is valid.
        try {
            // 2. Using the Private varibales and the Zipcode. Create a string literal (i.e) concatnate 
            //    everything to form a valid api Link such that :
            /***
             * A. query = zipcode
             * B. type = clothing store
             * C. key = apikey
             */
            if(typeof zipcode === "string" && zipcode.length === this.#zipcodeLength){
                return `${this.#endpoint}query=${zipcode}&type=${this.#typeOfClothingStore}&key=${this.#key}`
            }
            else{
                throw new Error()
            }
        } catch (error) {
            console.log(error)
        }
        return null
        // Boom, We are ready to test and debug if needed.
     }


     // Grabs the neccessary information from the results and leaves the rest.
    
     /*
        name:
        business_status: 
        formatted_address: 
        geometry: 
        icon:
        photos: 
        rating:
        opening_hours:
        types:
        place_id
     */
     getSanitizedResults(results){

         // Returns an array of clothing stores
     }

     // Removes clothing stores that are note in that zipcode but still came in the result. IF we have time we can work on this too
     filterResultsByZipCode(/* results, zipcode */){

     }
 }

 // The clothing store class 
export class ClothingStore{
    constructor(place_id, name, business_status, formatted_address, geometry, icon, photos, rating, types){

    }
}