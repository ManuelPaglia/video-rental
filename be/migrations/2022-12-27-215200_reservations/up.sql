-- Your SQL goes here
CREATE TABLE "reservations" (
  "id" int PRIMARY KEY,
  "user_id" int NOT NULL,
  "created_at" date NOT NULL,
  "expired_at" date NOT NULL,
  "price" smallint
);
