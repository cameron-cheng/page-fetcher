const website = process.argv.slice(2);
const request = require('request');
const fs = require('fs')

request(website[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body.length); // Print the HTML for the Google homepage.
  fs.writeFile(website[1], body, function(err) {
    if(err) {
      return console.log(err);
    }
      console.log("The file was saved!");
    }); 
});