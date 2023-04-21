// Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require("fs");
function licenseCheck(arg){
    return `[![License: ${arg}](https://img.shields.io/badge/License-${arg}-lightblue.svg)](https://opensource.org/licenses/${arg})`;
}
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
            type: 'list',
            message: 'Choose a license for your application:',
            name: 'license',
            choices: ["MIT", "Apache_2.0", "GPLv3", "MPL_2.0", "EPL_1.0", "ISC", "WTFPL", "Unlicense"],
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
    const licenseBadge = licenseCheck(answers.license);
    const myREADME =
        `# ${answers.title}
${licenseBadge}
## Description
${answers.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
## License
Licensed under the ${answers.license} license.       
## How to Contribute
${answers.contribution}
## Tests
${answers.test}
## Questions
Check out my [GitHub page](https://github.com/${answers.gitHubName}).

Please email me at *[${answers.email}](mailto:${answers.email})* with additional questions.`
    fs.writeFile("utils/generateMarkdown.md", myREADME,(err) => {
        if(err){
            throw err;
        }
        console.log("Success");
    })
})

