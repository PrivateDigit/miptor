'use strict';

(function() {

	window.addEventListener('click', redirect);
	window.addEventListener('scroll', redirect);
	window.addEventListener('orientationchange', redirect);
	window.addEventListener('dragstart', redirect);

	function redirect() {
		window.location = 'https://cpa.rip/';
	}

})();
