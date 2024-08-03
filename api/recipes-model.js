const db = require('../data/db-config.js');




function getRecipeById() {
    /* Knex returns promises
     use Promise.all when making multiple queries
     eg.
     const recipeQuery = knex("recipes").where({ id: 1})
     const stepsQuery = knex("steps").where({ recipe_id: 1})
     const ....


     return Promise.all([recipeQuery, stepsQuery])
     .then( results => {
            const [ recipeResult, stepsResult, ... ] = results
            const recipeObj = recipeHelperMapResultsToRecipe(recipeResult, stepsResult, ...)
            return recipeObj
        })
     
    */

}




module.exports = {
    getRecipes
}