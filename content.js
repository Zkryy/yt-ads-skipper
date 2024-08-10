let adSkipperEnabled =  false;

const checkForAds = () => {
    if (!adSkipperEnabled) return;

    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
    }
};

setInterval(checkForAds, 1000);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.adSkipperEnabled !== undefined) {
        adSkipperEnabled = request.adSkipperEnabled;
    }
});

chrome.storage.sync.get(['adSkipperEnabled'], function (result) {
    adSkipperEnabled = result.adSkipperEnabled || false;
});