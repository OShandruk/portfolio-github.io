// IBG	function ibg(){	$.each($('.ibg'), function(index, val) {		if($(this).find('img').length>0){			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');		}	});}ibg();// ******************************************************// SLICK SLIDERjQuery(document).ready( function($){	$(".product__slider").slick({	slidesToShow: 1,    autoplay: false,    dots: true,    arrows: false,    customPaging : function(slider, i) {        var thumb = $(slider.$slides[i]).data('thumb');        return '<a><img src="'+thumb+'"></a>';    },});  });// RANGE SLIDER INITIALIZED$(".js-range-slider").ionRangeSlider({        type: "double",        grid: false,        min: 0,        max: 4000,        from: 200,        to: 800,        postfix: "$"    });	// FIXED HEADER// ******************************************************$(window).scroll(function() {if ($(this).scrollTop() > 65){$('.header__fix-wrap').addClass("fix__header");}else{$('.header__fix-wrap').removeClass("fix__header");}});// *******************************************************// END fixed HEADER//********************** BURGER MENU *********************jQuery(document).ready( function($){    $('.header__burger').click(function(event) {        $('.header__burger,.header__menu').toggleClass('active');        $('body').toggleClass('lock');    });    $('.header__link').click(function(event) {        $('.header__burger,.header__menu').removeClass('active');        $('body').removeClass('lock');    });});//********************* BURGER MENU END **********************