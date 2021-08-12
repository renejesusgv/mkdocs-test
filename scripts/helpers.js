const metadataParser = require('markdown-yaml-metadata-parser');

function toDashCase(str){
    dashedString = str.replace(/\s+/g, '-').toLowerCase();
    //console.log(dashedString);
    return dashedString;
}
function buildFileName(str){
    const parsedMetadata = metadataParser(str).metadata
    if (parsedMetadata && parsedMetadata.sections.length){
        roleRegex = /(?<=\s)(.*?)(?=\/)/g;
        typeRegex = /(?<=\/).*/g;
        console.log(parsedMetadata.sections[0]);
        role = parsedMetadata.sections[0].match(roleRegex) ? parsedMetadata.sections[0].match(roleRegex)[0] : "";
        type = parsedMetadata.sections[0].match(typeRegex) ? parsedMetadata.sections[0].match(typeRegex)[0] : "";
        resource = toDashCase(parsedMetadata.title);
        return `${role}.${type}.${resource}.md`.toLowerCase();
    } else {
        return "index.md"
    }
}

module.exports.toDashCase = toDashCase
module.exports.buildFileName = buildFileName

//node -e 'require("./scripts/helpers").toDashCase("some string")'