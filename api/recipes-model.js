
const db = require('../data/db-config.js');
const { mapResultsToRecipe } = require('../data/mappers.js');


function getRecipeById(recipe_id) {

    const recipeQuery = db('recipes')
        .where({ id: recipe_id })
        .first();
    const ingredientsQuery = db('ingredients')
        .join("recipe_ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
        .join("recipes", "recipes.id", "recipe_ingredients.recipe_id")
        .where({ "recipes.id": recipe_id })
        .select("ingredients.id", "ingredients.name", "recipes.id as recipe_id");
    const stepsQuery = db('steps')
        .join("recipes", "recipes.id", "steps.recipe_id")
        .join("step_ingredients", "step_ingredients.step_id", "steps.id")
        .join("ingredients", "step_ingredients.ingredient_id", "ingredients.id")
        .join("instructions", "instructions.id", "steps.id")
        .where({ recipe_id: recipe_id })
        .orderBy('steps.id')
        .select("steps.id",
            "steps.description",
            "ingredients.id as ingredient_id",
            "instructions.id as instruction_id",
            "instructions.description as instruction_description");
    return Promise.all([recipeQuery, ingredientsQuery, stepsQuery])
        .then(results => {
            const [recipeResult, ingredientsResult, stepsResult] = results;
            if (!recipeResult) {
                return null;
            }
            const recipeObj = mapResultsToRecipe({ recipeResult, ingredientsResult, stepsResult });
            return recipeObj;
        })

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
    getRecipeById
}