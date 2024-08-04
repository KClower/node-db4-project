const express = require('express');
const Recipes = require('../api/recipes-model.js');

const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Recipes.getRecipeById(id)
        .then(result => res.status(200).json(result))

})

// .then(recipe => {
//     res.status(200).json(recipe)
// })

//.then(result => res.status(200).json(result))



module.exports = router;