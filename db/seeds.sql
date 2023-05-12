-- Departments table
INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Marketing'),
  ('Engineering'),
  ('Finance'),
  ('Human Resources');

-- Roles table
INSERT INTO role (title, salary, department_id)
VALUES
('Sales Manager', 120000.00, 1),
('Sales Representative', 60000.00, 1),
('Marketing Manager', 130000.00, 2),
('Marketing Coordinator', 50000.00, 2),
('Software Engineer', 140000.00, 3),
('QA Engineer', 100000.00, 3),
('Financial Analyst', 110000.00, 4),
('Accountant', 80000.00, 4),
('HR Manager', 150000.00, 5),
('HR Coordinator', 60000.00, 5);

-- Employees table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Chris', 'Evans', 1, NULL),
(2, 'Margot', 'Robbie', 2, 1),
(3, 'Johnny', 'Depp', 3, NULL),
(4, 'Bruce', 'Willis', 4, 3),
(5, 'Jennifer', 'Lawrence', 5, NULL),
(6, 'Scarlett', 'Johansson', 6, 5),
(7, 'Jared', 'Leto', 7, NULL),
(8, 'Ryan', 'Reynolds', 8, 7),
(9, 'Melissa', 'McCarthy', 9, NULL),
(10, 'Amy', 'Poehler', 10, 9);