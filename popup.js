// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const statusText = document.getElementById('status');
  
    chrome.storage.sync.get('adSkipperEnabled', function (result) {
      const isEnabled = result.adSkipperEnabled || false;
      toggle.checked = isEnabled;
      updateStatusText(isEnabled);
    });
  
    toggle.addEventListener('change', function () {
      const isEnabled = toggle.checked;
  
      chrome.storage.sync.set({ adSkipperEnabled: isEnabled }, function () {
        console.log('Ad Skipper is ' + (isEnabled ? 'enabled' : 'disabled'));
  
        updateStatusText(isEnabled);
  
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { adSkipperEnabled: isEnabled });
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
  