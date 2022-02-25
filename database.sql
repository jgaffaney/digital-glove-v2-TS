
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "clearance_level" int);


CREATE TABLE "runs" (
	"id" serial PRIMARY KEY NOT NULL,
	"start_timestamp" TIMESTAMP NOT NULL,
	"end_timestamp" TIMESTAMP,
	"user_id" int NOT NULL REFERENCES "user");
	
	
CREATE TYPE category as ENUM('airway', 'chest', 'access', 'medication');


CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" category NOT NULL,
	"procedure" varchar(255) NOT NULL,
	"detail" varchar(255) NOT NULL);


CREATE TABLE "runs_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" int NOT NULL REFERENCES "events",
	"runs_id" int NOT NULL REFERENCES "runs",
	"timestamp" TIMESTAMP NOT NULL,
	"comments" varchar(255));

CREATE TABLE currentRun (
	"id" SERIAL PRIMARY KEY,
	"currentRun" INT DEFAULT 0);

INSERT INTO events ("category", "procedure")
VALUES ('chest', 'Chest Compressions'),
('airway', 'ResQPod'),
('airway', 'OPA'),
('airway', 'NPA'),
('airway', 'BVM Ventilations'),
('airway', 'Oxygen'),
('medication', 'Normal Saline'),
('medication', 'Sodium Biocarb'),
('chest', 'SPEAR decompression'),
('medication', 'Calcium Chloride'),
('medication', 'Narcan'),
('medication', 'D50'),
('airway', 'Suction'),
('access', 'IV L AC'),
('access', 'IV R AC'),
('access', 'IV L Forearm'),
('access', 'IV R Forearm'),
('access', 'IO R Tibia'),
('access', 'IO L Tibia'),
('access', 'IO R Humerus'),
('access', 'IO L Humerous'),
('access', 'IO Other Location'),
('access', 'IV Other Location'),
('medication', 'Epinepherine'),
('chest', 'Defibrilation'),
('chest', 'Synchronized Cardioversion'),
('chest', 'Rythmn/Pulse Check'),
('chest', 'ResQPump'),
('medication', 'Amiodorone'),
('medication', 'Lidocaine'),
('medication', 'Magnesium'),
('airway', 'ET Intubation'),
('airway', 'I-Gel'),
('airway', 'Airway Verification'),
('chest', 'LUCAS compressions'),
('chest', 'Elegard'),







