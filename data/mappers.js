module.exports = { mapResultsToRecipe }



function mapResultsToRecipe({
    recipeResult,
    ingredientsResult,
    stepsResult
}) {
    const Obj = {}
    Obj.recipe_id = recipeResult.id
    Obj.recipe_name = recipeResult.name
    Obj.steps = []

    const transformedSteps = [];
    let step_number = 0
    stepsResult.forEach((step, index) => {
        // Check if the step with the given instruction_id already exists in the transformedSteps array
        let existingStep = transformedSteps.find(s => s.step_id === step.instruction_id);

        if (existingStep) {
            // If it exists, add the ingredient to the ingredients array
            let ingredient = ingredientsResult.find(ing => ing.id === step.ingredient_id);
            if (ingredient) {
                existingStep.ingredients.push(ingredient.name);
            }
        } else {
            // If it does not exist, create a new step object
            let ingredient = ingredientsResult.find(ing => ing.id === step.ingredient_id);
            if (ingredient) {
                transformedSteps.push({
                    step_id: step.instruction_id,
                    step_number: step_number += 1, // Assuming the step number is the order in which they appear
                    step_instructions: step.instruction_description,
                    ingredients: [ingredient.name]
                });
            }
        }
    });
    Obj.steps = transformedSteps
    return Obj

    // let newStep = {}
    // for( let i = 0; i < stepsResult.length; i++){
    //     const currentStep = stepsResult[i]
    //     if(newStep.id === currentStep.id){

    //     }
    //     newStep.step_id = currentStep.id
    //     newStep.step_number = i+1
    //     newStep.step_instructions = currentStep.instruction_description
    //     if(currentStep.ingredient_id !== undefined){
    //         const [ingredient] = ingredientsResult.filter(ingredient => {
    //            return ingredient.id === currentStep.ingredient_id
    //         })
    //         newStep.ingredients = [ingredient]
    //     }

    // }
}