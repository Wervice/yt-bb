// Copy and paste in developer tools console.
function byeit() {
    for (e in document.getElementsByTagName("ytd-enforcement-message-view-model")) {
        if (e != 0) {
            e.innerHTML = ""
        }
    }

    for (e in document.getElementsByTagName("tp-yt-iron-overlay-backdrop")) {
        if (e != 0) {
            e.innerHTML = ""
        }
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
