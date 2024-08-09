    //
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('toggle');
        const statusText = document.getElementById('status');

        chrome.storage.sync.get([adSkipperEnabled]), function (result) {
            toggle.checked = result.adSkipperEnabled || false;
            statusText.textContent = toggle.checked ? 'Extension is ON' : 'Extension is OFF';
        }
    });