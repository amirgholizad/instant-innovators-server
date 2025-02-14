export async function seed(knex) {
  await knex("TimeSaved").del();
  await knex("Activities").del();
  await knex("Users").del();

  await knex("Users").insert([
    {
      name: "Alice",
      email: "alice@example.com",
      goals: "Spend more time with family",
      outlook_token: "token-alice",
      total_time_saved: 0,
    },
    {
      name: "Bob",
      email: "bob@example.com",
      goals: "Focus on work-life balance",
      outlook_token: "token-bob",
      total_time_saved: 0,
    },
  ]);

  await knex("Activities").insert([
    {
      user_id: 1,
      event_name: "Team Meeting",
      mood_rating: 4,
      scheduled_duration: 60,
      actual_duration: 55,
    },
    {
      user_id: 2,
      event_name: "Code Review",
      mood_rating: 5,
      scheduled_duration: 30,
      actual_duration: 25,
    },
  ]);

  await knex("TimeSaved").insert([
    {
      user_id: 1,
      intervention_type: "email",
      text_length: 100,
      minutes_saved: 3,
    },
    {
      user_id: 2,
      intervention_type: "automation",
      text_length: 0,
      minutes_saved: 5,
    },
  ]);
}
