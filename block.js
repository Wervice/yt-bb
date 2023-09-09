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

function skip() { if (document.getElementsByClassName("ytp-ad-player-overlay-flyout-cta-rounded")[0] != null) { document.getElementsByTagName("video")[0].currentTime = 100 } }
setInterval(skip, 100)
