/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    { name: 'Bread' },
    { name: 'Sandwich Meat' },
    { name: 'Cheese' },
    { name: 'Condiment' },
    { name: 'Lettuce' },
    { name: 'Tomato' },
    { name: 'Onion' },
    { name: 'Hamburger Bun' },
    { name: 'Hamburger Patty' },
    { name: 'Hotdog Bun' },
    { name: 'All Beef Hotdog' },
    { name: 'Chili' }
  ]);
};
