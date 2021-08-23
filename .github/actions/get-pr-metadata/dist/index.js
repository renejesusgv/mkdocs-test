/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 862:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 813:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 413:
/***/ ((module) => {

module.exports = eval("require")("markdown-yaml-metadata-parser");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(862);
const github = __nccwpck_require__(813);
const metadataParser = __nccwpck_require__(413);

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

})();

module.exports = __webpack_exports__;
/******/ })()
;