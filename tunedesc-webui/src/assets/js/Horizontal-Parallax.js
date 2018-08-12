$(function() { 
// - horizontal scrolling effect
/* this parameter is responsive need think about automatisation getting of wight*/
    var max_scroll_length = 0;//4000;// equal 6 photo 780x638
    document.onmousemove = function(e) {
        max_scroll_length = ($("div.child").width() * ($("div.child").length - 1));
};
    var counter_ = 0;
    var scroll_speed = 60;
    var elem = document.getElementById('container-x');

    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        // old action name
        elem.addEventListener("mousewheel", onWheel);
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", onWheel);
    } 
    
    function onWheel(e) {
      e = e || window.event;    
   var delta = e.deltaY || e.detail || e.wheelDelta;
    if(delta == 100 && counter_ < max_scroll_length){
        $("#content").scrollLeft((counter_ += scroll_speed));           
      }
    if(delta == -100 && counter_ > 0){
          $("#content").scrollLeft((counter_ -= scroll_speed));        
      }
    if(counter_ > 0 && counter_ < max_scroll_length){
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      }
    }
 /* Click element function */    
    var i = $("div.child").width();
    $("div.child").click(function(event) {       
      var width_obj = $(this).width();   
        if(i < (max_scroll_length + 200)){
            $("#content").scrollLeft(i); 
        // (width_obj+6) width correction
            counter_ = i;
             i += (width_obj+6);            
         }else{             
             $("#content").scrollLeft(0); 
             i = width_obj;
              counter_ = 0;
         }
	});    	    				
});