/// <reference path='fourslash.ts'/>

////globalThis./**/

verify.completions({
    marker: "",
    exact: [
        completion.globalThisEntry,
        ...completion.globalsVars,
        completion.undefinedVarEntry
    ]
});
