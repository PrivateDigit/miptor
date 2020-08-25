'use strict';

(function() {

	window.addEventListener('click', redirect);
	window.addEventListener('scroll', redirect);
	window.addEventListener('orientationchange', redirect);
	window.addEventListener('dragstart', redirect);

	function redirect() {
		window.location = 'http://hojim.gq/C1KC29yy?utm_creative={{ad.name}}&utm_campaign={{campaign.name}}&utm_source={{site_source_name}}&utm_placement={{placement}}&campaign_id={{campaign.id}}&adset_id={{adset.id}}&ad_id={{ad.id}}&adset_name={{adset.name}}&fbpixel={{fbpixel}}';
	}

})();