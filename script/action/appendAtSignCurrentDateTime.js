// Append @{2018-04-03T21:06:59Z}. Useful for git comparisons.
// https://help.github.com/articles/comparing-commits-across-time/#comparisons-across-time
var now = (new Date()).toISOString()
return clipText + '@{' + now + '}'