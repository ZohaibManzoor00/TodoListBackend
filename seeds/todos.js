/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("todos").del();
  await knex("todos").insert([
    { description: "coding" },
    { description: "running" },
    { description: "dishes" },
    { description: "clothes" },
    { description: "dinner" },
  ]);
};
