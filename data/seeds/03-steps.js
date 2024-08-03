/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('steps').truncate()
  await knex('steps').insert([
    { recipe_id: 1, description: 'Prepare bread' },
    { recipe_id: 1, description: 'Add meat' },
    { recipe_id: 1, description: 'Add cheese' },
    { recipe_id: 1, description: 'Add lettuce' },
    { recipe_id: 1, description: 'Add tomato' },
    { recipe_id: 2, description: 'Cook hotdog' },
    { recipe_id: 2, description: 'Cook chili' },
    { recipe_id: 2, description: 'Prepare hotdog bun' },
    { recipe_id: 2, description: 'Add cooked hotdog' },
    { recipe_id: 2, description: 'Add onion' },
    { recipe_id: 2, description: 'Add cooked chili' },
    { recipe_id: 2, description: 'add cheese' },
    { recipe_id: 3, description: 'Cook hamburger patty' },
    { recipe_id: 3, description: 'Prepare hamburger bun' },
    { recipe_id: 3, description: 'Add lettuce' },
    { recipe_id: 3, description: 'Add tomato' },
    { recipe_id: 3, description: 'Add onion' },
    { recipe_id: 3, description: 'Add cheese' },
    { recipe_id: 3, description: 'Add cooked hamburger patty' },

  ]);
};
