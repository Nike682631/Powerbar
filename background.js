let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "popup-powerbar") {
    chrome.scripting.executeScript({
      injection: 'content-script.js'
    })
  } else if (command === "random") {
      alert("random");
  }
});