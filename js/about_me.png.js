(function($) {
    $(document).ready(function() {
	
	$('#about_me_png').scianimator({
	    'images': ['imgs/about_me.png1.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#about_me_png').scianimator('play');
    });
})(jQuery);
