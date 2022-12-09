const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// we will generate the html file through the template.js
const generate = require ('./src/template.js');
// const teamMembers and idArr are arrays
const teamMembersObjArr = [];
// all the questions including the list are inside the ./src/allQs.js
const qs = require('./src/allQs');
// will grab each element and will export the data back to here
const managerQs = qs.qsManager;
const engineerQs = qs.qsEngineer;
const internQs = qs.qsIntern;
const roleQs = qs.qsRole;


const init = () => {
    // will ask manager first
    const addManager = () => {
        inquirer
        .prompt(managerQs)
        .then((data) => {
            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNumber
            );
            teamMembersObjArr.push(manager);
            // will ask which type of the employee that user wants to add
            askRole();
        })
    }
    const askRole = () => {
        inquirer
            .prompt(roleQs)
            .then((answer) => {
                // switch method:for the choice that user select will guide to either addEngineer() or addIntern() or etc..
                switch (answer.choice){
                    case 'Engineer':
                        addEngineer();
                        break
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        generateTeam();
                        break;
                };
            })
    }
        
    const addEngineer = () => {
        inquirer
        .prompt(engineerQs)
        .then((data) => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.github
            );
            // will push the new Engineer result to the teamMembersObjArr as an obj
            teamMembersObjArr.push(engineer);
            askRole();
        })
    }
    const addIntern = () => {
        inquirer
        .prompt(internQs)
        .then((data) => {
            const intern = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
            );
            teamMembersObjArr.push(intern);
            askRole();
        })
    }
    const generateTeam = () => {
        fs.writeFile("./dist/index.html", generate(teamMembersObjArr), (err) => {
            if (err) console.log(err);
            else {
              console.log("success");
            }
          });
    }
    addManager();
}
init();
