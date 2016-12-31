(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define([], factory);
	} else if (typeof exports !== "undefined") {
		factory();
	} else {
		var mod = {
			exports: {}
		};
		factory();
		global.main = mod.exports;
	}
})(this, function () {
	"use strict";

	;(function () {

		function hoverLike() {
			$(".elem.minus").hover(function () {
				$(this).parents(".raiting").find(".likeElement").addClass("likeElementAdd");
			}, function () {
				$(this).parents(".raiting").find(".likeElement").removeClass("likeElementAdd");
			});

			$(".elem.pluse").hover(function () {
				$(this).parents(".raiting").find(".likeElement").addClass("likeElementAddPluse");
			}, function () {
				$(this).parents(".raiting").find(".likeElement").removeClass("likeElementAddPluse");
			});
		}

		function buttons() {
			$(".slideBtn").click(function () {
				$(".personContent").fadeToggle();
				$(".personContent").parents(".item").toggleClass("flex0");
				$(".anotherBlock").parents(".item").toggleClass("flex1");
			});

			$(".closeBtn").click(function () {
				$(".person").parents(".item").toggleClass("flex0");
				$(".personContent").parents(".item").toggleClass("flex0");
				$(".person").stop(true, true).fadeToggle();
				$(".personContent").stop(true, true).fadeToggle();
				$(".anotherBlock").parents(".item").toggleClass("flex1");
			});

			$(".toggleBtn").click(function () {
				$(".person").parents(".item").stop(true, true).animate({ "left": "-100%" });
				$(".person").parents(".item").toggleClass("zindex1");
				$(".personContent").removeClass("op0");
				$(".personContent").animate({ "opacity": "1" });
			});
		}

		function resizeAnimate() {
			var w = $(window).width();

			if (w < 370) {
				$(".personContent").addClass("op0");
			} else {
				$(".personContent").removeClass("op0");
			}
		}

		function getDefaultParamsScroll() {
			$(".person").parents(".item").stop(true, true).animate({ "left": "0%" });
			$(".person").parents(".item").css({ "z-index": "3" });
			$(".person").parents(".item").removeClass("zindex1");

			console.log("yes");
		}

		//slick slider's
		function slickSlidersActivate() {
			$(".slider_1").slick({
				infinite: false,
				autoplay: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				vertical: true,
				adaptiveHeight: true
			});
		}

		//fancybox
		function fancyboxesActivate1() {
			$(".gallery.slider_1 .item a").fancybox({
				padding: 0,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		}

		function fancyboxesActivate() {
			$(".galleryTab .elem a").fancybox({
				padding: 0,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		}

		//anchor
		function anchorLinks() {
			$(".anchor").click(function (e) {
				e.preventDefault();

				var el = $(this).attr("href");

				$("body, html").animate({ scrollTop: $(el).offset().top - 160 }, 800);
				return false;
			});
		}

		$(window).resize(function () {
			getDefaultParamsScroll();
			resizeAnimate();
		});

		//ready function
		$(document).ready(function () {
			slickSlidersActivate();
			fancyboxesActivate();
			buttons();
			hoverLike();
			resizeAnimate();
			fancyboxesActivate1();
		});
	})();
});
//# sourceMappingURL=es6Code.js.map
