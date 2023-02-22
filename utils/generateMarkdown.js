function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/static/v1?label=License&message=${license}&color=BLUE)`;
}

function generateMarkdown(response) {
  return `# ${response.projTitle}

${renderLicenseBadge(response.projLicense)}

Five Day Weather Forecaster
    
## Description
  
${response.projDesc}
  
## Install
  
${response.projInstal}
  
## Usage
  
${response.projInstal}
  
## Contributors
  
${response.projContrib}

## Tests

${response.projTests}

## Future Development 
  
${response.projFuture}
  
`;
}

module.exports = generateMarkdown;
