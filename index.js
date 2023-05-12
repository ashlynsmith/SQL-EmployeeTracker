const  inquirer = require ('inquirer');
const  { viewAllEmployees, addEmployee, updateEmployeeRole } = require ('./lib/employee.js');
const  { viewAllDepartments, addDepartment } = require ('./lib/department.js');
const  { viewAllRoles, addRole } = require ('./lib/role.js');

const userActions = {
  'View all departments': () => viewAllDepartments(),
  'View all roles': () => viewAllRoles(),
  'View all employees': () => viewAllEmployees(),
  'Add a department': () => addDepartment(),
  'Add a role': () => addRole(),
  'Add an employee': () => addEmployee(),
  'Update an employee role': () => updateEmployeeRole(),
  'Quit': () => quit
};

async function start() {
  
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Welcome to your Employee Database Tracker. What would you like to view?',
    choices: [...Object.keys(userActions), 'Quit'],
  });

  if (answer.action === 'Quit') { 
    return; 
  }
  
  await userActions[answer.action]();

  start();
}

async function quit() {
  console.log('Exiting program...Goodbye!');
  process.exit(0); 
}


module.exports = { start, quit };


start();

