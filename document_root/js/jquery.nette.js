/**
 * AJAX Nette Framwork plugin for jQuery
 *
 * @copyright  Copyright (c) 2009, 2010 Jan Marek
 * @copyright  Copyright (c) 2009, 2010 David Grudl
 * @copyright  Copyright (c) 2009, 2010 Tomáš Kraina
 * @license    MIT
 * @link       http://nette.org/cs/extras/jquery-ajax
 */

/*
if (typeof jQuery != 'function') {
	alert('jQuery was not loaded');
}
*/

jQuery(function($) {

	$.nette = {
		success: function(payload)
		{
			// redirect
			if (payload.redirect) {
				window.location.href = payload.redirect;
				return;
			}

			// state
			if (payload.state) {
				$.nette.state = payload.state;
			}

			// snippets
			if (payload.snippets) {
				for (var i in payload.snippets) {
					$.nette.updateSnippet(i, payload.snippets[i]);
				}
			}

			// gritter
			if (payload.gritter && $.netteGritter) {
				for (var i in payload.gritter) {
					$.netteGritter.add(
						payload.gritter[i]
					);
				}
			}
		},

		updateSnippet: function(id, html)
		{
			$("#" + id).fadeTo("fast", 0.01, function () {
				$(this).html(html).fadeTo("fast", 1);
			});
		},

		// create animated spinner
		createSpinner: function(id)
		{
			return this.spinner = $('<div></div>').attr('id', id ? id : 'ajax-spinner').ajaxStart(function() {
				$(this).show();

			}).ajaxStop(function() {
				$(this).hide().css({
					position: 'fixed',
					left: '50%',
					top: '50%'
				});

			}).appendTo('body').hide();
		},

		// current page state
		state: null,

		// spinner element
		spinner: null
	};


});



jQuery(function($) {

	$.ajaxSetup({
		success: $.nette.success,
		dataType: 'json'
	});

	$.nette.createSpinner();

	// apply AJAX unobtrusive way
	$('a.ajax').live('click', function(event) {
		event.preventDefault()
		;
		// check counter for holding the number of active queries
		if ($.active) return;

		$.post(this.href, $.nette.success);

		// zobrazení spinneru a nastavení jeho pozice
		$.nette.spinner.css({
			position: "absolute",
			left: event.pageX + 20,
			top: event.pageY + 40
		});
	});

});
