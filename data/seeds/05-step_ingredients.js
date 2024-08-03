/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').truncate()
  await knex('step_ingredients').insert([
    { step_id: 1, ingredient_id: 1 },
    { step_id: 1, ingredient_id: 4 },
    { step_id: 2, ingredient_id: 2 },
    { step_id: 3, ingredient_id: 3 },
    { step_id: 4, ingredient_id: 5 },
    { step_id: 5, ingredient_id: 6 },
    { step_id: 6, ingredient_id: 11 },
    { step_id: 7, ingredient_id: 12 },
    { step_id: 8, ingredient_id: 8 },
    { step_id: 9, ingredient_id: 11 },
    { step_id: 10, ingredient_id: 7 },
    { step_id: 11, ingredient_id: 12 },
    { step_id: 12, ingredient_id: 3 },
    { step_id: 13, ingredient_id: 9 },
    { step_id: 14, ingredient_id: 8 },
    { step_id: 15, ingredient_id: 5 },
    { step_id: 16, ingredient_id: 6 },
    { step_id: 17, ingredient_id: 7 },
    { step_id: 18, ingredient_id: 3 },

  ]);
};
