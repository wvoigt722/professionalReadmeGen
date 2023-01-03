const index = require('../index')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {


  return `![License](https://img.shields.io/static/v1?label=License&message=${license}&color=BLUE)`
  

}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!projLicense) {
    return 
  } else {
    return `![License](https://img.shields.io/static/v1?label=License&message=" + {license} + "&color=BLUE)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ${renderLicenseBadge(response.projLicense)}


![A Picture of the Project](${response.projImg})
             
#  ${response.projTitle}

Five Day Weather Forecaster
    
## Description
  
${response.projDesc}
  
## Install
  
${response.projInstal}
  
## Usage
  
${response.projInstal}
  
## Contributors
  
${response.projContrib}
  
## License
  

"![License](https://img.shields.io/static/v1?label=License&message=" + itemBadge + "&color=BLUE)"
  ${response.projLicense}

## Tests

${response.projTest}

## Future Development 
  
${response.projFuture}
  
`

;
}

module.exports = generateMarkdown;
