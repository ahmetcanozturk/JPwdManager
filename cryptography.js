/*
    description: cryptographic operations
    author: Ahmetcan Ozturk
    version history:
            0.1 initial 2018-10-28
            1.0 release 2018-11-03
*/
const crypto = require('crypto');
const ec = require("./appdata/encryptionKey.json");
const settings = require("./appdata/settings.json");

// encryption key
// get the encryption key from file or user environment
const ENCRYPTION_KEY = ec.ENCRYPTION_KEY; //process.env.ENCRYPTION_KEY;
const IV_LENGTH = settings.IV_LENGTH;
const ALGORITHM = settings.ALGORITHM;

exports.encrypt = (clearText) => {
    var iv = crypto.randomBytes(IV_LENGTH);
    var cipher = crypto.createCipheriv(ALGORITHM, new Buffer(ENCRYPTION_KEY), iv);
    var encrypted = cipher.update(clearText);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    let value = iv.toString('hex') + ':' + encrypted.toString('hex')

    return value;
}

exports.decrypt = (encrypted) => {
    var parts = encrypted.split(':');
    var iv = new Buffer(parts.shift(), 'hex');
    var encryptedText = new Buffer(parts.join(':'), 'hex');
    var decipher = crypto.createDecipheriv(ALGORITHM, new Buffer(ENCRYPTION_KEY), iv);
    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
  
    return decrypted.toString();
}