module.exports = data => {
console.log(data);
return `# ${data.title}

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

## Tests

${data.tests}

## Contributing

${data.contributing}

If you're wanting to contribute please see below!

## Questions

If you have any further questions you can contact me through my github or email!

GitHub:  ${data.github}
Email:   ${data.email}
`;
};