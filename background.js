function createNotification(title, message) {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: title,
        message: message,
        priority: 2
    });
}

chrome.runtime.onInstalled.addListener(() => {
    createNotification("YouTube Ads Skipper Installed", "The extension has been successfully installed. Happy watching! :D");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'activate') {
        createNotification("YouTube Ad Skipper", "The extension is now active.");
    } else if (request.action === 'deactivate') {
        createNotification("YouTube Ad Skipper", "The extension has been deactivated.");
    }
});