$(function(){
	//
	$( "#htbl" ).addClass( "b_shadow" ).attr({
		"align": "center",
	}).css ({
		"background": "#33ccff",
		"height": "98%",
		"width": "60%",
		"border-radius": "11px",
		"position": "absolute",
		"left": "20%",
	});

	$( "#hlogo" ).addClass( "img_border b_shadow" ).attr({
		"width": "130%",
	});
	$( "#dbody" ).addClass( "txtheader" );
	$( "#thbody").attr({
		"width": "100%",
		"align": "center",
		"valign": "middle",
		"cellpadding": "15",
		"cellspacing": "15",
	});
	$( "#thfoot").addClass( "bodytbl t_shadow" ).attr({
		"align": "center",
	});
	$( "#dnavi" ).attr({
		"align": "center",
	});

	// Инфо //
	$( "[id^='dh']" ).addClass( "div_button b_shadow" );
	$( "[id^='dh']" ).click( function() {
		var info = $( this ).attr( "id" );
		info = info.substring(2);
		$( "#dsection" ).load( "./" + info + "/" );
	});

/*
$( "#examination" ).html( 'Loading information from ' + './' + animal + '/' );
*/
});
