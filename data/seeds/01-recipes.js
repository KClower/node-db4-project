/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    { name: 'Sandwich' },
    { name: 'Chili cheese hotdog' },
    { name: 'Cheese Burger' }
  ]);
};
