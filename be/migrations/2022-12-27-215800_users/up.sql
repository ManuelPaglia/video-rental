-- Your SQL goes here
CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "email" varchar(50) NOT NULL,
  "password" varchar(50) NOT NULL,
  "created_at" date NOT NULL,
  "deleted_at" date
);

ALTER TABLE "reservations" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "wallets" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
