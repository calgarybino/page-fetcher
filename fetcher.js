const fs = require("fs");
const request = require("request");

// Get command line arguments
const [, , url, filePath] = process.argv;

// Send the HTTP request and save the file
request.get(url, (error, response, body) => {
  if (error) {
    console.error("Error:", error.message);
    return;
  }

  if (response.statusCode !== 200) {
    console.error("Error:", `Status code ${response.statusCode} received.`);
    return;
  }

  // Write the received data to the file
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.error("Error:", error.message);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}.`);
  });
});
