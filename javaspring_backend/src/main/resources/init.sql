DROP TABLE IF EXISTS Termek;
CREATE TABLE Termek(id serial PRIMARY KEY, ar INTEGER, nev VARCHAR(255));
DROP SEQUENCE IF EXISTS hibernate_sequence;
CREATE SEQUENCE hibernate_sequence START 1;

DROP TABLE IF EXISTS Tranzakcio;
CREATE TABLE Tranzakcio(id serial PRIMARY KEY, osszeg INTEGER, datum VARCHAR(255));
DROP SEQUENCE IF EXISTS hibernate_sequence1;
CREATE SEQUENCE hibernate_sequence1 START 1;