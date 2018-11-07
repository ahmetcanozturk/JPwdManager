/*
    description: utility methods
    author: Ahmetcan Ozturk
    version history:
            0.1 initial 2018-10-28
            1.0 release 2018-11-03
*/

const settings = require("./appdata/settings.json");

// password length for random generation
const PWDLENGTH = settings.PWDLENGTH;

// creates cryptographically strong random and complex password
exports.generateRandomPassword = () => {
    var alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwYyZz";
    var numbers = "0123456789";
    var signs = "!-@*";
    var random = [];
    var array = new Uint32Array(PWDLENGTH);
    //the Crypto.getRandomValues() method creates cryptographically strong random values
    window.crypto.getRandomValues(array);

    array.forEach(element => {
        if (element % 3 == 0)
            random.push(alphabet[element % 50]);
        else if (element % 3 == 1)
            random.push(numbers[element % 10]);
        else if (element % 3 == 2)
            random.push(signs[element % 4]);
    });

    return random.join("");
}