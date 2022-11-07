// Convert e.g. management.endpoints.web.exposure.include=info,health,mappings to MANAGEMENT_ENDPOINTS_WEB_EXPOSURE_INCLUDE=info,health,mappings
// https://www.jvt.me/posts/2022/02/26/spring-environment-variable-go/
function envVarFromSpringProp(str) {
    var parts = str.split('=');
    var prop = parts[0]
        .replace(/\./g, '_')
        .replace(/-/g, '')
        .replace(/\[([0-9]+)\]/g, '_${1}_')
        .replace(/__/g, '_')
        // .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        // .replace(/[\s\'\"\.\!\?]/g, '') // strip quotes and punctuation too
        .toUpperCase();
    if (parts.length > 1)
        return prop + '=' + parts[1];
    return prop;
}
return envVarFromSpringProp(clipText)