var d = document.querySelectorAll(".soundList__item");
var stream = d[0].parentNode;

var sorted = Array.from(d).sort(function(a, b){	
	var aLike = parseInt(a.querySelector("[class^=sc-button-like]").innerText) || 0;
	var bLike = parseInt(b.querySelector("[class^=sc-button-like]").innerText) || 0;
	
	/*
	var aRep = parseInt(a.querySelector("[class^=sc-button-repost]").innerText) || 1;
	var bRep = parseInt(b.querySelector("[class^=sc-button-repost]").innerText) || 1;
	var aPlays = a.querySelector("[class$=sc-ministats-plays] > span.sc-visuallyhidden").innerText;
		aPlays = parseInt(aPlays.match(/([\d,])/g).join("")) || 0;
	var bPlays = b.querySelector("[class$=sc-ministats-plays] > span.sc-visuallyhidden").innerText;
		bPlays = parseInt(bPlays.match(/([\d,])/g).join("")) || 0;
	
	var aRank = aLike + (aLike / aRep);
	var bRank = bLike + (bLike / bRep);
	*/
	
	return bLike - aLike;
});

for (let item of sorted) {
	stream.appendChild(item);
}

/*
var likes = d[i].querySelector("[class^=sc-button-like]").innerText
var title = d[i].querySelector("[class^=soundTitle__title] > span").innerText
var artist = d[i].querySelector("[class^=soundTitle__username] > span").innerText
*/
