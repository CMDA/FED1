(function(){

var self = window.CSSChallenge = function (slide) {
	var me = this;
	
	this.slide = slide;
	this.goal = $('.demo-box:not(.my)', slide);
	this.test = $('.my.demo-box', slide);
	this.textarea = $('textarea.my.code', slide);
	this.solution = $('textarea:not(.my).code', slide);
	
	this.test.setAttribute('style', this.goal.getAttribute('style'));
	this.test.innerHTML = this.goal.innerHTML;
	
	this.textarea.setAttribute('data-subject', '#' + slide.id + ' .my.demo-box');
	this.textarea.placeholder = 'Type your code here';
	
	this.testSnippet = new CSSSnippet(this.textarea);
	this.raw = (this.testSnippet).raw;
	new Incrementable(this.textarea);
	
	this.solution.setAttribute('data-subject', '#' + slide.id + ' :not(.my).demo-box');
	this.solution.readonly = true;
	
	this.goalSnippet = new CSSSnippet(this.solution);
	
	this.textarea.oninput = function() {
		if(!me.slide.classList.contains('succes1') &&
			me.solved()) {
			// I solved it!!
			me.slide.classList.add('succes1');
			
			self.sounds.winner.play();
			
			me.end = Date.now();
			
			me.status.innerHTML = 'Gefeliciteerd! Je had maar ' + me.timeTaken() + ' seconden nodig!';
		}
	};
	
	// Add solve button
	this.solve = document.createElement('button');
	
	this.solve.className = 'solve';
	this.solve.innerHTML = 'De oplossing';
	this.solve.onclick = function() {
		if(!confirm('Weet je zeker dat je op wilt geven? There’s no way back!')) {
			return;
		}
		
		self.sounds.loser.play();
		
		me.slide.classList.add('fail');
		
		me.end = Date.now();
		
		me.status.innerHTML = 'Maar, je hebt het tenminste  ' + me.timeTaken() + ' lang geprobeerd.';
		
		me.textarea.style.display = 'none';
		me.solution.style.display = 'block';
		
		this.disabled = true;
	};
	
	slide.appendChild(this.solve);
	
	this.start = Date.now();
	
	addEventListener('hashchange', function() {
		if(location.hash === '#' + slide.id) {
			me.textarea.focus();
			me.start = Date.now();
		}
	}, false);
	
	this.status = document.createElement('p');
	
	this.status.className = 'status';
	
	slide.appendChild(this.status);
};

self.prototype = {
	solved: function() {
		if(this.raw) {
			var goalStyle = this.goalSnippet.style,
				testStyle = this.testSnippet.style;
			return compareRules(goalStyle, testStyle);
		}
		else {
			// Compare computed styles instead, it's more solid
			var goalStyle = getComputedStyle(this.goal),
				testStyle = getComputedStyle(this.test);
				
			for(var i=goalStyle.length; i--;) {
				var property = goalStyle[i],
					goalValue = goalStyle.getPropertyValue(property),
					testValue = testStyle.getPropertyValue(property);

				if(goalValue != testValue) {
					return false;
				}
			}
			
			return true;
		}
		
		return false;
	},
	
	timeTaken: function() {
		var ms = this.end - this.start,
			s = Math.round(ms/1000),
			m = ~~(s/60),
			ret = '';
			
		s = s % 60;
		
		if(m > 0) {
			ret = m + ' minuten' + (s > 0? ' and ' : '');
		}
		
		return ret + (s > 0? s + ' seconden' : '');
	}
};

self.sounds = {
	winner: new Audio('winner.wav'),
	loser: new Audio('loser.mp3')
};

self.defaults = getComputedStyle(document.createElement('div'));

// Private helpers
function cssText(rule) {
	var cssText = rule.cssText, selector = rule.selectorText;
	
	if(selector) {
		return cssText.replace(RegExp('^' + selector + '\\s+\\{'), '');
	}
	else {
		return cssText;
	}
}

function sortCssText(cssText) {
	return cssText.split(/;\s+/).sort().join(';\r\n');
}

function compareRules(rule1, rule2) {
	if(!rule1.cssRules != !rule2.cssRules) { // xor
		return false;
	}
	
	if(rule1.cssRules) {
		if(rule1.cssRules.length != rule2.cssRules.length) {
			return false;
		}
		
		for (var i=0; i<rule1.cssRules.length; i++) {
			if(!compareRules(rule1.cssRules[i], rule2.cssRules[i])) {
				return false;
			}
		}
		
		return true;
	}
	else {
		return rule1.selectorText == rule2.selectorText
			&& rule1.cssText.length == rule2.cssText.length
			&& sortCssText(cssText(rule1)) == sortCssText(cssText(rule2));
	}
}

})();