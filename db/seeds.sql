INSERT INTO department_info (id, dept_name)
VALUES ('1', 'Coaches'),
       ('2', 'Players'),
       ('3', 'Office');


INSERT INTO role_info (id, title, salary, department_id)
VALUES ('1', 'Head Coach', '800000','1'),
       ('2', 'Quarterback', '45000000','2'), 
       ('3', 'Lineman', '2500000','2'),
       ('4', 'Board Member', '300000','3'),
       ('5', 'Defensive Coordinator', '2000000','1'),
       ('6', 'Wide Receiver', '8700000','2');

INSERT INTO employees_info (first_name, last_name, position, manager_name, salary)
VALUES 
  ('Joe', 'Burrow', 'Quarterback', 'Billy Bean', 40400000),
  ('Ed', 'Ogeron', 'Head Coach','Sean McDermott', 8000000),
  ('Jammar', 'Chase', 'Wide Reciever','Les Snead', 7704000),
  ('Dave', 'Aranda', 'Defensive Coordinator','Kevin Colbert', 2000000),
  ('Will', 'Campbell', 'Lineman','Jason Licht', 2500000),
  ('Odell', 'Beckham Jr', 'Wide Receiver','Brett Veach', 7704000),
  ('Joe', 'Brady', 'Board Member','Andy Reid', 1800000),
  ('Jamarcus', 'Russel', 'Quarterback','Mickey Loomis', 40400000),
  ('Justin', 'Jefferson', 'Wide Reciever','Duke Tobin', 60000);
