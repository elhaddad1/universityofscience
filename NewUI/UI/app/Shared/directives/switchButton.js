app.directive('mobileSwitch',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {ngModel:'=',name:'@',id:'@'}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'E', 
		 template: '<div><div class="onoffswitch">    <input type="checkbox" name="{{name}}" class="onoffswitch-checkbox" id="{{id}}" checked ng-model="ngModel"><label class="onoffswitch-label" for="{{id}}">        <span class="onoffswitch-inner"></span>        <span class="onoffswitch-switch"></span>    </label></div><style>.onoffswitch{position:relative;width:100px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.onoffswitch-checkbox{display:none}.onoffswitch-label{display:block;overflow:hidden;cursor:pointer;border:2px solid #FFF;border-radius:20px}.onoffswitch-inner{display:block;width:200%;margin-left:-100%;-moz-transition:margin .3s ease-in 0s;-webkit-transition:margin .3s ease-in 0s;-o-transition:margin .3s ease-in 0s;transition:margin .3s ease-in 0s}.onoffswitch-inner:after,.onoffswitch-inner:before{display:block;float:left;width:50%;height:30px;padding:0;line-height:30px;font-size:14px;font-family:Trebuchet,Arial,sans-serif;font-weight:700;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.onoffswitch-inner:before{content:"Active";padding-left:10px;background-color:#27c24c;border-color:#27c24c;color:#FFF}.onoffswitch-inner:after{content:"Inactive";padding-right:10px;background-color:#f05050;color:#FFF;text-align:right}.onoffswitch-switch{display:block;width:22px;margin:6px;background:#FFF;border:2px solid #FFF;border-radius:20px;position:absolute;top:0;bottom:0;right:66px;-moz-transition:all .3s ease-in 0s;-webkit-transition:all .3s ease-in 0s;-o-transition:all .3s ease-in 0s;transition:all .3s ease-in 0s}.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner{margin-left:0}.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch{right:0}</style></div>',
		
		 replace: true,
	
		
		link: function($scope, iElm, iAttrs, controller) {
			// iElm[0].outerHTML=iElm[0].innerHTML;
			// $compile(iElm[0])($scope)
			iElm.removeAttr('ng-model').removeAttr('name').removeAttr('id');
		}
	};
});