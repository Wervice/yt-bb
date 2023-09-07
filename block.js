// Copy and paste in developer tools console or to the code filed of the YouTube Enhancer Addon.
function byeit() {
try {
    document.getElementsByClassName("ytd-popup-container")[0].remove() }
catch {
 console.error("Its gone")
}
    try {
        document.getElementsByClassName("video-stream html5-main-video")[0].play()
    }
    catch {
        console.error("YTADB:", "Couldn't start video.")
    }
}

iid = setInterval(byeit, 100)
setTimeout(function () { clearInterval(iid) }, 5000)
