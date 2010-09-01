/**
 * Gritter support for Nette Framework
 *
 * @copyright  Copyright (c) 2009, 2010 Tomáš Kraina
 * @license    MIT
 * @link       http://github.com/tomaskraina/nette-gritter
 */


if (!$.gritter) {
	alert('Gritter plugin for jQuery was not loaded');
}


jQuery(function() {

	$.netteGritter = {

		// configuration
		images: {
			imgDir: "/images/icons",
			success: '/success.png',
			info: '/info.png',
			warning: '/warning.png',
			error: '/error.png'
		},

		// Adds support for 'options.type' and automatically selects image based on it.
		add: function(options) {
			var imageFile = $.netteGritter.images.info;
			if (options.type) {
				imageFile = $.netteGritter.images[options.type];
			}
			options.image = $.netteGritter.images.imgDir + imageFile;

			return $.gritter.add(options);
		}
	};
});