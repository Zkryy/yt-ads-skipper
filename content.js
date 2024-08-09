const checkForads = () => {
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
    }
};

setInterval(checkForads, 1000)