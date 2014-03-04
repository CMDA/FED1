// Challenges
var challenges = $$('[data-type="challenge"]');

for(var i=0; i<challenges.length; i++) {
	new CSSChallenge(challenges[i]);
}

// # of exercises indicator on cover
var sticker = document.createElement('div');
sticker.innerHTML = '<strong>' + challenges.length + '</strong> exercises inside!';
sticker.className = 'sticker';
slideshow.slides[0].appendChild(sticker);

// Activate CSS snippets
var cssSnippets = $$('.examples-list > textarea:not(.selector-snippet), .css-snippet');
for(var i=0; i<cssSnippets.length; i++) {
	new CSSSnippet(cssSnippets[i]);
	new Incrementable(cssSnippets[i]);
}

// Show iframes
addEventListener('hashchange', function(e) {
	var slide = $(location.hash),
		classes = slide.classList,
		iframe;
	
	classes.contains('iframe') && (iframe = slide.querySelector('iframe'));
	
	if(iframe) {
		iframe.src = iframe.getAttribute('data-src');
	}
}, false);


/*function outerHTML(element) {
	if(element.outerHTML) {
		return element.outerHTML;
	}
	
	outerHTML.container = outerHTML.container || document.createElement("x");
	outerHTML.container.innerHTML = '';
	
	outerHTML.container.appendChild(element.cloneNode(false));
	
	return outerHTML.container.innerHTML.replace("><", ">" + element.innerHTML + "<");
}*/