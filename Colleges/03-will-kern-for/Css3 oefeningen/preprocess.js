$$('header.slide, .examples-list.slide, .iframe.slide').forEach(function(slide) {
	slide.classList.add('dont-resize');
});

$$('.slide > iframe:only-child').forEach(function(iframe) {
	var slide = iframe.parentNode,
		h = document.createElement('h1'),
		a = document.createElement('a');
	
	slide.classList.add('iframe');
		
	var title = iframe.getAttribute('data-src')
					.replace(/\/#?$/, '')
					.replace(/^\w+:\/\/w{0,3}\.?/, '');
	
	a.href = iframe.src;
	a.target = '_blank';
	a.innerHTML = title;
	h.appendChild(a);
	
	slide.appendChild(h);
});

var slideshow = new SlideShow();

