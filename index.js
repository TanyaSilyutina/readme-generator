// Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require("fs");
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your project title:',
            name: 'title',
        },
        {
            type: 'input',
            message: "Please provide a short description of your project: ",
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions for how to use your application:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Choose a license for your application:',
            name: 'license',
        },
        {
            type: 'input',
            message: 'How can other developers contribute to your project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please provide test instructions for your application: ',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHubName',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ]).then(answers => {
    const myREADME =
        `# ${answers.title}
        
## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}          
## How to Contribute
${answers.contribution}
## Tests
${answers.test}
## Questions
Check out my [GitHub page]("https://github.com/${answers.gitHubName}").

Please email me at *${answers.email}* with additional questions`
    fs.writeFile("utils/generateMarkdown.md", myREADME,(err) => {
        if(err){
            throw err;
        }
        console.log("Success");
    })
})

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README