
chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query(
		{currentWindow: true, active: true},
		function(tab) {
			for (i = 0; i < tab.length; i++) {
				if (tab[i].title.includes("Meet – ") ) {
					console.log("Meet tab opened")
				}
			}
		});
	chrome.tabs.executeScript(null, {file: 'myscript.js'})
		
});
