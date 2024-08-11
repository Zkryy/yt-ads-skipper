let adSkipperEnabled = false;

//
const checkForAds = () => {
    if (!adSkipperEnabled) return;
    
    const skipButton = document.querySelector('button.ytp-skip-ad-button');

    if (skipButton) {
        console.log("Skip button found and clicked!");
        skipButton.click();
    } else {
        console.log("No skip button found.");
    }
};

setTimeout(() => {
    setInterval(checkForAds, 500);
}, 1000);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.adSkipperEnabled !== undefined) {
        adSkipperEnabled = request.adSkipperEnabled;
        console.log("Ad Skipper status changed: " + (adSkipperEnabled ? "Enabled" : "Disabled"));
        
        sendResponse({status: "received"});
    }
    
    return true;
});

chrome.storage.sync.get(['adSkipperEnabled'], function (result) {
    adSkipperEnabled = result.adSkipperEnabled || false;
    console.log("Ad Skipper initialized with status: " + (adSkipperEnabled ? "Enabled" : "Disabled"));
});
