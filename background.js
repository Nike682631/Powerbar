let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ active: true }, function (tabs) {
    if (command === "popup-powerbar") {
      let tab = tabs[0];
      chrome.scripting.executeScript({ 
        target: { tabId: tab.id },
        files: ["content-script.js"] 
      })
    } else if (command === "random") {
        alert("random");
    }
  })
});