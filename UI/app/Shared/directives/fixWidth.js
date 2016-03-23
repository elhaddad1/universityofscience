app.directive('fixWidth', function() {


	return {
		link: function($scope, elem, attrs) {

			elemParentWidth = elem.parent().width();

			elem.width(elem.width());

			if (angular.isDefined(attrs.responsive)) {

				// console.log('responsive');

				setInterval(function() {


					var parentNewWidth = elem.parent().width();

					if (elemParentWidth != parentNewWidth&&!document.body.classList.contains('modal-open')) {

						elemParentWidth = parentNewWidth
						elem.width(parentNewWidth);

						//For only the scheduler case
						setTimeout(function(){try{$('[kendo-scheduler]').data('kendoScheduler').resize()}catch(e){}}, 100)
						setTimeout(function(){try{$('[kendo-scheduler]').data('kendoScheduler').resize()}catch(e){}}, 500)
						setTimeout(function(){try{$('[kendo-scheduler]').data('kendoScheduler').resize()}catch(e){}}, 1000)
					}


				}, 100)
			}

		}

	}

})