import $ from 'jquery';

class RevealScroll{

	constructor(){
		this.scroll = $('.site-header__scroll');
		this.body = $('html, body');

		console.log("in the event");
		this.body.animate({
			scrollTop: this.scroll.offset().top
		}, 1000);
	}

}

export default RevealScroll;