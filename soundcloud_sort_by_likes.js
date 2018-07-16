(function(){
	var posts = document.querySelectorAll(".soundList__item");
	var stream = posts[0].parentNode;

	var sorted = Array.from(posts).sort(function(a, b){	
		var aLike = parseInt(a.querySelector("[class^=sc-button-like]").innerText) || 0;
		var bLike = parseInt(b.querySelector("[class^=sc-button-like]").innerText) || 0;

		return bLike - aLike;
	});

	for (let item of sorted) {
		stream.appendChild(item);
	}
})();
