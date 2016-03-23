app.directive('depTree', ['OrganizationUnitService', '$compile', function(OrganizationUnitService, $compile) {
	// Runs during compile
	return {
		scope: {
			ngModel: '=',
			treeControl: '=',
			treeData: '=',
			/*
			 * Type: function()
			 * Will be called when selected changed
			 * */
			nodeChanged: '=?'

		},

		template: '<input  kendo-drop-down-list="kendoDropDown"  class="w-full-imp borderMe treeKDrop" ng-model="kendoModel" k-options="kendoOptions" k-data-source="kendoDataSource"  k-template="\' \'"  k-option-Label="\'{{\'Tree.department\'|translate}}\'" k-header-template=\'tree\'  /><style>.abn-tree+div+ul.k-list.k-reset{display:none}.fa.fa-file-o.myleaf{opacity:0}</style>',

		link: function($scope, iElm, iAttrs, controller) {


			function fillData(data) {


				data.forEach(function(item) {
					item.label = item.EnName;
				})
				$scope.my_data = groupBy(data, ['ParentID'])[0];

			}



			if (!angular.isDefined(iAttrs.treeData)) {

				OrganizationUnitService.GetOrganizationUnits().success(function(data) {
					fillData(data)
				})

			} else {

				$scope.$watch('treeData', function(data) {
					fillData(data)
				});
			}

			// var changed;
			var lastSelectedBranch;
			$scope.my_tree_handler = function(branch) {

				$scope.treeControl.selectedBranch = branch;


				console.log('change');

				lastSelectedBranch = branch;
				$scope.kendoDropDown.close()
				$scope.ngModel = $scope.getAllIds(branch);

				$scope.kendoDataSource = [branch.label];
				$scope.kendoModel = branch.label;


				//Added to fix error of chosing the same after clearing
				$scope.kendoDropDown.select(1)
					//END

				//$scope.valueTemplate =':P';
				// changed = false;
				if (typeof $scope.nodeChanged == 'function') {
					$scope.nodeChanged($scope.ngModel);
				}
			}
			var isOpenedBefore = false;
			$scope.kendoOptions = {
				filter: 'containes',

				open: function() {

					//bind search event to kendo filter input first time only
					if (!isOpenedBefore) {

						$scope.treeControl.collapse_all();


						//I have override the search method of that control to prevent script error and loading icon
						$scope.kendoDropDown._search = function() {};


						//stopScroll($scope.kendoDropDown.ul);
						$scope.kendoDropDown.filterInput.css('top', '-2px');
						$scope.kendoDropDown.filterInput.bind('keyup', function() {

							$scope.labelContains($scope.treeControl.get_first_branch(), $scope.kendoDropDown.filterInput.val());
						})
						isOpenedBefore = true;
					}

				},

				change: function(e) {
					$scope.treeControl.clear();
					if (typeof $scope.nodeChanged == 'function') {
						$scope.nodeChanged([]);
					}
				},
				close: function() {
					//Clear search and collapse all tree nodes expect selected
					$scope.clearClass();
					$scope.kendoDropDown.filterInput.val('');
					$scope.treeControl.collapse_all();

					if (lastSelectedBranch)
						$scope.treeControl.expand_all_parents(lastSelectedBranch);

					$scope.$apply();
				}
			}


			$scope.clearClass = function() {


				angular.element('.treeSearchCandidate').removeClass('treeSearchCandidate');
			}

			// $scope.$watch('kendoModel', function(newValue, oldValue) {

			// 	// if (!$scope.kendoModel && !changed) {
			// 	// 	$scope.ngModel = null;
			// 	// 	changed = true;
			// 	// }


			// 	//console.log($scope.kendoModel);
			// });



			$scope.getAllIds = function(branch) {
				var selectedIDs = [];
				$scope.iterate(branch, selectedIDs);
				return selectedIDs;
			}

			var cleared = false;

			$scope.labelContains = function(branch, searchValue) {
				if (searchValue.length > 0 && searchValue.replace(/ /g, '').length > 0) {


					// $scope.treeControl.expand_all();

					//$scope.treeControl.collapse_all();

					var list = [];
					// $scope.search($scope.treeControl.get_first_branch(), list, searchValue);					
					// list.forEach(function(item){
					// 	item.search=true;
					// })

					$scope.treeControl.scope.tree_rows.forEach(function(row) {
						// row.result = false;
						row.branch.result = false;
					});


					searchValue = searchValue.toLowerCase();
					$scope.treeControl.scope.tree_rows.forEach(function(row) {

						var itemLabel = row.label.toLowerCase();

						if (itemLabel.indexOf(searchValue) != -1) {
							// row.result=true;
							// row.branch.selected=true;
							row.branch.result = true;
							list.push(row);

						}

					});

					// if(list.length!=0){
					$scope.treeControl.scope.tree_rows.forEach(function(row,key) {
						if (key!=0&&row.branch.expanded) {
							$scope.treeControl.collapse_all();
							return;
						}
					})

					// }
					list.forEach(function(row) {
						$scope.treeControl.expand_all_parents(row.branch)
					})


					// $scope.$apply()

					// angular.element('.abn-tree li a>span.treeSearchCandidate').removeClass('treeSearchCandidate');


					// var resultBranches=[];

					// angular.element('.abn-tree li a>span').each(function(e, elem) {
					// 	angular.element(elem).parent().removeClass('treeSearchCandidate');

					// 	if (angular.element(elem).html().toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {

					// 		angular.element(elem).parent().addClass('treeSearchCandidate');
					// 		// console.log(angular.element(elem).parent().scope().row.branch);
					// 		// resultBranches.push(angular.element(elem).parent().scope().row.branch);
					// 	}

					// });

					// 					$scope.treeControl.collapse_all();

					// 					console.log(resultBranches);
					// 					resultBranches.forEach(function(branch) {
					// try{

					// 								 $scope.treeControl.expand_all_parents(branch);
					// }catch(e){}

					// 					})
					// 					console.log(resultBranches);

					cleared = false;

				} else {
					if (!cleared) {


						$scope.treeControl.scope.tree_rows.forEach(function(row) {
							// row.result = false;
							row.branch.result = false;
						});


						$scope.clearClass();
						$scope.treeControl.collapse_all();
						$scope.kendoDropDown.refresh();

						cleared = true;
					}

				}

				// if (branch) {

				// // return branch.ID;
				// //sera
				// // if (!angular.isDefined(id)) {
				// // 	list.push(branch.ID)
				// // } else {
				// 	if (branch.label.toLowerCase().indexOf(searchValue)!=-1){
				// 		$scope.treeControl.select_branch(branch)
				// 		return;
				// 	}
				// // }
				// if (branch.children != undefined && branch.children.length > 0) {
				// 	$.each(branch.children, function(index, value) {
				// 		$scope.labelContaines(value,searchValue);
				// 	});

				// }
				// }


				$scope.$apply();

			}


			$scope.iterate = function(branch, list, id) {
				if (branch) {

					// return branch.ID;
					//sera
					if (!angular.isDefined(id)) {
						list.push(branch.ID)
					} else {
						if (branch.ID == id)
							$scope.treeControl.select_branch(branch)
					}
					if (branch.children != undefined && branch.children.length > 0) {
						$.each(branch.children, function(index, value) {
							$scope.iterate(value, list, id);
						});

					}
				}

			}

			// $scope.search = function(branch, list, label) {
			// 	if (branch) {

			// 		// return branch.ID;
			// 		//sera
			// 		if (label && branch.label.toLowerCase().indexOf(label.toLowerCase()) != -1) {

			// 			// $scope.treeControl.select_branch(branch)
			// 			list.push(branch);
			// 		}
			// 		if (branch.children != undefined && branch.children.length > 0) {
			// 			$.each(branch.children, function(index, value) {
			// 				$scope.search(value, list, label);
			// 			});

			// 		}
			// 	}

			// }



			$scope.isApplying = function() {

				return $scope.$root.$$phase == '$apply' || $scope.$root.$$phase == '$digest'
			}


			$scope.treeControl = {
				selectId: function(id) {

					$scope.iterate($scope.treeControl.get_first_branch(), null, id);


				},

				clear: function() {

					if (lastSelectedBranch) {

						lastSelectedBranch.selected = false;
						//console.log(e.sender.value);

						$scope.ngModel = null;
						$scope.kendoDropDown.select(-1);

						lastSelectedBranch = null;
						$scope.treeControl.collapse_all();

						if (!$scope.isApplying())
							$scope.$apply();

					}



				},
				showLegalEntity:angular.isDefined(iAttrs.showLegalEntity)

			}



			$scope.tree = '<div class="dropdown-header text-center treeStatus" ng-if="!(my_data&&my_data.length>0)" ><div class="fs16" >{{MP.nodata|translate}}</div></div><script>var elem=angular.element(\'.treeStatus\'); var s=angular.element(\'.treeKDrop\').scope();s.compile(elem,s)</script>' +

				'<abn-tree tree-data="my_data"  tree-control="treeControl" label="EnName" on-select="my_tree_handler(branch)"  expand-level="2" initial-selection="Granny Smith" icon-leaf="fa fa-file-o myleaf" icon-expand="fa fa-caret-right" icon-collapse="fa fa-caret-down"></abn-tree>';



			// $scope.searchInput = '<span class="k-list-filter"><input class="k-textbox" role="listbox" aria-haspopup="true" aria-expanded="false" aria-owns="" tabindex="0" aria-disabled="false" aria-readonly="false" aria-busy="false"><span unselectable="on" class="k-icon k-i-search">select</span></span>'



			// Groups a flat array into a tree. 
			// "data" is the flat array.
			// "keys" is an array of properties to group on.
			window.groupBy = function(data, keys) {

				if (keys.length == 0) return data;

				// The current key to perform the grouping on:
				var key = keys[0];

				// Loop through the data and construct buckets for
				// all of the unique keys:
				var groups = {};
				for (var i = 0; i < data.length; i++) {
					var row = data[i];
					var groupValue = row[key];

					if (groups[groupValue] == undefined) {
						groups[groupValue] = new Array();
					}

					groups[groupValue].push(row);
				}

				// Remove the first element from the groups array:
				keys.reverse();
				keys.pop()
				keys.reverse();



				for (var d in groups) {

					var parent = $.grep(data, function(e) {
						return e.ID == groups[d][0].ParentID;
					})[0];

					if (parent) {

						parent.children = groups[d];
						groups[d] = parent;

					}


				}


				// If there are no more keys left, we're done:
				if (keys.length == 0) return groups;

				// Otherwise, handle further groupings:
				for (var group in groups) {
					groups[group] = groupBy(groups[group], keys.slice());
				}



				return groups;
			}


			$scope.compile = function(element, myscope) {

				$compile(element)(myscope);

			}



		}
	};
}]);



