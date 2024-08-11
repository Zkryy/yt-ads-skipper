# YouTube Ad Skipper

**YouTube Ad Skipper** is a Chrome extension designed to automatically skip skippable ads on YouTube videos. The extension detects the `Skip Ad` button clicks it, and will bypassing the usual 5-second wait.

## Features

- Automatically skips skippable YouTube ads.
- Works across different languages and ad formats.
- Simple on/off toggle via the extension's popup interface.

## Installation (Using `.crx` File)

1. **Download the `.crx` File**:
   - Obtain the `.crx` file from the source `Releases`. This is the packed version of the extension file.

2. **Install the Extension**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** using the toggle switch at the top right.
   - Drag and drop the `.crx` file into the `chrome://extensions/` page.
   - Chrome will prompt you to confirm the installation. Click **Add Extension** to proceed.

3. **Verify Installation**:
   - The extension icon should appear in the Chrome toolbar.
   - Click the extension icon to open the popup and toggle the ad skipper on or off.

**Note**: If the `.crx` file does not install properly, ensure that **Developer mode** is enabled and try dragging and dropping the file again.

## Installation (Unpacked File)

1. **Download the Extension Files**:
   - Download the `.zip` file or clone the repository to your local machine.
   ```bash
   git clone https://github.com/Zkryy/yt-ads-skipper.git
   cd yt-ads-skipper
   ```

2. **Load the Extension into Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** using the toggle switch at the top right.
   - Click the **Load unpacked** button.
   - Select the directory containing the extension files (`manifest.json`, `background.js`, `content.js`, `popup.html`, `popup.js`, etc.).

3. **Verify Installation**:
   - The extension icon should appear in the Chrome toolbar.
   - Click the extension icon to open the popup and toggle the ad skipper on or off.

## Usage

1. **Enable/Disable Ad Skipper**:
   - Click the extension icon in the Chrome toolbar to open the popup.
   - Use the switch in the popup to enable or disable the ad skipper.

2. **Monitor Functionality**:
   - When enabled, the extension will automatically click the "Skip Ad" button as soon as it appears.
   - Check the console logs for debugging information if needed.

## Troubleshooting

- **No Skip Button Found**:
  - Ensure that the ad is skippable and that the button class hasn’t changed. You may need to inspect the button and update the selector in `content.js`.

- **CORS Errors (in console log)**:
  - These errors are related to YouTube’s ad network and do not affect the functionality of the extension. They can be ignored if the ad skipper is working correctly.

## Development

- **Code Structure**:
  - `manifest.json`: Contains metadata about the extension and its permissions.
  - `background.js`: Handles extension lifecycle events and notifications.
  - `content.js`: Contains the main logic for detecting and clicking the "Skip Ad" button.
  - `popup.html`: Provides the HTML structure for the extension's popup interface.
  - `popup.js`: Manages the popup's interactions and state.

## How It Works

1. **Content Script**:
   - The extension injects a content script (`content.js`) into YouTube video pages.
   - The content script continuously checks for the presence of the "Skip Ad" button using a specified selector.

2. **Button Detection**:
   - Once the button with the class `ytp-skip-ad-button` is detected, the script simulates a click event to skip the ad.
   - The script operates on a timer that checks for the button every 500 milliseconds, ensuring it reacts quickly when the button appears.

3. **Popup Interface**:
   - The extension includes a popup interface (`popup.html` and `popup.js`) that allows users to toggle the ad skipper on or off.
   - The state of the ad skipper (enabled or disabled) is stored in Chrome's sync storage and communicated to the content script to activate or deactivate its functionality.

4. **Background Script**:
   - The background script (`background.js`) handles extension lifecycle events such as installation and activation.
   - It also manages notifications to inform users when the extension is activated or deactivated.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements. For major changes, please open an issue first to discuss what you would like to change.

## Contact

For any questions or support, please contact [dzikrimaulana1511@gmail.com](mailto:dzikrimaulana1511@gmail.com).
