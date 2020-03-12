-- Users table seeds here (Example)

--            USERS                 --
INSERT INTO users (name,email,password) VALUES ('asma' , 'asma@example.com', 'password');
INSERT INTO users (name,email,password) VALUES ('rahul' , 'rahul@example.com', 'password');
INSERT INTO users (name,email,password) VALUES ('lucas' , 'lucas@example.com', 'password');

--            MAPS                  --
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (1,"Asma's Favourite Food Spots", 'Here is a list of all my favourite food spots', 'https://picsum.photos/id/106/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (2,"Asma's Favourite Hair Salons", 'Here is a list of all my favourite hair salons', 'https://i.picsum.photos/id/0/5616/3744.jpg', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (3,'LucasFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (4,'RahoFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1010/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (5,'SuhurFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1033/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (6,'AnisaFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/1051/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (7,'NajibFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/117/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (8,'NoahFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/119/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (9,'DavidFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/134/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (10,'LubaFoodMap', 'a list of all my fav food spots', 'https://picsum.photos/id/142/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (1,'AsmaVeganFoodMap', 'a list of all my fav vegan food spots', 'https://picsum.photos/id/106/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (2,'RahulVeganFoodMap', 'a list of all my fav vegan food spots', 'https://i.picsum.photos/id/0/5616/3744.jpg', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (3,'LucasVeganFoodMap', 'a list of all my fav vegan food spots', 'https://picsum.photos/id/1/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (4,'RahoVeganFoodMap', 'a list of all my fav food vegan spots', 'https://picsum.photos/id/1010/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (5,'SuhurVeganFoodMap', 'a list of all my fav vegan food spots', 'https://picsum.photos/id/1033/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (6,'AnisaVeganFoodMap', 'a list of all my fav vegan food spots', 'https://picsum.photos/id/1051/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (7,'NajibVeganFoodMap', 'a list of all my fav food vegan spots', 'https://picsum.photos/id/117/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (8,'NoahVeganFoodMap', 'a list of all my fav food vegan spots', 'https://picsum.photos/id/119/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (9,'DavidVeganFoodMap', 'a list of all my fav food vegan spots', 'https://picsum.photos/id/134/367/267', true);
INSERT INTO maps (user_id, title, description, image_url, active) VALUES (10,'LubaVeganFoodMap', 'a list of all my fav vegan food spots', 'https://picsum.photos/id/142/367/267', true);
--            USER_MAPS             --
INSERT INTO user_maps (user_id, map_id) VALUES (1,1);
INSERT INTO user_maps (user_id, map_id) VALUES (2,2);
INSERT INTO user_maps (user_id, map_id) VALUES (3,3);
INSERT INTO user_maps (user_id, map_id) VALUES (4,4);
INSERT INTO user_maps (user_id, map_id) VALUES (5,5);
INSERT INTO user_maps (user_id, map_id) VALUES (6,6);
INSERT INTO user_maps (user_id, map_id) VALUES (7,7);
INSERT INTO user_maps (user_id, map_id) VALUES (8,8);
INSERT INTO user_maps (user_id, map_id) VALUES (9,9);
INSERT INTO user_maps (user_id, map_id) VALUES (10,10);

INSERT INTO user_maps (user_id, map_id) VALUES (1,11);
INSERT INTO user_maps (user_id, map_id) VALUES (2,12);
INSERT INTO user_maps (user_id, map_id) VALUES (3,13);
INSERT INTO user_maps (user_id, map_id) VALUES (4,14);
INSERT INTO user_maps (user_id, map_id) VALUES (5,15);
INSERT INTO user_maps (user_id, map_id) VALUES (6,16);
INSERT INTO user_maps (user_id, map_id) VALUES (7,17);
INSERT INTO user_maps (user_id, map_id) VALUES (8,18);
INSERT INTO user_maps (user_id, map_id) VALUES (9,19);
INSERT INTO user_maps (user_id, map_id) VALUES (10,20);


--            POINTERS              --
--         MAP 1(belongs to user 1): Pointers        --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (1,1,' asma_foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.655, -79.413);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (1,1,'asma_foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.955, -79.413);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,1,'asma_foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#3_address', 43.655, -79.113);
--        MAP 11(belongs to user 1): Pointers
INSERT INTO pointers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,11,' asma_veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address' , 43.655, -79.813);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,11,'asma_veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.755, -79.413);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (1,11,'asma_veganfoodspot#3','my number 3 vegam food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.955, -79.113);

