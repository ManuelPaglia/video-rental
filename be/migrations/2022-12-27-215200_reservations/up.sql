-- Your SQL goes here
CREATE TABLE "reservations" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "created_at" date,
  "expired_at" date,
  "price" smallint
);
