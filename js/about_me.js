(function($) {
    $(document).ready(function() {
	
	$('#about_me').scianimator({
	    'images': ['imgs/about_me1.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#about_me').scianimator('play');
    });
})(jQuery);
