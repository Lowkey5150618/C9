// app.js

// Tab Management
let tabs = [];

function createTab(url) {
    let tab = { url: url, history: [url] };
    tabs.push(tab);
    return tab;
}

function closeTab(index) {
    if (index > -1) {
        tabs.splice(index, 1);
    }
}

function switchTab(index) {
    if (index >= 0 && index < tabs.length) {
        return tabs[index];
    }
    return null;
}

// Navigation
function navigate(tab, url) {
    if (tab) {
        tab.history.push(url);
        tab.url = url;
    }
}

// Bookmarks
let bookmarks = [];

function addBookmark(url) {
    bookmarks.push(url);
}

function getBookmarks() {
    return bookmarks;
}

// History
let browsingHistory = [];

function recordHistory(url) {
    browsingHistory.push(url);
}

// Developer Tools
function log(message) {
    console.log(message);
}

// Example usage
let myTab = createTab('https://example.com');
navigate(myTab, 'https://example.com/page1');
addBookmark(myTab.url);
recordHistory(myTab.url);
log(myTab);