//Mutli



// app.directive('depMultiTree', function(OrganizationUnitService) {
// 	// Runs during compile
// 	return {
// 		scope: {
// 			ngModel: '=',
// 			treeControl: '=',
// 			treeData: '=',
// 		    /*
//              * Type: function()
//              * Will be called when selected changed
//              * */
// 			nodeChanged: '=?'

// 		},

// 		template: '<input   kendo-drop-down-list="kendoDropDown"  class="w-full-imp borderMe " ng-model="kendoModel" k-options="kendoOptions" k-data-source="kendoDataSource"  k-template="\' \'"  k-option-Label="\'{{\'HR.tree.department\'|translate}}\'" k-header-template=\'tree\'  /><style>.abn-tree+div+ul.k-list.k-reset{display:none}.fa.fa-file-o.myleaf{opacity:0}</style>',

// 		link: function($scope, iElm, iAttrs, controller) {

// console.log('multi')
// 			function fillData(data) {


// 				data.forEach(function(item) {
// 					item.label = item.EnName;
// 				})
// 				$scope.my_data = groupBy(data, ['ParentID'])[0];
// 			}



// 			if (!angular.isDefined(iAttrs.treeData)) {

// 				OrganizationUnitService.GetOrganizationUnits().success(function(data) {
// fillData(data) 
// 				})

