$(function(){
	$( "[id='tblanm_navi']" ).attr({
		"width": "100%",
		"align": "center",
		"valign": "middle",
		"cellpadding": "15",
		"cellspacing": "15",
	});
	// навигация //
	$( "[id^='m']" ).addClass( "div_button b_shadow" );
	$( "[id='m_main']" ).click( function() {
		var mainpage = $( this ).attr( "id" );
});
