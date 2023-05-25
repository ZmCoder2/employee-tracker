INSERT INTO department_info (id, dept_name)
VALUES ('1', 'Coaches'),
       ('2', 'Players'),
       ('3', 'Office')


INSERT INTO role_info (id, title, salary)
VALUES ('1', 'Head Coach', '8.3'),
       ('2', 'Quarterback', '40.4'), 
       ('3', 'Lineman', '2.5'),
       ('4', 'Board Member', '.3'),
       ('5', 'Defensive Coordinator', '2.0'),
       ('6', 'Wide Receiver', '7.7');

INSERT INTO employees_info (first_name, last_name, role_id, department_info_id, salary)
VALUES ('Joe', 'Burrow', '2', '2', 40400000),
       ('Ed', 'Ogeron', '1', '1', 8000000),
       ('Jammar', 'Chase', '6', '2', 7704000),
       ('Dave', 'Aranda', '5', '1', 2000000),
       ('Will', 'Campbell', '3', '2', 2500000),
       ('Odell', 'Beckham Jr', '6', '2', 7704000),
       ('Joe', 'Brady', '7', '1', 1800000),
       ('Jamarcus', 'Russel', '8', '3', 40400000),
       ('Justin', 'Jefferson', '6', '2', 60000);