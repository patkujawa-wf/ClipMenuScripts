// Make safe for dropbox, at least
// [Why aren't certain files on one computer syncing to another? (Dropbox Help Center)](https://www.dropbox.com/en/help/145)
// Also, keep question marks and ampersands, but do so by making them unicode
testInputs = {
    'allBad': '/\\<>:"|?*',
    'spaceAtEnd': ' ',
    'dotAtEnd': '.',
    'temp1': '~$a',
    'temp2': '.~a',
    'temp3': '~a.tmp'
}
questionMarks = /[?]/g
ampersands = /[&]/g
dateOrPathSeparators = /[\/\\]/g
allBadRE = /[\/\\<>:"|?*]/g
endingsRE = /[\s.]+$/
tempsRE = /^~\$|\.~/
tempRE = /^~(.*)\.tmp/
return clipText
    .replace(questionMarks, '﹖')
    .replace(ampersands, '﹠')
    .replace(dateOrPathSeparators, '-')
    .replace(allBadRE, '')
    .replace(endingsRE, '')
    .replace(tempsRE, '')
    .replace(tempRE, '$1')
