CREATE TABLE IF NOT EXISTS "character_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"character_id" text NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL
);
