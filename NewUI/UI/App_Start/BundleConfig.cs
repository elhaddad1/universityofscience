using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace ADS.UI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery/dist/jquery.min.js"));


            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular/angular.js",
                "~/Scripts/angular-animate/angular-animate.js",
                "~/Scripts/angular-cookies/angular-cookies.js",
                "~/Scripts/angular-resource/angular-resource.js",
                "~/Scripts/angular-sanitize/angular-sanitize.js",
                "~/Scripts/angular-touch/angular-touch.js",
                "~/Scripts/angular-ui-router/release/angular-ui-router.js",
                "~/Scripts/ngstorage/ngStorage.js",
                "~/Scripts/angular-ui-utils/ui-utils.js",
                "~/Scripts/angular-bootstrap/ui-bootstrap-tpls.js",
                   "~/Scripts/bootstrap.js",
                "~/Scripts/bsDuallistbox.js",
                "~/Scripts/jquery.bootstrap-duallistbox.js",
      
                "~/Scripts/validation/angular-validation-summary.js",
                "~/Scripts/moment/moment.js",
                "~/Scripts/moment/locale/ar-sa.js",
                "~/Scripts/FileSaver.js",
                 "~/Scripts/jasmine/jasmine.js",
                   "~/Scripts/jasmine/jasmine-html.js",
                     "~/Scripts/jasmine/boot.js"


                ));

            bundles.Add(new ScriptBundle("~/bundles/angulartranslate").Include(
                "~/Scripts/angular-translate/angular-translate.js",
                "~/Scripts/angular-translate-loader-static-files/angular-translate-loader-static-files.js",
                "~/Scripts/angular-translate-storage-cookie/angular-translate-storage-cookie.js",
                "~/Scripts/angular-translate-storage-local/angular-translate-storage-local.js",
                "~/Scripts/angular-translate-loader-partial-master/angular-translate-loader-partial.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/kendo").Include(
                "~/Scripts/jszip.min.js",
                "~/Scripts/Kendo/kendo.all.min.js",
                "~/Scripts/Kendo/StopScroll.js",
                "~/Scripts/kendo.culture.ar-EG.min.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/common").Include(
                "~/app/Core/enums.js",
                "~/app/Core/commonURLs.js",
                "~/app/Services/clientAgentService.js",
                "~/app/Services/loginService.js",

                "~/Scripts/variables.js"
                //  "~/app/Services/CommonService.js"
                ));


            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/app/app.js",
                "~/app/config.js",
                //"~/app/config.lazyload.js",
                "~/app/Shared/Dashboard.config.route.js",
                "~/app/OrganizationManagement/OrganizationManagement.config.route.js",
                "~/app/Administration/Administration.config.route.js",
                "~/app/TimeManagement/TimeManagement.config.route.js",
             "~/app/PayRollManagement/PayRollManagement.config.route.js",
                "~/app/Setting/Setting.config.route.js",
                "~/app/config.router.js",
                "~/Scripts/genie.js",
                "~/Scripts/uxGenie.js",
                "~/app/main.js",
                "~/Scripts/ui-load.js",
                "~/Scripts/angularjs-toaster/toaster.js",
                "~/Scripts/filters/fromNow.js",
                "~/Scripts/directives/setnganimate.js",
                "~/Scripts/directives/ui-butterbar.js",
                "~/Scripts/directives/ui-focus.js",
               // "~/Scripts/directives/ui-fullscreen.js",
             //   "~/Scripts/directives/ui-jq.js",
                "~/Scripts/directives/ui-module.js",
                "~/Scripts/directives/ui-nav.js",
                "~/Scripts/directives/ui-scroll.js",
                "~/Scripts/directives/ui-navTree.js",
                "~/Scripts/directives/ui-shift.js",
                "~/Scripts/directives/ui-toggleclass.js",
                "~/Scripts/directives/ui-uiBreadcrumbs.js",
                "~/Scripts/directives/datepickerpopup.js",
                "~/app/Shared/nav.js",
           
                "~/Scripts/controllers/schedulepersonal.js",
                "~/app/Shared/locale/kendoTranslation.js"                
                
                ));

            bundles.Add(new ScriptBundle("~/bundles/directives").Include(
                         "~/app/Shared/directives/confirmationMessage.js",
                          "~/app/Shared/directives/fileUpload.js",
                          "~/app/Shared/directives/fileUploader.js",
                          "~/app/Shared/directives/scroll.js",
                          "~/app/Shared/directives/customValidation.js",
                          "~/app/Shared/directives/switchButton.js",
                          "~/app/Shared/directives/only-en.js",
                          "~/app/Shared/directives/only-ar.js",
                          "~/app/Shared/directives/kendoDateUneditable.js",
                          "~/app/Shared/directives/fileread.js",
                          "~/app/Shared/directives/ngVisible.js",
                          "~/app/Shared/directives/abnTree/abn_tree_directive.js",
                          "~/app/Shared/directives/abnTree/treeDirective.js",
                     "~/Scripts/MultipleDatePicker/dist/multipleDatePicker.min.js",
                          "~/app/Shared/directives/makeHeightEqual.js",
                          "~/app/Shared/directives/kendoTreeView.js",
                          "~/app/Shared/directives/onFilter.js",
                          "~/app/Shared/directives/fixWidth.js"
                          //,"~/Scripts/quantumui-all.min.js"

                         ));

            bundles.Add(new StyleBundle("~/Content/Style").Include(
                 "~/Content/css/bootstrap.css",
                 "~/Content/css/animate.css",
                 "~/Content/css/font-awesome.min.css",
                 "~/Content/css/font.css",
                 "~/Content/css/app.css",
                 "~/Content/css/angular-validation-summary.css",
                 "~/Content/css/simple-line-icons.css",
                 "~/Content/css/kendo.common.min.css",
                 "~/Content/css/kendo.common-material.min.css",
                 "~/Content/css/kendo.material.min.css",
                 "~/Content/css/bootstrap-duallistbox.css",
     
                "~/Content/css/multiple-date-picker.css",
                 "~/Content/css/abnTree/abn_tree.css",
                 "~/Content/css/kendo.common-rtl.min.css",
                 "~/Content/css/bootstrap-rtl.css",
                 "~/Scripts/angularjs-toaster/toaster.css"

                 ));


              //Tweak to load all translation files before loading angular-translate module
              // to fix unproducable bug that rarley the translation labels load by key not label 
            bundles.Add(new StyleBundle("~/Content/translateFilesTweak").Include(
                  "~/app/Shared/locale/en.js",
                  "~/app/Shared/locale/ar.js",
                  "~/app/TimeManagement/locale/en.js",
                  "~/app/TimeManagement/locale/ar.js",
                  "~/app/OrganizationManagement/locale/en.js",
                  "~/app/OrganizationManagement/locale/ar.js",
                  "~/app/Administration/locale/en.js",
                  "~/app/Administration/locale/ar.js",
                  "~/app/PayRollManagement/locale/en.js",
                  "~/app/PayRollManagement/locale/ar.js"
              ));
              //End

            bundles.Add(new StyleBundle("~/Content/jasmineCss").Include(
                 "~/Content/css/jasmine/jasmine.css"
                ));

            bundles.Add(new ScriptBundle("~/bundles/jasmineJs").Include(
               "~/Scripts/jasmine/jasmine.js",
               "~/Scripts/jasmine/jasmine-html.js",
                "~/Scripts/jasmine/boot.js",
                "~/Scripts/jasmine/jasmineTests.js"
             ));

            BundleTable.EnableOptimizations = false;
        }
    }
}
