## BTC-Links Chrome extension

This extension is designed to replace custom `<blk ... blk>` tags (or their HTML-encoded equivalent `&lt;blk ... blk&gt;`) in web pages with dynamic HTML content fetched from URLs. Here's a breakdown of how it works:

### 1. **Identifying and Fetching Content:**
   - The script looks for `<span>` elements that contain the `<blk ... blk>` tags.
   - It extracts the URL specified within these tags. The URL can be a standard HTTP/HTTPS URL or an IPFS (InterPlanetary File System) URL.
   - For each URL, the script makes a `fetch` request to retrieve the content, which is expected to be a JSON object containing `html` and `js` fields representing the iframe's HTML content and JavaScript code.

### 2. **Injecting and Modifying Content:**
   - Once the HTML and JavaScript are fetched, the script appends a unique number to all element IDs within the HTML to prevent ID conflicts.
   - It also updates any JavaScript code that references these IDs to include the unique number.
   - The modified HTML is then injected into the `<span>` element, replacing the `<blk ... blk>` tag.
   - The corresponding JavaScript code is dynamically injected into the page's context to execute the required functionality.

### 3. **Regular Execution:**
   - The extension sets up an interval to run the `replaceBlkTags` function every 1 second, ensuring that any new or dynamically loaded content on the page gets processed.
   - The ethers.js library (a popular JavaScript library for interacting with Ethereum) is also loaded, though it is not directly used in the provided code. This might be for additional functionality or for future extensions.

### 4. **Manifest File:**
   - The manifest file describes the extension, specifying its version, name, description, and permissions.
   - It grants the extension permission to access any HTTP/HTTPS site and runs the script only on pages that match `*://*.x.com/*`.
   - The extension includes a background script (`background.js`) and a content script (`content.js`), with icons provided in different sizes.

### **Overall Purpose:**
The extension is likely intended for a specific use case where `<blk ... blk>` tags are used as placeholders for dynamic content on certain pages (possibly on a specific domain like `x.com`). The extension fetches and injects this content, allowing for dynamic updating of the web page based on external data or scripts. 

This is useful in our BTC-Links where content needs to be updated in real-time, such as in the pages on X that pull in data from decentralized networks like IPFS.