-- Your SQL goes here
CREATE TABLE "wallets" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "cash" int,
  "created_at" date,
  "deleted_at" date
);