--        MAP 2(belongs to user 2): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,2,'rahul: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.655, -79.413);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,2,'rahul: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.625 ,-79.532);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (2,2,'rahul: foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#3_address', 43.255, -79.213);
--        MAP 12(belongs to user 2): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,12,'rahul: vegan foodspot#1','my number 1 vefood spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.635, -79.313);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (2,12,'rahul: vegan foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.235, -79.413);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address,latitude,longitude) VALUES (2,12,'rahul: vegan foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.435, -79.513);

--        MAP 3(belongs to user 3): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.635, -79.413);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.635, -79.513);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#3_address', 43.635, -79.113);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#4','my number 4 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#4_address', 43.135, -79.313);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#5','my number 5 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#5_address', 43.135, -79.233);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#6','my number 6 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#6_address', 43.435, -79.113);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,3,'lucas: foodspot#7','my number 7 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#7_address', 43.235, -79.313);
--        MAP 13(belongs to user 3): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,13,'lucas: vegan foodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.235, -79.313);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,13,'lucas: vegan foodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.115, -79.113);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,13,'lucas: vgean foodspot#3','my number 3 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.135, -79.613);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,13,'lucas: vegan foodspot#4','my number 4 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#4_address', 43.635, -79.613);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,13,'lucas: vegan foodspot#5','my number 5 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#5_address', 43.635, -79.313);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,13,'lucas: vegan foodspot#6','my number 6 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#6_address', 43.135, -79.313);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (3,13,'lucas: vegan foodspot#7','my number 7 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#7_address', 43.235, -79.213);

--        MAP 4(belongs to user 4): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'raho: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.635, -79.313);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'raho foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.125, -79.123);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'raho foodspot#3','my number 3 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#3_address', 43.735, -79.813);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,4,'raho foodspot#4','my number 4 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#4_address', 43.635, -79.923);
--        MAP 4(belongs to user 14): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,14,'raho: foodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.635, -79.113);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,14,'raho foodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.635, -79.213);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,14,'raho foodspot#3','my number 3 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#3_address', 43.635, -79.932);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (4,14,'raho foodspot#4','my number 4 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#4_address', 43.635, -79.613);

--        MAP 5(belongs to user 5): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (5,5,'suhur: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.635, -79.213);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (5,5,'suhur: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.635, -79.313);
--        MAP 15(belongs to user 5): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (5,15,'suhur: veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.435, -79.013);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (5,15,'suhur: veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.135, -79.313);

--        MAP 6(belongs to user 6): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (6,6,'anisa: foodspot#1','my number 1vfood spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.666, -79.111);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (6,6,'anisa: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.635, -79.467);
--        MAP 6(belongs to user 6): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (6,16,'anisa: veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address', 43.635, -79.3413);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (6,16,'anisa: veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address', 43.555, -79.555);

--        MAP 7(belongs to user 7): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (7,7,'najib: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address', 43.555, -79.555);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (7,7,'najib: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address',43.445, -79.555);
--        MAP 17(belongs to user 7): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (7,17,'najib: foodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address',43.555, -79.115);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (7,17,'najib: foodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address',43.555, -79.111);

--        MAP 8(belongs to user 8): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (8,8,'noah: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address',43.111, -79.555);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (8,8,'noah: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address', 43.023, -79.555);
--        MAP 8(belongs to user 8): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (8,18,'noah: veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address',43.555, -79.555);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (8,18,'noah: veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address',43.223, -79.555);

--        MAP 9(belongs to user 9): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (9,9,'david: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address',43.555, -79.555);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (9,9,'david: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address',43.555, -79.777);
--        MAP 19(belongs to user 9): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (9,19,'david: veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address',43.888, -79.555);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (9,19,'david: veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address',43.555, -79.999);

--        MAP 10(belongs to user 10): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (10,10,'luba: foodspot#1','my number 1 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#1_address',43.115, -79.834);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (10,10,'luba: foodspot#2','my number 2 food spot', 'https://picsum.photos/id/1084/367/267', 'foodspot#2_address',43.222, -79.333);
--        MAP 20(belongs to user 10): Pointers         --
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (10,20,'luba: veganfoodspot#1','my number 1 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#1_address',43.999, -79.111);
INSERT INTO pointers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES (10,20,'luba: veganfoodspot#2','my number 2 vegan food spot', 'https://picsum.photos/id/1084/367/267', 'veganfoodspot#2_address',43.665, -79.923);
