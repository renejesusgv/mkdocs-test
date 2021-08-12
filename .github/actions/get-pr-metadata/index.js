const core = require('@actions/core');
const github = require('@actions/github');
const metadataParser = require('markdown-yaml-metadata-parser');

function toDashCase(str){
    dashedString = str.replace(/\s+/g, '-').toLowerCase();
    return dashedString;
}

try {
    const parsedMetadata = metadataParser(github.context.payload.issue.body).metadata
    if (parsedMetadata && parsedMetadata.sections.length){
        const branchName = toDashCase(parsedMetadata.title);

        core.setOutput("title", parsedMetadata.title);
        core.setOutput("body", github.context.payload.issue.body);
        core.setOutput("branchName", branchName);
    } else {
        throw new Error("Front matter parse error ")
    }
} catch (error) {
    core.setFailed(error.message);
}