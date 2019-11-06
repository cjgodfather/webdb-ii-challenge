exports.up = function(knex) {
  return knex.schema.createTable("car-dealer", function(table) {
    table.increments();
    table.string("name", 128).notNullable();
    table.string("manufacturer", 128).notNullable();
    table.string("model", 128).notNullable();
    table.string("dealder", 255).notNullable();
    table.string("color", 64);
    table.integer("year");
    table.boolean("used");
    table.timestamps(true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
