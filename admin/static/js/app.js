+function() {
	$(function() {
		var sidenav = $('[data-ride="collapse"]');
		sidenav.find("li a:first-child").on("click", function(e) {
			var $this = $(e.target), 
				$li, $nothref;
			$this.is('a') || ($this = $this.closest('a')), $li = $this.parent(), $nothref = $this.attr("href") =='#' || $this.attr("href") =='' || $this.attr("href") =='/';

			$li.parents("li").addClass('active').find('> ul').slideDown(200);
			$li.hasClass('active') && $this.next().slideUp(200) || $this.next().slideDown(200);
			$li.toggleClass('active');

			!$nothref && sidenav.find('a.clicked').removeClass("clicked") && $this.addClass('clicked');
			
			e.preventDefault();
		});

		$(".h5").trigger('click');
		//"pushState" in history ? console.log("true"):console.log("false");

		var isFullScreen = !1,
			toggle = function() {
				isFullScreen = !isFullScreen, isFullScreen ? $('.ruler').addClass("ruler-fullscreen-active") : $('.ruler').removeClass("ruler-fullscreen-active")
			};
			$(".ruler .ruler-fullscreen-switch").on("click", toggle);

		$(window).on("popstate hashchange", function() {
			console.log(location.pathname);
		});
	});
}()
