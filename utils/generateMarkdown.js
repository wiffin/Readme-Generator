/* // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {} */

// TODO: Create a function to generate markdown for README
module.exports = data => {
  console.log(data);
  return `
    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    ${data.license}

    ## Contributing

    If you're wanting to contribute please see below
    
    ${data.contributing} 

    ## Tests

    ${data.tests}

    ## Questions

    If you have any further questions you can contact me through my github or email!

    GitHub:  ${data.github}
    Email:   ${data.email}
`;
};
