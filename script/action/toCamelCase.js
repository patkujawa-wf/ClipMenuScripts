// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function toCamelCase(str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/[\s\'\"\.\!\?]/g, '') // strip quotes and punctuation too
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}
return toCamelCase(clipText)