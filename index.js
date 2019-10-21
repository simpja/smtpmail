// Read Credentials from file
//      For simpjas credentials locally. 
//      Substitute with your own credentials and save to a file referenced here. 
//      See the "secret.txt" file for a template of the structure of such a file.

// const filePath = "./secret.txt.txt"
const filePath = "../globalConfig/credentials.txt"


var fs = require("fs");
var textFromFile = fs.readFileSync(filePath);

// Parse text from secret file
var mailObj = JSON.parse(textFromFile);
console.log(mailObj.mailTo);