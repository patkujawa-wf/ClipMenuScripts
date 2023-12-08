// example clipText = 'git@github.com:patkujawa-wf/wf-mobile-services.git'
rx = /:(.*?)\//
clipText = clipText.trim()
name = clipText.match(rx)[1]
return 'git remote add ' + name + ' ' + clipText + ' && git remote update ' + name