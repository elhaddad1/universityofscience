// lazyload config

//angular.module('app')
//    /**
//   * jQuery plugin config use ui-jq directive , config the js and css files that required
//   * key: function name of the jQuery plugin
//   * value: array of the css js file located
//   */
//  .constant('JQ_CONFIG', {
//      easyPieChart:   [   'Scripts/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
//      sparkline:      [   'Scripts/jquery.sparkline/dist/jquery.sparkline.retina.js'],
//      plot:           [   'Scripts/flot/jquery.flot.js',
//                          'Scripts/flot/jquery.flot.pie.js', 
//                          'Scripts/flot/jquery.flot.resize.js',
//                          'Scripts/flot.tooltip/js/jquery.flot.tooltip.js',
//                          'Scripts/flot.orderbars/js/jquery.flot.orderBars.js',
//                          'Scripts/flot-spline/js/jquery.flot.spline.js'],
//      moment:         [   'Scripts/moment/moment.js'],
//      screenfull:     [   'Scripts/screenfull/dist/screenfull.min.js'],
//      slimScroll:     [   'Scripts/slimscroll/jquery.slimscroll.min.js'],
//      sortable:       [   'Scripts/html5sortable/jquery.sortable.js'],
//      nestable:       [   'Scripts/nestable/jquery.nestable.js',
//                          'Scripts/nestable/jquery.nestable.css'],
//      filestyle:      [   'Scripts/bootstrap-filestyle/src/bootstrap-filestyle.js'],
//      slider:         [   'Scripts/bootstrap-slider/bootstrap-slider.js',
//                          'Scripts/bootstrap-slider/bootstrap-slider.css'],
//      chosen:         [   'Scripts/chosen/chosen.jquery.min.js',
//                          'Scripts/bootstrap-chosen/bootstrap-chosen.css'],
//      TouchSpin:      [   'Scripts/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
//                          'Scripts/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
//      wysiwyg:        [   'Scripts/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
//                          'Scripts/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
//      dataTable:      [   'Scripts/datatables/media/Scripts/jquery.dataTables.min.js',
//                          'Scripts/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
//                          'Scripts/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
//      vectorMap:      [   'Scripts/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
//                          'Scripts/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
//                          'Scripts/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
//                          'Scripts/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
//      footable:       [   'Scripts/footable/dist/footable.all.min.js',
//                          'Scripts/footable/css/footable.core.css'],
//      fullcalendar:   [   'Scripts/moment/moment.js',
//                          'Scripts/fullcalendar/dist/fullcalendar.min.js',
//                          'Scripts/fullcalendar/dist/fullcalendar.css',
//                          'Scripts/fullcalendar/dist/fullcalendar.theme.css'],
//      daterangepicker:[   'Scripts/moment/moment.js',
//                          'Scripts/bootstrap-daterangepicker/daterangepicker.js',
//                          'Scripts/bootstrap-daterangepicker/daterangepicker-bs3.css'],
//      tagsinput:      [   'Scripts/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
//                          'Scripts/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
//    }
//  )
//  // oclazyload config
//  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
//      // We configure ocLazyLoad to use the lib script.js as the async loader
//      $ocLazyLoadProvider.config({
//          debug:  true,
//          events: true,
//          modules: [
//              {
//                  name: 'ngGrid',
//                  files: [
//                      'Scripts/ng-grid/build/ng-grid.min.js',
//                      'Scripts/ng-grid/ng-grid.min.css',
//                      'Scripts/ng-grid/ng-grid.bootstrap.css'
//                  ]
//              },
//              {
//                  name: 'ui.grid',
//                  files: [
//                      'Scripts/angular-ui-grid/ui-grid.min.js',
//                      'Scripts/angular-ui-grid/ui-grid.min.css',
//                      'Scripts/angular-ui-grid/ui-grid.bootstrap.css'
//                  ]
//              },
//              {
//                  name: 'ui.select',
//                  files: [
//                      'Scripts/angular-ui-select/dist/select.min.js',
//                      'Scripts/angular-ui-select/dist/select.min.css'
//                  ]
//              },
//              {
//                  name:'angularFileUpload',
//                  files: [
//                    'Scripts/angular-file-upload/angular-file-upload.min.js'
//                  ]
//              },
//              {
//                  name:'ui.calendar',
//                  files: ['Scripts/angular-ui-calendar/src/calendar.js']
//              },
//              {
//                  name: 'ngImgCrop',
//                  files: [
//                      'Scripts/ngImgCrop/compile/minified/ng-img-crop.js',
//                      'Scripts/ngImgCrop/compile/minified/ng-img-crop.css'
//                  ]
//              },
//              {
//                  name: 'angularBootstrapNavTree',
//                  files: [
//                      'Scripts/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
//                      'Scripts/angular-bootstrap-nav-tree/dist/abn_tree.css'
//                  ]
//              },
//              {
//                  name: 'toaster',
//                  files: [
//                      'Scripts/angularjs-toaster/toaster.js',
//                      'Scripts/angularjs-toaster/toaster.css'
//                  ]
//              },

  

//              {
//                  name: 'textAngular',
//                  files: [
//                      'Scripts/textAngular/dist/textAngular-sanitize.min.js',
//                      'Scripts/textAngular/dist/textAngular.min.js'
//                  ]
//              },
//              {
//                  name: 'vr.directives.slider',
//                  files: [
//                      'Scripts/venturocket-angular-slider/build/angular-slider.min.js',
//                      'Scripts/venturocket-angular-slider/build/angular-slider.css'
//                  ]
//              },
//              {
//                  name: 'com.2fdevs.videogular',
//                  files: [
//                      'Scripts/videogular/videogular.min.js'
//                  ]
//              },
//              {
//                  name: 'com.2fdevs.videogular.plugins.controls',
//                  files: [
//                      'Scripts/videogular-controls/controls.min.js'
//                  ]
//              },
//              {
//                  name: 'com.2fdevs.videogular.plugins.buffering',
//                  files: [
//                      'Scripts/videogular-buffering/buffering.min.js'
//                  ]
//              },
//              {
//                  name: 'com.2fdevs.videogular.plugins.overlayplay',
//                  files: [
//                      'Scripts/videogular-overlay-play/overlay-play.min.js'
//                  ]
//              },
//              {
//                  name: 'com.2fdevs.videogular.plugins.poster',
//                  files: [
//                      'Scripts/videogular-poster/poster.min.js'
//                  ]
//              },
//              {
//                  name: 'com.2fdevs.videogular.plugins.imaads',
//                  files: [
//                      'Scripts/videogular-ima-ads/ima-ads.min.js'
//                  ]
//              },
//              {
//                  name: 'xeditable',
//                  files: [
//                      'Scripts/angular-xeditable/dist/Scripts/xeditable.min.js',
//                      'Scripts/angular-xeditable/dist/css/xeditable.css'
//                  ]
//              },
//              {
//                  name: 'smart-table',
//                  files: [
//                      'Scripts/angular-smart-table/dist/smart-table.min.js'
//                  ]
//              }
//          ]
//      });
//  }])
//;
