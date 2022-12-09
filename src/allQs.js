const qsManager = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
]

const qsEngineer = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github?"
    }
]

const qsIntern = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }
]

const qsRole = [
    {
        type:'list',
        name:'choice',
        massage:'Which role you would like to add',
        choices: ['Engineer', 'Intern', 'Finished! I would like to generate the page!']
    }
]

module.exports = {
    qsManager,
    qsEngineer,
    qsIntern,
    qsRole
}