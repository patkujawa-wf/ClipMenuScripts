// Turn http://recordit.co/JnqZ9twVwz
// into [![JnqZ9twVwz](http://g.recordit.co/JnqZ9twVwz.gif)](http://recordit.co/JnqZ9twVwz)

var url = clipText.trim();
var videoName = url.replace(/.*\/(.+)/, '$1'); // slug / id
var imageMarkdown = '![' + videoName + '](' +
    url.replace('recordit.co', 'g.recordit.co') +
    '.gif)';
var wrappedInHyperlink = '[' + imageMarkdown + '](' + url + ')';
return wrappedInHyperlink;