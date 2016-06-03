//percent2px: (c) 2015 Frederik Dunschen
/*
Syntax:
pxx = percent2absolute_top(8);
pxy = percent2absolute_left(5);
document.getElementById("imp").style.top = pxx + "px";
document.getElementById("imp").style.left = pxy + "px";
*/

var winHeight = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight;
               
  
	function percent2absolute_top(percent) {
		var px = (winHeight*2/100)+document.getElementById("hea").clientHeight+(winHeight*percent/100)+12; 
		return px;
	}
	function percent2absolute_left(percent) {
		var px = document.body.clientWidth*percent/100;
		return px;
	}
	function percent2height(percent) {
		var px = winHeight*percent/100;
		return px;
	}
	function percent2width(percent) {
		var px = document.body.clientWidth*percent/100;
		return px;
	}
	function percent2font_size(px) {
		var gheight, cheight, val;
		gheight = 740;
		cheight = winHeight;
		val = cheight / gheight;
		return px*val;
	}	
