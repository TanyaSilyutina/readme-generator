# README Generator

## Description
The professional README generator allows users to quickly and easily create a README file by using a command-line application. 
It lets the project creator devote more time to working on their project. 
The README generator is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

Please see a [generated README example here](https://github.com/TanyaSilyutina/readme-generator/blob/main/utils/generateMarkdown.md).

![App Terminal View](imgs/readme_generator.png)
## Installation
Since the README generator is a command-line application, I would recommend running it in your code editor. 
Clone the repo, and open the code in the code editor, and follow the terminal instructions.

## Usage
Please see a screenshot of the app's functionality below. The application is invoked by using the following command in the terminal: 
```bash
node index.js
```
The terminal will present a number of prompts. After user provides answers to the prompts, a markdown file will be generated in their code editor. 
The newly generated file reflects user's responses and styles them in the format of a professional README.

You can view the [video demo here](https://drive.google.com/file/d/1-OoT7a9xA2YQ-f9JpzJ-0uGfRp4xDdCj/view).

![App Usage View](imgs/Readme%20Generator.gif)

## License
N/A

## Features
The application features an extended list of licenses. When a user picks a license, the license badge is displayed at the README header. 
Please see badge examples below:

[![License](https://img.shields.io/badge/License-Apache_2.0-lightblue.svg)](https://opensource.org/licenses/Apache-2.0)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-lightblue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-lightblue.svg)](http://www.wtfpl.net/about/)

