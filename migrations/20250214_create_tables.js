export async function up(knex) {
  // Users table
  await knex.schema.createTable("Users", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email").unique();
    table.text("goals");
    table.string("outlook_token", 512);
    table.integer("total_time_saved").defaultTo(0);
  });

  // Activities table
  await knex.schema.createTable("Activities", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("Users")
      .onDelete("CASCADE");
    table.string("event_name");
    table.integer("mood_rating");
    table.integer("scheduled_duration");
    table.integer("actual_duration");
  });

  // Create TimeSaved table
  await knex.schema.createTable("TimeSaved", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("Users")
      .onDelete("CASCADE");
    table.string("intervention_type", 50);
    table.integer("text_length");
    table.integer("minutes_saved");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("TimeSaved");
  await knex.schema.dropTableIfExists("Activities");
  await knex.schema.dropTableIfExists("Users");
}
