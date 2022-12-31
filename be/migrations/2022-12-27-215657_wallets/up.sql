-- Your SQL goes here
CREATE TABLE "wallets" (
  "id" int PRIMARY KEY,
  "user_id" int NOT NULL,
  "cash" int NOT NULL,
  "created_at" date NOT NULL,
  "deleted_at" date
);
