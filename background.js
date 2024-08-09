//

function createNotification(title, message) {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'extension-logo.png',
        title: title,
        message: message,
        priority: 2
    });
}

chrome.runtime.onInstalled.addListener(() => {
    createNotification("YouTube Ads Skipper Installed, Happy Watching:D", "The extension has been succesfully installed.");
});

chrome.runtime.onMessage.addListener()