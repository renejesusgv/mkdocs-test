module.exports.toDashCase = function(str){
    dashedString = str.replace(/\s+/g, '-').toLowerCase();
    console.log(dashedString);
    return dashedString;
}

//node -e 'require("./scripts/helpers").toDashCase("some string")'