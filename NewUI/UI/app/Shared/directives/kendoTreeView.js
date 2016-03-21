app.directive('kendoTreeView', function (OrganizationUnitService, $timeout) {
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function ($scope, iElm, iAttrs, controller) {



            if (!angular.isDefined(iAttrs.treeData)) {

                OrganizationUnitService.GetOrganizationUnits().success(function (data) {
                    defineData(data)
                })

            } else {

                $scope.$watch('treeData', function (data) {
                    defineData(data)
                });
            }



            function defineData(data) {
                var boundedBefore = false;
                if (iElm.data('kendoTreeView')) {

                    data.forEach(function (item) {
                        item.text = item.EnName;
                    })

                    var tree = iElm.data('kendoTreeView');
                    tree.setDataSource(groupTreeBy(data, ['ParentID'])[0])

                    tree.setOptions({
                        check:function(){console.log(arguments);},
                        //template:';;',
                        autoBind:true,
                        dataBound: function () {
                            //adding checkbox to root level
                            // if (!boundedBefore) {
                            //     $('<span class="k-checkbox" role="presentation"><input type="checkbox"></span>').insertAfter(tree.root.find('.k-top:eq(0) .k-icon'));
                            //     boundedBefore = true;
                            // }
                        },
                        //dataTextField: 'EnName',
                        //  template:"#= item.text # (#= item.inStock #)",
                        checkboxes: {
                            checkChildren: true,
                            template: "<input type='checkbox' #= item.checked ? 'checked' : '' # >"
                        },
                        loadOnDemand: false,
                        check: function (e) {


                            //Expand All Levels
                            // this.expandRoot = e.node;

                            // this.expand($(this.expandRoot).find(".k-item").addBack());
                            //END


                            getAllChecked();
                        },
                        //  dragAndDrop: true,

                        select: function (e) {
                            // `this` refers to the TreeView object
                            var dataItem = this.dataItem(e.node);

                            console.log("Selected node with id=" + dataItem.ID);
                        }



                    })

// $scope.$on('kendoWidgetCreated',function(e,w){

// if(w==tree){

//     console.log('loaded');
// }

// })

                    function getAllChecked() {


                        var checkedNodes = [];

                        function gatherStates(nodes) {
                            for (var i = 0; i < nodes.length; i++) {
                                if (nodes[i].checked) {
                                    checkedNodes.push(nodes[i].ID);
                                }

                                if (nodes[i].hasChildren) {
                                    gatherStates(nodes[i].children.view());
                                }
                            }
                        }
                        gatherStates(tree.dataSource.view());

                        console.log(checkedNodes);
                        return checkedNodes;

                    }



                    console.log('loaded');

                                                // if (!boundedBefore) {
                                $('<span class="k-checkbox" role="presentation"><input type="checkbox"></span>').insertAfter(tree.root.find('.k-top:eq(0) .k-icon'));
                                // boundedBefore = true;
                            // }

                } else {
                    console.log('not loaded');
                    $timeout(function () {
                        defineData(data)
                    }, 100);
                }
            }



            // defineData();



            var groupTreeBy = function (data, keys) {

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

                    var parent = $.grep(data, function (e) {
                        return e.ID == groups[d][0].ParentID;
                    })[0];

                    if (parent) {

                        parent.items = groups[d];
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



        }
    }


});


