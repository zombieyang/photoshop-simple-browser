// Get references to the HTML elements
const connectBtn = document.getElementById('connect-btn');
const refreshBtn = document.getElementById('refresh-btn');
const urlBar = document.getElementById('url-bar');
const webview = document.getElementById('webview');

// Function to update the webview URL
function updateWebviewUrl() {
    const url = urlBar.value.trim();
    urlBar.value = url;
    if (url) {
        webview.src = url;
    }
}

// Function to refresh the webview
function refreshWebview() {
    webview.reload();
}

// Add event listeners
connectBtn.addEventListener('click', updateWebviewUrl);
refreshBtn.addEventListener('click', refreshWebview);