// 			} else {

// 				$scope.$watch('treeData', function(data) {
// fillData(data) 
// 				});
// 			}

// 			// var changed;
// 			var lastSelectedBranch;
// 			$scope.my_tree_handler = function(branch) {
// 			    console.log('change');
// 				lastSelectedBranch = branch;
// 				$scope.kendoDropDown.close()
// 				$scope.ngModel = $scope.getAllIds(branch);

// 				$scope.kendoDataSource = [branch.label];
// 				$scope.kendoModel = branch.label;
// 				//$scope.valueTemplate =':P';
// 			    // changed = false;
// 				if (typeof $scope.nodeChanged == 'function') {
// 				    $scope.nodeChanged($scope.ngModel);
// 				}
// 			}
// 			var isOpenedBefore = false;
// 			$scope.kendoOptions = {
// 				autoClose:false,
// 				highlightFirst:false,
// 				filter: 'containes',

// 				open: function() {

// 					//bind search event to kendo filter input first time only
// 					if (!isOpenedBefore) {
// 						//stopScroll($scope.kendoDropDown.ul);
// 						$scope.kendoDropDown.filterInput.bind('keyup', function() {

// 							$scope.labelContains($scope.treeControl.get_first_branch(), $scope.kendoDropDown.filterInput.val());
// 						})
// 						isOpenedBefore = true;
// 					}

// 				},

// 				change: function(e) {
// 				    $scope.treeControl.clear();
// 				    if (typeof $scope.nodeChanged == 'function') {
// 				        $scope.nodeChanged($scope.ngModel);
// 				    }
// 				},
// 				close: function() {
// 					angular.element('.abn-tree li a>span.treeSearchCandidate').removeClass('treeSearchCandidate');
// 				}
// 			}


// 			// $scope.$watch('kendoModel', function(newValue, oldValue) {

// 			// 	// if (!$scope.kendoModel && !changed) {
// 			// 	// 	$scope.ngModel = null;
// 			// 	// 	changed = true;
// 			// 	// }


// 			// 	//console.log($scope.kendoModel);
// 			// });



