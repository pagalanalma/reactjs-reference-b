// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0
import $ from 'jquery';
(function (id, src) {
  if (document.getElementById(id)) { return; }
  var js = document.createElement('script');
  js.src = src;
  js.type = 'text/javascript';
  js.id = id;
  var e = document.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(js, e);
})('hs-analytics', '//js.hs-analytics.net/analytics/1577343900000/6913270.js');

(function (id, src, attrs) {
  if (document.getElementById(id)) {
    return;
  }
  var js = document.createElement('script');
  js.src = src;
  js.type = 'text/javascript';
  js.id = id;
  for (var name in attrs) { if(attrs.hasOwnProperty(name)) { js.setAttribute(name, attrs[name]); } }
  var e = document.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(js, e);
})('CollectedForms-6913270', 'https://js.hscollectedforms.net/collectedforms.js', {"crossorigin":"anonymous","data-leadin-portal-id":6913270,"data-leadin-env":"prod","data-loader":"hs-scriptloader","data-hsjs-portal":6913270,"data-hsjs-env":"prod"});


$(document).ready(function(){
		
		$(document).on({
			keyup: function() {
			  formatCurrency($(this));
			},
			blur: function() { 
			  //formatCurrency($(this));
			},
			change: function() { 
			  //formatCurrency($(this));
			},
			click: function() { 
			  formatCurrency($(this));
			}
		},'input, select, div, [field_type="currency"],[type="submit"], .auto-currency');
		
		
});
function formatNumber(n) {
	
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
	if (input.attr('field_type')) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
   var orig = input.val();
	input_val = input_val.replace(/[`~!$@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
  
  // don't validate empty input
  if (input_val === "" ) { return;}
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
	
  // check for decimal
  
  if (input_val.indexOf(",") == 0) {

	// get position of first decimal
	// this prevents multiple decimals from
	// being entered
	var decimal_pos = input_val.indexOf(".");

	// split number by decimal point
	var left_side = input_val.substring(0, decimal_pos);
	var right_side = input_val.substring(decimal_pos);

	// add commas to left side of number
	left_side = formatNumber(left_side);

	// validate right side
	right_side = formatNumber(right_side);
	
	// On blur make sure 2 numbers after decimal
	if (blur === "blur") {
	  //right_side += "00";$4,343,332
	}
	
	// Limit decimal to only 2 digits
	right_side = right_side.substring(0, 2);

	// join number by .
	input_val = "$" + left_side + "." + right_side;

  } else {
	// no decimal entered
	// add commas to number
	// remove all non-digits
	input_val = formatNumber(input_val);
	input_val = "$" + input_val;
	
	// final formatting
	if (blur === "blur") {
	  //input_val += ".00";
	}
  }
  
  // send updated string to input
  if (blur === "blur") {
	  return false;
  } else {
	  
	  input.val(input_val);
  }
  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  //input[0].setSelectionRange(caret_pos, caret_pos);
	} else {
		$('[field_type="currency"]').each(function( index ) {
			let testValue = $(this).val();

			//if ( testValue== "" || testValue== "$" ) {
				
				formatCurrency( $(this) );
			//}
		});
		
		
	}
}

