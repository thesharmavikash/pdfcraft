// PDFRose Chrome Extension - Background Service Worker

const PDFRose_URL = 'https://PDFRose.gitu.net/en';

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // Create main context menu item
    chrome.contextMenus.create({
        id: 'PDFRose-open',
        title: 'Open with PDFRose',
        contexts: ['link', 'page']
    });

    // Create submenu for specific tools
    chrome.contextMenus.create({
        id: 'PDFRose-merge',
        parentId: 'PDFRose-open',
        title: 'Merge PDFs',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'PDFRose-compress',
        parentId: 'PDFRose-open',
        title: 'Compress PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'PDFRose-convert',
        parentId: 'PDFRose-open',
        title: 'Convert to PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'PDFRose-all-tools',
        parentId: 'PDFRose-open',
        title: 'All Tools →',
        contexts: ['link', 'page']
    });

    console.log('PDFRose context menus created');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = PDFRose_URL;

    switch (info.menuItemId) {
        case 'PDFRose-merge':
            url = `${PDFRose_URL}/tools/merge-pdf`;
            break;
        case 'PDFRose-compress':
            url = `${PDFRose_URL}/tools/compress-pdf`;
            break;
        case 'PDFRose-convert':
            url = `${PDFRose_URL}/tools/jpg-to-pdf`;
            break;
        case 'PDFRose-all-tools':
        case 'PDFRose-open':
            url = PDFRose_URL;
            break;
        default:
            url = PDFRose_URL;
    }

    // Open PDFRose in a new tab
    chrome.tabs.create({ url: url });
});

// Log when service worker starts
console.log('PDFRose background service worker started');
