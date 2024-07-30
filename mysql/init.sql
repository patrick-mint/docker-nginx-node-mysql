CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO users (name, email) VALUES ('Pakornpat Amornlertpanit', 'pakornpat.a@gmail.com');
