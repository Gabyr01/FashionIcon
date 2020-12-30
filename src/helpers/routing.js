/**
 * This file contains objects that define all the possible routes for the app,
 * and objects that keep track of what path a user is currently on.
 * Will discuss the use of this later.
 */

 // Route names and links
 export const routes = {
     home: {
         name: "Home",
         path: "/"
     },
     search: {
         name: "Search",
         path: "/search"
     },
     team: {
         name: "Team",
         path: "team"
     }
 }
 Object.freeze(routes)  // Prevents the routes object from being changed later on.

 // Represents all the possible path names
 export const pathnames = {
     SLASH = "/",
     HOME = "/home",
     SEARCH = "/search",
     TEAM = "/team"
 }
 Object.freeze(pathnames)  // Prevents the pathnames object from being changed later on.

 

