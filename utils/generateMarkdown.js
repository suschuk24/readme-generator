// function to generate markdown for README
function generateMarkdown(userResponse) {
  console.log(userResponse);
  return `
# ${userResponse.title}\n

## Description:\n
![License](https://img.shields.io/badge/License-${userResponse.license}-blue.svg "License Badge")

${userResponse.description}\n

# Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation:\n
${userResponse.installation}\n

## Usage:\n
${userResponse.usage}\n


## License:\n

For more information about licenses, please visit:
[License](https://opensource.org/licenses/${userResponse.license})\n


## Contributing:\n
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

${userResponse.contributions}\n

## Tests:\n
${userResponse.tests}\n

## Questions:\n

If you have any questions, please see GitHub's Guide to a Professional README, my GitHub Page, or feel free to reach out by email:

-[GutHub's Guide to a Professional README](https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md)\n

- [My Github Profile](https://github.com/${userResponse.github})\n

- [My Email](${userResponse.email})\n
  `;
}

module.exports = generateMarkdown;
