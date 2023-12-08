// Convert camelCase to snake_case
// https://superuser.com/questions/1146277/a-free-way-to-convert-camel-case-to-snake-case
return clipText
    .replace(/([A-Z])/g, "_$1")
    .replace(/^([_]+)/, '') // remove leading underscore(s)
    .replace(/([_]+)$/, '') // remove trailing underscore(s)
    .toLowerCase()