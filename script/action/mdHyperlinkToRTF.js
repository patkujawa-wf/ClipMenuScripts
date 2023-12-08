// This doesn't work, since the rtf is in the clipboard as plain text.
// Try https://chrome.google.com/webstore/detail/create-link/gcmghdmnkfdbncmnmlkkglmnnhagajbm instead. It's HTML copy can be pasted right into google docs as a rich link.
//
// http://stackoverflow.com/questions/2850575/what-is-the-rtf-syntax-for-a-hyperlink
// {\field{\*\fldinst HYPERLINK "http://www.google.com/"}{\fldrslt http://www.google.com}}
s = clipText.trim()
endBracketIx = s.lastIndexOf(']')
title = s.substring(s.indexOf('[') + 1, endBracketIx)
link = s.substring(s.indexOf('(', endBracketIx) + 1, s.lastIndexOf(')'))
rtf = '{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1033{\\fonttbl{\\f0\\fnil\\fcharset0 Calibri;}}\n'
rtf += '{\\field{\\*\\fldinst HYPERLINK "' + title + '"}{\\fldrslt ' + link + '}}'
return rtf