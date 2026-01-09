const adblockIntervals = {};
let update_interval = 700;

chrome.webNavigation.onCommitted.addListener(function (details) {
    if (adblockIntervals[details.tabId]) {
        clearInterval(adblockIntervals[details.tabId]);
        delete adblockIntervals[details.tabId];
    }
    
    chrome.tabs.get(details.tabId).then(function(tab) {
        if (!tab || !tab.url) return;
        
        let url = new URL(tab.url);
        let domain = url.hostname.replace(/^www\./, '');
        
        if (domain === "yougame.biz") {
            RunAdblocker(details.tabId);
            
            const intervalId = setInterval(() => {
                RunAdblocker(details.tabId);
            }, update_interval);
            
            // save id interval
            adblockIntervals[details.tabId] = intervalId;
        }
    });
});

chrome.tabs.onRemoved.addListener(function(tabId) {
    if (adblockIntervals[tabId]) {
        clearInterval(adblockIntervals[tabId]);
        delete adblockIntervals[tabId];
    }
});

function RunAdblocker(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['blockgame.js'],
    }).catch(() => { /* pohuy */ });
}