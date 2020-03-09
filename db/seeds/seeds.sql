-- Users table seeds here (Example)

--            USERS                 --
INSERT INTO users
  (name,email,password)
VALUES
  ('asma' , 'asma@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('rahul' , 'rahul@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('lucas' , 'lucas@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('raho' , 'raho@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('suhur' , 'suhur@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('anisa' , 'anisa@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('najib' , 'najib@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('noah' , 'noah@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('david' , 'david@example.com', 'password');
INSERT INTO users
  (name,email,password)
VALUES
  ('luba' , 'luba@example.com', 'password');

--            MAPS                  --
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (1, 'AsmaFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/106/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (2, 'RahulFoodMap', 'a list of all my fav food spots', 'https://i.picsum.photos/id/0/5616/3744.jpg', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (3, 'LucasFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (4, 'RahoFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1010/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (5, 'SuhurFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1033/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (6, 'AnisaFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1051/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (7, 'NajibFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/117/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (8, 'NoahFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/119/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (9, 'DavidFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/134/367/267', true);
INSERT INTO maps
  (user_id, title, description, image_url, active)
VALUES
  (10, 'LubaFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/142/367/267', true);

--            USER_MAPS             --
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (1, 1);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (2, 2);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (3, 3);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (4, 4);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (5, 5);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (6, 6);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (7, 7);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (8, 8);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (9, 9);
INSERT INTO user_maps
  (user_id, map_id)
VALUES
  (10, 10);


--            POINTERS              --
--         MAP 1(belongs to user 1): Pointers        --1_address
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (1, 1, ' asma_foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6529, -79.3849 );
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (1, 1, 'asma_foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (1, 1, 'asma_foodspot#3', 'my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 43.6451661, -79.403174);

--        MAP 2(belongs to user 2): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (2, 2, 'rahul: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (2, 2, 'rahul: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (2, 2, 'rahul: foodspot#3', 'my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 43.6451661, -79.403174);

--        MAP 3(belongs to user 3): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (3, 3, 'lucas: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (3, 3, 'lucas: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (3, 3, 'lucas: foodspot#3', 'my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 43.6451661, -79.403174);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (3, 3, 'lucas: foodspot#4', 'my number 4 food spot', 'https://picsum.photos/id/1084/367/267', 43.6438079, -79.3975653);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (3, 3, 'lucas: foodspot#5', 'my number 5 food spot', 'https://picsum.photos/id/1084/367/267', 43.6425088, -79.4024659);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (3, 3, 'lucas: foodspot#6', 'my number 6 food spot', 'https://picsum.photos/id/1084/367/267', 43.6425735, -79.3994644);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (3, 3, 'lucas: foodspot#7', 'my number 7 food spot', 'https://picsum.photos/id/1084/367/267', 43.6453479, -79.4005744);

--        MAP 4(belongs to user 4): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (4, 4, 'raho: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (4, 4, 'foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (4, 4, 'foodspot#3', 'my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 43.6451661, -79.403174);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (4, 4, 'foodspot#4', 'my number 4 food spot', 'https://picsum.photos/id/1084/367/267', 43.6438079, -79.3975653);

--        MAP 5(belongs to user 5): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (5, 5, 'suhur: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (5, 5, 'suhur: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);

--        MAP 6(belongs to user 6): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (6, 6, 'anisa: foodspot#1', 'my number 1vfood spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (6, 6, 'anisa: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);

--        MAP 7(belongs to user 7): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (7, 7, 'najib: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (7, 7, 'najib: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);

--        MAP 8(belongs to user 8): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (8, 8, 'noah: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (8, 8, 'noah: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);

--        MAP 9(belongs to user 9): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (9, 9, 'david: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (9, 9, 'david: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);

--        MAP 10(belongs to user 10): Pointers         --
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (10, 10, 'luba: foodspot#1', 'my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 43.6458229, -79.398787);
INSERT INTO pointers
  (user_id, map_id, title, description, image_url, latitude, longitude)
VALUES
  (10, 10, 'luba: foodspot#2', 'my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 43.2829, -78.1049);
