import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class RevealScroll{

	constructor(){
		this.scroll = $('.site-header__scroll');
		this.events();
	}

	events(){
		this.scroll.click(this.addSmoothScrolling);
		this.scroll.click(this.hideScroll);
		this.scroll.click(this.showScroll);
	}

	addSmoothScrolling(){
		this.scroll = $('.site-header__scroll');
		$.smoothScroll({
			direction: 'top'
		});
	}

	hideScroll(){
		$(document).scroll(function() {
			var scroll = $('.site-header__scroll');
			if ( $(window).scrollTop() === 0 ) scroll.fadeOut();
		});
	}

	showScroll(){
		$(document).scroll(function() {
			var scroll = $('.site-header__scroll');
			if ( $(window).scrollTop() !== 0 ) scroll.fadeIn();
		});
	}

}

export default RevealScroll;