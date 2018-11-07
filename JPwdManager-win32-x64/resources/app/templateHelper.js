/*
    description: template helper for user interface construction
    author: Ahmetcan Ozturk
    version history:
            0.1 initial 2018-10-28
            1.0 release 2018-11-03
*/

var templates = require("./templates");
var cryp = require("./cryptography");

exports.templateContent = (element, index) => {
    var content = templates.pwdItemTemplate.replace('%KEY%', cryp.decrypt(element.key)).replace('%VALUE%', cryp.decrypt(element.value)).replace('%HDNKEY%', cryp.decrypt(element.key));
    content = content.replace('%ITEMID%', "item".concat("_", index.toString()));
    content = content.replace('%KEYID%', "key".concat("_", index.toString()));
    content = content.replace('%HDNKEYID%', "hdn".concat("_", index.toString()));
    content = content.replace('%VALUEID%', "value".concat("_", index.toString()));
    content = content.replace('%GENBTNID%', "gbtn".concat("_", index.toString()));
    content = content.replace('%SAVEBTNID%', "sbtn".concat("_", index.toString()));
    content = content.replace('%DELBTNID%', "dbtn".concat("_", index.toString()));

    return content;
}

exports.templateBinder = (wutil) => {
    $(".value").bind("focus", function() {
        wutil.showPassword(this);
    });

    $(".value").bind("blur", function() {
        wutil.hidePassword(this);
    });

    $(".generate").bind("click", function() {
        wutil.generatePassword(this);
    });

    $(".save").bind("click", function() {
        wutil.updateItem(this);
    });

    $(".delete" ).bind("click", function() {
        wutil.deleteItem(this);
    });
}