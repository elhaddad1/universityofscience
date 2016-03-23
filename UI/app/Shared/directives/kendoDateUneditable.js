app.directive('kendoDatePicker', function() {

	return {
priority: 20,
		link: function($scope, iElm, iAttrs, controller) {


			iElm[0].setAttribute("autocomplete", "off");
			if (iAttrs.editable == undefined) {


				//to prevent dragging part of date to other to make date invalid

				//and other events
				iElm.on('dragstart cut copy paste', function(e) {
					e.preventDefault();
				});
				//END

				iElm.click(function() {
					if (!iAttrs.readonly) {

						iElm.data('kendoDatePicker').open()
					}
				});
				iElm.bind('keydown keypress', prevent)

				function prevent(event) {
					event.preventDefault()
				}
				iElm.css('cursor', 'pointer')
			}

			if (iAttrs.clear != undefined) {
				iElm.bind('keydown', function() {


					if (event.keyCode == 8 || event.keyCode == 46)
						iElm.val('')


				})

			}


			$scope.addTemplate = function() {

				if (iElm.data('kendoDatePicker')) {

					iElm.data('kendoDatePicker').setOptions({
						month: {
							empty: '<a tabindex="-1" class="k-link" style="color:\\#ccc;cursor:no-drop"  >#=data.value #</a>'
						}
					});


				} else {
					setTimeout($scope.addTemplate, 100);
				}

			}

			$scope.addTemplate();



			// }
		}
	};
});