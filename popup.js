document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggle');
  const statusText = document.getElementById('status');

  chrome.storage.sync.get('adSkipperEnabled', function (result) {
    const isEnabled = result.adSkipperEnabled || false;
    toggle.checked = isEnabled;
    updateStatusText(isEnabled);
    console.log("Popup loaded. Ad Skipper is " + (isEnabled ? "enabled" : "disabled"));
  });

  toggle.addEventListener('change', function () {
    const isEnabled = toggle.checked;

    chrome.storage.sync.set({ adSkipperEnabled: isEnabled }, function () {
      console.log('Ad Skipper is ' + (isEnabled ? 'enabled' : 'disabled'));

      updateStatusText(isEnabled);

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { adSkipperEnabled: isEnabled }, function(response) {
            if (chrome.runtime.lastError) {
              console.error("Error sending message to content script: ", chrome.runtime.lastError.message);
            } else {
              console.log('Message sent to content script');
            }
          });
        } else {
          console.log('No active tabs found.');
        }
      });

      chrome.runtime.sendMessage({
        action: isEnabled ? 'activate' : 'deactivate'
      });
    });
  });

  function updateStatusText(isEnabled) {
    statusText.textContent = isEnabled ? 'Extension is ON' : 'Extension is OFF';
  }
});
