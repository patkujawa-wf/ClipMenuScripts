// Prefix all lines with markdown checkboxes (* [ ] )
return clipText
    .split('\n')
    .map(function (s) { return '* [ ] ' + s })
    .join('\n');