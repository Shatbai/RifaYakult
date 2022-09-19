/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('personas', (table) => {
        table.increments('id');
        table.string('ref',15);
        table.string('nombre', 255).notNullable();
        table.string('telefono',15).notNullable();
        table.string('email', 512).notNullable();
        table.string('boleto',15);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('personas');
  
};
