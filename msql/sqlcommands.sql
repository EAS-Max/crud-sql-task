DROP TABLE IF EXISTS categories;
CREATE TABLE catetgories (
  id         INT AUTO_INCREMENT NOT NULL,
  name      VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`)
);




---------------------------------------------------------------------




DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id         INT AUTO_INCREMENT NOT NULL,
  name      VARCHAR(300) NOT NULL,
  categories_id VARCHAR(10) NOT NULL,
  price VARCHAR(10) NOT NULL,
  image_url VARCHAR(200)
  PRIMARY KEY (`id`)
);