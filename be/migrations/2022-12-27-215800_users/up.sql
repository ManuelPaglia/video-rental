-- Your SQL goes here
CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "name" varchar(30),
  "email" varchar(50),
  "password" varchar(50),
  "created_at" date,
  "deleted_at" date
);

ALTER TABLE "reservations" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "wallets" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
