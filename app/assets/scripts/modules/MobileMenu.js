import $ from 'jquery';

class MobileMenu {

	constructor(){
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $('.site-header__menu-content');
		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x site-header__menu-icon--blue');
	}

}

export default MobileMenu;