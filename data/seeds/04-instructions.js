/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('instructions').truncate()
  await knex('instructions').insert([
    { step_id: 1, description: 'Get 2 pieces of bread and add the desired amount of your favorite condiment to bread.' },
    { step_id: 2, description: 'Choose your favorite sandwich meat and add the desired amount to one slice of bread.' },
    { step_id: 3, description: 'Add cheese of choice on top of the sandwich meat.' },
    { step_id: 4, description: 'Take a head of lettuce, peel away the desired amout of leaves and add on top of the cheese.' },
    { step_id: 5, description: 'Cut a tomato into slices and add 2 slices on top of the lettuce.' },
    { step_id: 6, description: 'Grill all beef hotdog on medium heat for 5-7 minutes, turning occasionally to ensure even cooking.' },
    { step_id: 7, description: 'Heat a can of chili in a pot over medium heat on the stove for 5-10 minutes, stirring occasionally. ' },
    { step_id: 8, description: 'Take a hotdog bun and add the desired amount of your favorite condiment to bun.' },
    { step_id: 9, description: 'Place the grilled hotdog inside the hotdog bun.' },
    { step_id: 10, description: 'Chop onion and add the desired amount to the hotdog. (Optional)' },
    { step_id: 11, description: 'With a spoon, add the desired amount of chili to the hotdog.' },
    { step_id: 12, description: 'Add cheese on top.' },
    { step_id: 13, description: 'Place the hamburger patty on the grill. Cook for about 4-5 minutes per side for medium-rare, 5-6 minutes per side for medium, or longer for well-done.' },
    { step_id: 14, description: 'Take a hamburger bun and add desired amount of your favorite condiment to bun.' },
    { step_id: 15, description: 'PLace cooked hamburger patty on bottom bun.' },
    { step_id: 16, description: 'Place the cheese on the hamburger patty.' },
    { step_id: 17, description: 'Take a head of lettuce, peel away the desired amout of leaves and add on top of cheese.' },
    { step_id: 18, description: 'Cut a tomato into slices and add 2 slices on top of the lettuce.' },
    { step_id: 19, description: 'Slice onion into rings and place desired amount on top of tomatos.' },

  ]);
};
