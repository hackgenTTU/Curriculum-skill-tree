chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf('ascoresbj') > -1) {
        console.log(tabId)
        chrome.pageAction.show(tabId);
        // var newurl = "javascript:location.assign(zzz);";
        // chrome.tabs.update(tab.id, {url: newurl});
    }
});