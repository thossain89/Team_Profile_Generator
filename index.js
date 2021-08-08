// Loading Node Modules

const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');

//Linking HTML generating page

const generateHTML = require('./src/generateHTML');

// Linking team profile constructor

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Creating Team Array

const teamArray= [];

// Start of prompts for manager

const addManager = () =>{
    console.log(chalk.green(`
    ==================================
    Welcome to Team Profile Generator
    ==================================
    `));
    return inquirer.prompt ([
        {

        type:'input',
        name: 'name',
        message: 'Who is the manager of this team ?',
        validate: nameInput => (nameInput !== '') ? true : console.log(chalk.bold.red(`Please enter manager's name !`)) //If loop using arrow and ternary
            
        },
        {

        type:'input',
        name: 'id',
        message: "Please enter Manager's ID",
        validate: idInput => {
            if  (isNaN(idInput)) {
                console.log (chalk.bold.red("\nRequire manager's ID!"))
                return false; 
            } else {
                return true;
            }
        }

        },
        {

        type:'input',
        name:'email',
        message:"Please enter manager's email address",
        validate: function (value) {
            let valid = value.match(
                /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            );
            if (valid) {
                return true;
            }
            return console.log (chalk.bold.red('Please enter a valid email address!'));
        },
        },      
        {
        
        type:'input',
        name:'officeNumber',
        message:"Please enter manager's office number",
        validate: officeNumber => {
            if  (isNaN(officeNumber)) {
                console.log (chalk.bold.red("\nOffice number is required!"))
                return false; 
            } else {
                return true;
            }
        }


        }  


    ])

    .then(managerInput => {

        const { name, id, email, officeNumber} =managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);

        
    })
};

// start prompts for adding employee

const addEmployee = () =>{
    console.log(chalk.cyan(`
    *****************************
    Adding employees to the team
    *****************************
    `));

    return inquirer.prompt ([

        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => (nameInput !== '') ? true : console.log(chalk.bold.red(`Please enter your employee's name !`))
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: idNumber => {
                if  (isNaN(idNumber)) {
                    console.log (chalk.bold.red("\nID number is required!"))
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:"Please enter employee's email address",
            validate: function (value) {
                let valid = value.match(
                    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                );
                if (valid) {
                    return true;
                }
                return console.log (chalk.bold.red('Please enter a valid email address!'));
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => (nameInput !== '') ? true : console.log(chalk.bold.red(`Please enter your employee's github username !`))
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => (nameInput !== '') ? true :  console.log(chalk.bold.red(`Please enter your employee's school name !`))
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ])
    .then(employeeData => {

         // data for employee types 

         let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
         let employee; 
 
         if (role === "Engineer") {
             employee = new Engineer (name, id, email, github);
         } else if (role === "Intern") {
             employee = new Intern (name, id, email, school);            
         }
 
         teamArray.push(employee); 
 
         if (confirmAddEmployee) {
             return addEmployee(teamArray); 
         } else {
             return teamArray;
         }


    })

};

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            return console.log("Your team profile has been successfully created!");
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

