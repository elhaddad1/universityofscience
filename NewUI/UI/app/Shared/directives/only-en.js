app.directive('onlyEn',  function(){
	// Runs during compile
	return {

		link: function($scope, iElm, iAttrs, controller) {



			iElm.bind('keypress',function(e){

 
     var key;
     if(window.event)  key = window.event.keyCode;     //IE
     else  key = e.which;     //firefox


     if(key >128)  return false;
     else  return true;
  


			})
		}
	};
});