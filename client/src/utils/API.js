import axios from "axios";

export default {

    //Gets all recipes
    getAllCharacter: function () {
        return axios.get("/api/character/");
    },
    // Gets Recipe based on MongoDB ID passed via the function
    getRecipe: function (id) {
        return axios.get("/api/recipes/" + id);
    },
    // Deletes Recipe based on MongoDB ID passed via the function
    deleteRecipe: function (id) {
        return axios.delete("/api/recipes/" + id);
    },
    // Creates Recipe based on the Recipe JSON passed to it
    // look at the models folder and Recipe.js for the format
    saveCharacter: function (characterJSON) {
        return axios.post("/api/character/", characterJSON);
    },
    // Updates recipe based on the MongoDB passed to it 
 

    updateInit: function(id, update) {
        return axios.put("/api/character/" + id, update);
    },
    //use this for updating multiple records (on the battle page)
    //https://stackoverflow.com/questions/38742475/what-is-the-right-approach-to-update-many-records-in-mongodb-using-mongoose
  //  updateInitMulti: function()

    // USERS API CALLS

    //Gets all the users data in an array 
    getAllUsers: function () {
        return axios.get("/api/users/");
    },
    // Gets the user  with the given mongo db id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the user  with the given mongo db id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Creates a user based on the userJSON passed to it
    // look at the models folder and User.js for the format expected
    saveUser: function (userJSON) {
        return axios.post("/api/users/", userJSON);
    },
    //Updates user based on the MongoDB passed to it 
    updateUser: function (id, update) {
        return axios.put("/api/users/" + id, update);
    },
};