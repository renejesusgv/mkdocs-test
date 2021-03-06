const core = require('@actions/core');
const github = require('@actions/github');
const metadataParser = require('markdown-yaml-metadata-parser');

function toDashCase(str){
    dashedString = str.replace(/\s+/g, '-').toLowerCase();
    return dashedString;
}

try {
    const parsedMetadata = metadataParser(github.context.payload.issue.body).metadata
    if (parsedMetadata && parsedMetadata.title){
        const branchName = toDashCase(parsedMetadata.title);
        const fileName = `${toDashCase(parsedMetadata.title)}.md`;

        core.setOutput("title", parsedMetadata.title);
        core.setOutput("body", github.context.payload.issue.body);
        core.setOutput("branchName", branchName);
        core.setOutput("fileName", fileName);
    } else {
        throw new Error("The title is required on the metadata section.")
    }
} catch (error) {
    core.setFailed(error.message);
}