// 			$scope.getAllIds = function(branch) {
// 				var selectedIDs = [];
// 				$scope.iterate(branch, selectedIDs);
// 				return selectedIDs;
// 			}

// 			$scope.labelContains = function(branch, searchValue) {

// 				$scope.treeControl.expand_all();
// 				$scope.kendoDropDown.refresh();



// 				// angular.element('.abn-tree li a>span.treeSearchCandidate').removeClass('treeSearchCandidate');



// 				angular.element('.abn-tree li a>span').each(function(e, elem) {
// 					angular.element(elem).parent().removeClass('treeSearchCandidate');

// 					if (searchValue.length > 0 && angular.element(elem).html().toLowerCase().indexOf(searchValue) != -1) {

// 						angular.element(elem).parent().addClass('treeSearchCandidate');
// 					}

// 				});

// 				// if (branch) {

// 				// // return branch.ID;
// 				// //sera
// 				// // if (!angular.isDefined(id)) {
// 				// // 	list.push(branch.ID)
// 				// // } else {
// 				// 	if (branch.label.toLowerCase().indexOf(searchValue)!=-1){
// 				// 		$scope.treeControl.select_branch(branch)
// 				// 		return;
// 				// 	}
// 				// // }
// 				// if (branch.children != undefined && branch.children.length > 0) {
// 				// 	$.each(branch.children, function(index, value) {
// 				// 		$scope.labelContaines(value,searchValue);
// 				// 	});

// 				// }
// 				// }

// 			}


// 			$scope.iterate = function(branch, list, id) {
// 				if (branch) {

// 					// return branch.ID;
// 					//sera
// 					if (!angular.isDefined(id)) {
// 						list.push(branch.ID)
// 					} else {
// 						if (branch.ID == id)
// 							$scope.treeControl.select_branch(branch)
// 					}
// 					if (branch.children != undefined && branch.children.length > 0) {
// 						$.each(branch.children, function(index, value) {
// 							$scope.iterate(value, list, id);
// 						});

// 					}
// 				}

// 			}



// $scope.isApplying=function(){

// 	return $scope.$root.$$phase == '$apply' || $scope.$root.$$phase == '$digest'
// }


// 			$scope.treeControl = {
// 				selectId: function(id) {

// 					$scope.iterate($scope.treeControl.get_first_branch(), null, id);


// 				},

// 				clear: function() {

// 					if (lastSelectedBranch) {

// 						lastSelectedBranch.selected = false;

// 						//console.log(e.sender.value);

// 						$scope.ngModel = null;
// 						$scope.kendoDropDown.select(-1);

// 						if(!$scope.isApplying())
// 						$scope.$apply();

// 				}



// 			}

// 		}

// 			$scope.tree = '<abn-multi-tree tree-data="my_data"  tree-control="treeControl" label="EnName" on-select="my_tree_handler(branch)"  expand-level="2" initial-selection="Granny Smith" icon-leaf="fa fa-file-o myleaf" icon-expand="fa fa-plus" icon-collapse="fa fa-minus"></abn-multi-tree>';



// 		// $scope.searchInput = '<span class="k-list-filter"><input class="k-textbox" role="listbox" aria-haspopup="true" aria-expanded="false" aria-owns="" tabindex="0" aria-disabled="false" aria-readonly="false" aria-busy="false"><span unselectable="on" class="k-icon k-i-search">select</span></span>'



// 		// Groups a flat array into a tree. 
// 		// "data" is the flat array.
// 		// "keys" is an array of properties to group on.
// 		window.groupBy = function(data, keys) {

// 			if (keys.length == 0) return data;

// 			// The current key to perform the grouping on:
// 			var key = keys[0];

// 			// Loop through the data and construct buckets for
// 			// all of the unique keys:
// 			var groups = {};
// 			for (var i = 0; i < data.length; i++) {
// 				var row = data[i];
// 				var groupValue = row[key];

// 				if (groups[groupValue] == undefined) {
// 					groups[groupValue] = new Array();
// 				}

// 				groups[groupValue].push(row);
// 			}

// 			// Remove the first element from the groups array:
// 			keys.reverse();
// 			keys.pop()
// 			keys.reverse();



// 			for (var d in groups) {

// 				var parent = $.grep(data, function(e) {
// 					return e.ID == groups[d][0].ParentID;
// 				})[0];

// 				if (parent) {

// 					parent.children = groups[d];
// 					groups[d] = parent;

// 				}


// 			}


// 			// If there are no more keys left, we're done:
// 			if (keys.length == 0) return groups;

// 			// Otherwise, handle further groupings:
// 			for (var group in groups) {
// 				groups[group] = groupBy(groups[group], keys.slice());
// 			}



// 			return groups;
// 		}



// 	}
// };
// });