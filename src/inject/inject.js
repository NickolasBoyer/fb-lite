chrome.extension.sendMessage({}, function(response) {
	// since an extention works with a different document object
	// this has to be done to edit the XMLHttpReqest.
	var elt = document.createElement("script");
	elt.innerHTML = `
	(function() {
		var proxied = window.XMLHttpRequest.prototype.send;
		window.XMLHttpRequest.prototype.send = function() {
				var pointer = this
				var intervalId = window.setInterval(function(){
								if(pointer.readyState != 4){
												return;
								}
								// Code when response is done
								
								const postsClassName = '_1dwg'
								const adClassName = '_5g-l'
								const sponsoredClassName = '_5paw'
								const posts = document.getElementsByClassName(postsClassName)
								const postsArray = Array.from(posts) // const postsArray = [].slice.call(htmlCollection);
								
								const filteredArray = postsArray.filter(e => {
									return Array.from(e.childNodes).find(e => {
										// console.log(e)
										return e.classList.contains(adClassName)
									})
								})
								filteredArray.forEach(e => e.classList.add("hidden"))
								
								clearInterval(intervalId);
	
				}, 1); //I found a delay of 1 to be sufficient, modify it as you need.
				return proxied.apply(this, [].slice.call(arguments));
		};
	})();
	`
	document.head.appendChild(elt); // add the script to the document so it executes

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.info("Facebook Lite is active.")
		/*
		const postsClassName = '_1dwg'
		const adClassName = '_5g-l'
		const sponsoredClassName = '_5paw'
		const posts = document.getElementsByClassName(postsClassName)
		const postsArray = Array.from(posts) // const postsArray = [].slice.call(htmlCollection);
		console.log(postsArray)
		postsArray.filter(e => {
			Array.from(e.childNodes).find(e => {
				e.classList.contains(adClassName)
			})
		})
		console.log(posts)
		postsArray.forEach(e => e.classList.add("hidden"))
		*/


		// ----------------------------------------------------------

	}
	}, 10);
});