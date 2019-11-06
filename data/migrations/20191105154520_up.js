exports.up = function(knex) {
  return knex.schema.table("car-dealer", tbl => {
    tbl.renameColumn("dealder", "dealer");
  });
};

exports.down = function(knex) {};
