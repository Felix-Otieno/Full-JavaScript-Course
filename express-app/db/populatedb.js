#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content TEXT NOT NULL,
  username VARCHAR(255) NOT NULL
);

INSERT INTO messages (content, username) 
VALUES
  ('Hello world!', 'Alice'),
  ('Hi there!', 'Bob'),
  ('Greetings!', 'Charlie');
`;

async function main() {
  console.log("Seeding messages...");
  const client = new Client({
    connectionString: process.env.PG_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done seeding messages.");
}

main();
