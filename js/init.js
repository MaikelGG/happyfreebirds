/*
 * Copyright (c) 2023 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";

	// here all ready functions

	elisc_tm_modalbox();
	elisc_tm_page_transition();
	elisc_tm_trigger_menu();
	elisc_tm_modalbox_portfolio();
	elisc_tm_cursor();
	elisc_tm_popup();
	elisc_tm_data_images();
	elisc_tm_contact_form();
	elisc_tm_owl_carousel();
	elisc_tm_scrollable();

	jQuery(window).on('resize', function(){
		elisc_tm_menu_closer();
	});

});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function elisc_tm_modalbox(){
	"use strict";

	jQuery('.elisc_tm_all_wrap').prepend('<div class="elisc_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><svg viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg></a></div><div class="description_wrap"></div></div></div>');
}


// -----------------------------------------------------
// ---------------   PAGE TRANSITION    ----------------
// -----------------------------------------------------

function elisc_tm_page_transition(){

	"use strict";

	var section 		= jQuery('.elisc_tm_section');
	var allLi 			= jQuery('.transition_link li');
	var button			= jQuery('.transition_link a');
	var wrapper 		= jQuery('.elisc_tm_all_wrap');
	var enter	 		= wrapper.data('enter');
	var exit		 	= wrapper.data('exit');

	button.on('click',function(){
		var element 	= jQuery(this);
		var href		= element.attr('href');
		if(element.parent().hasClass('elisc_tm_button')){
			jQuery('.menu .transition_link a[href="'+href+'"]').trigger('click');
			hashtag();
			return false;
		}
		var sectionID 	= jQuery(href);
		var parent	 	= element.closest('li');
			if(!parent.hasClass('active')) {
				allLi.removeClass('active');
				wrapper.find(section).removeClass('animated '+enter);
				if(wrapper.hasClass('opened')) {
					wrapper.find(section).addClass('animated '+exit);
				}
				parent.addClass('active');
				wrapper.addClass('opened');
				wrapper.find(sectionID).removeClass('animated '+exit).addClass('animated '+enter);
				jQuery(section).addClass('hidden');
				jQuery(sectionID).removeClass('hidden').addClass('active');
			}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function elisc_tm_trigger_menu(){

	"use strict";

	var hamburger 		= jQuery('.elisc_tm_topbar .trigger .hamburger');
	var mobileMenu		= jQuery('.elisc_tm_mobile_menu');
	var mobileMenuList	= jQuery('.elisc_tm_mobile_menu .menu_list ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		}else{
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});

	mobileMenuList.on('click',function(){
		jQuery('.elisc_tm_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});

}

function elisc_tm_menu_closer(){

	"use strict";

	var ww = jQuery(window).width();
	if(ww >= 1040){
		jQuery('.elisc_tm_mobile_menu').removeClass('opened');
		jQuery('.elisc_tm_topbar .trigger .hamburger').removeClass('is-active');
	}
}



// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function elisc_tm_modalbox_portfolio(){

	"use strict";

	var modalBox	= jQuery('.elisc_tm_modalbox');
	var button		= jQuery('.elisc_tm_portfolio .portfolio_popup');
	var closePopup	= modalBox.find('.close');

	button.on('click',function(){
		var element 	= jQuery(this);
		var parent		= element.closest('li');
		var image		= parent.find('.image .main').data('img-url');
		var details 	= parent.find('.hidden_content_portfolio').html();
		var category 	= parent.find('.details .category').html();
		var title	 	= parent.find('.details .title a').text();

		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(details);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3 class="title">'+title+'</h3></div>');
		elisc_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function elisc_tm_cursor(){
    "use strict";

	var myCursor	= jQuery('.mouse-cursor');

	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};


// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function elisc_tm_popup(){

	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});

	jQuery('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function elisc_tm_data_images(){

	"use strict";

	var data			= jQuery('*[data-img-url]');

	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)) {
	  return false;
	}else{
	  return true;
	}
}

function elisc_tm_contact_form(){

	"use strict";

	jQuery(".contact_form #send_message").on('click', function(){

		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields
		if( name==='' || email ==='' || message === '' ){
			jQuery('.empty_notice').slideDown(500).delay(2000).slideUp(500);

		} else if(IsEmail(email)==false){
			jQuery('.invalid_email_notice').slideDown(500).delay(2000).slideUp(500);
		} else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("https://fabform.io/f/OPh6-Jl",{ name: name, email: email, message: message, subject: subject}, function(data) {

				//jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function elisc_tm_owl_carousel(){

	"use strict";

	var carousel			= jQuery('.elisc_tm_testimonials .owl-carousel');

	carousel.owlCarousel({
		loop: true,
		items: 1,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: false,
		dots: true,
		nav: false,
		navSpeed: false
	});

	var carousel2			= jQuery('.elisc_tm_partners .owl-carousel');

	carousel2.owlCarousel({
		loop: true,
		items: 4,
		lazyLoad: false,
		margin: 50,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:4},
			1200:{items:4},
			1600:{items:4},
			1920:{items:4}
		}
	});

	var carousel3			= jQuery('.elisc_tm_portfolio .owl-carousel');

	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}

	carousel3.each(function(){
		var element = jQuery(this);

		element.owlCarousel({
			loop: false,
			items: 3,
			lazyLoad: false,
			margin: 30,
			autoplay: false,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				1040 : {
					items: 3
				}
			}
		});

		element.closest('.elisc_tm_portfolio').find('.next_button').click(function() {
			element.trigger('next.owl.carousel');
			return false;
		});
		// Go to the previous item
		element.closest('.elisc_tm_portfolio').find('.prev_button').click(function() {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			element.trigger('prev.owl.carousel');
			return false;
		});

	});
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function elisc_tm_scrollable(){

	"use strict";

	var w				= jQuery(window).width();
	var H				= jQuery(window).height();
	var spacing			= 50;
	if(w <= 1600){
		spacing = 30;
	}
	var avatarHeight	= jQuery('.elisc_tm_sidebar .author').outerHeight();
	var scrollable		= jQuery('.elisc_tm_sidebar .menu.scrollable');
	var verMenu			= jQuery('.elisc_tm_sidebar .menu');
	var copyright		= jQuery('.elisc_tm_sidebar .copyright').outerHeight()+spacing;

	verMenu.css({height:H-avatarHeight-copyright});

	scrollable.each(function(){
		var element		= jQuery(this);

		element.css({height: H-avatarHeight-copyright}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}
