const metadataParser = require('markdown-yaml-metadata-parser');

function toDashCase(str){
    dashedString = str.replace(/\s+/g, '-').toLowerCase();
    return dashedString;
}
function buildFileName(str){
    const parsedMetadata = metadataParser(str).metadata
    if (parsedMetadata && parsedMetadata.sections.length){
        roleRegex = /(?<=\s)(.*?)(?=\/)/g;
        typeRegex = /(?<=\/).*/g;
        role = parsedMetadata.sections[0].match(roleRegex) ? parsedMetadata.sections[0].match(roleRegex)[0] : "";
        type = parsedMetadata.sections[0].match(typeRegex) ? parsedMetadata.sections[0].match(typeRegex)[0] : "";
        resource = toDashCase(parsedMetadata.title);
        const fileName = `${role}.${type}.${resource}.md`.toLowerCase();
        console.log(fileName)
        return fileName
    } else {
        return "index.md"
    }
}

module.exports.toDashCase = toDashCase
module.exports.buildFileName = buildFileName

//node -e 'require("./scripts/helpers").toDashCase("some string")'