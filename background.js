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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'activate') {
        createNotification("YouTube Ad Skipper Activated", "The extension is now active.");
    }
    else if (request.action === deactivate) {
        createNotification("YouTube Ad Skipper Deactivated", "The extension has been deactivated.");
    }
});