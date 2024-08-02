/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name')
                .unique()
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name')
                .notNullable();
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.string('description')
                .notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('description')
                .notNullable()
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('steps');
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients');
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments();
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('steps');

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
