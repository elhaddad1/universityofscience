var summary = angular.module('ai.validate.summary', []);


/* VALIDATION SUMMARY
***************************************/

summary.directive("aiValidateSummary", ['$compile', function ($compile) {


    return {
        restrict: 'A',
        require: '^form',
        template: '<ul class="ai-validate-summary"><li ng-repeat="(expression,message) in validationMessages">{{message}}</li></ul>',
        link: function (scope, element, attrs, ctrl) {

            var defaults, options, form, formName, inputs;

            defaults = {
                summary: true,
                selector: '.ai-validate',
                focusDelay: true,
                template: '<span class="ai-validate-message"></span>',          
                validationProperties: {
                    'required': '{{name}} is required.',
                    'ng-required': '{{name}} is required.',
                    'minlength': '{{name}} must be at least {{value}} characters in length.',
                    'ng-minlength': '{{name}} must be at least {{value}} characters in length.',
                    'maxlength': '{{name}} must not exceed {{value}} characters in length.',
                    'ng-maxlength': '{{name}} must not exceed {{value}} characters in length.',
                    'ng-pattern': '{{name}} must match the pattern {{value}}.',
                    'email': '{{name}} must be a valid email address.',
                    'tel': '{{name}} must be a valid phone number.',
                    'url': '{{name}} must be a valid url web address.',
                    'date': '{{name}} must be a valid date.',
                    'datetime': '{{name}} must be a valid date/time value.',
                    'time': '{{name}} must be a valid time.'           
                },
                validateOnDirty: true,
                validateOnSubmit: true,
                pristineOnReset: true,
                showOnSubmit: true,
                titleCase: true
            };

            scope.showSummary = false;
            scope.validationMessages = {};

            /* determines if the attribute is handled by the directive */
            function hasValidation(attribute) {
                if (options.validationProperties[attribute]) return true;
                return false;
            }

            /* converts the field name to property casing with spaces */
            function toTitlecase(val) {
                if (options.titleCase) {
                    val = val.replace(/([a-z])([A-Z])/g, '$1 $2');
                    val = val.replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3');
                    val = val.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2");
                    return val.charAt(0).toUpperCase() + val.slice(1);
                }
                return val;
            }

            function buildMessage(attrName, fieldName, value) {

                var msg;
                fieldName = toTitlecase(fieldName);

                /* replace "name" with the normalized field name */
                msg = options.validationProperties[attrName].replace(/{{name}}/g, fieldName);
                if (value) msg = msg.replace(/{{value}}/g, value || '');

                return msg;

            }

            function buildExpression(formName, fieldName, attrName, msg) {

                var exp, elem, msgTemplate, trigger;

                trigger = 'ng-show';      

                msgTemplate = '{{form}}.{{name}}.$error.{{attribute}}';

                if (options.validateOnDirty) msgTemplate += ' && {{form}}.{{name}}.$dirty';

                if (options.validateOnSubmit) msgTemplate += ' || {{form}}.submitted && {{form}}.{{name}}.$error.{{attribute}}';

                /* trim out ng- prefix for ng attributes */
                attrName = attrName.replace('ng-', '');

                /* the validation expression used with by default ng-show */
                exp = msgTemplate.replace(/{{form}}/g, formName).replace(/{{name}}/g, fieldName).replace(/{{attribute}}/g, attrName);;

                /* add the expression to the new element via template */
                elem = $(options.template).attr(trigger, exp).text(msg);

                /* add directive to wire up to summary */
                if (options.summary) elem.attr('ai-validate-message', '');

                /* get the html content of self */
                elem = $("<div />").append(elem).html();

                return elem;
            }            

            ctrl.validateSummary = function (exp, msg) {

                scope.$watch(function () { return scope.$eval(exp); }, function (newVal, oldVal) {
              
                    if (newVal === undefined) return;

                    /* check if the validation exists */
                    var exists = scope.validationMessages.hasOwnProperty(exp);

                    /* add message if doesn't exist */
                    if (!exists && newVal) scope.validationMessages[exp] = msg;

                    /* remmove messages no longer invalid */
                    if (exists && !newVal) delete scope.validationMessages[exp];

                    if ($.isEmptyObject(scope.validationMessages)) {
                        scope.showSummary = false;
                    } else {
                        if (ctrl.submitted) setState('dirty');
                        if (options.summary) scope.showSummary = true;
                    }

                });
            }

            function setState(state) {
                //form.find(options.selector).each(function () {
                inputs.each(function () {
                    var name = $(this).attr('name');
                    if (name) {
                        if (state === 'dirty') {
                            ctrl[name].$pristine = false;
                            ctrl[name].$dirty = true;
                            ctrl.reset = false;
                            $(this).removeClass('ng-pristine').addClass('ng-dirty');
                        } else {
                            ctrl[name].$pristine = true;
                            ctrl[name].$dirty = false;
                            scope.showSummary = false;
                            ctrl.submitted = false;
                            $(this).addClass('ng-pristine').removeClass('ng-dirty');
                        }
                    }
                });
            }

            /* watch form submit events */
            scope.$watch(function () {
                return ctrl.submitted || false;
            }, function (newVal, oldVal) {
                if (newVal) setState('dirty');
            });

            /* watch form reset events */
            scope.$watch(function () {
                return ctrl.reset || false;
            }, function (newVal, oldVal) {
                if (newVal) setState('pristine');
                ctrl.reset = false;
            });

            /* init the directive */
            function init() {

                /* find the form */
                form = $(element).parents('form');

                /* can't continue without the form */
                if (!form || !form.attr('name')) return;

                /* get the name of the parent form */
                formName = form.attr('name');

                /* get all the inputs via selector */
                inputs = form.find(options.selector).each(function () {

                    var elem = $(this)
                      , fieldName = elem.prop('name') || null /* name attribute is required make sure we have it.*/
                      , valMessages = []
                      , type
                      , msgElem
                      , msg;

                    if (!fieldName) return;

                    type = elem.prop('type');

                    if (!elem.hasClass('ai-validate')) elem.addClass('ai-validate');

                    /* delay validation display while focused */
                    if (options.focusDelay) {
                        elem.on('focus', function () {                            
                            for(var i = 0; i < valMessages.length; i++){
                                var vm = valMessages[i];
                                vm.addClass('ai-validate-message-focus');
                            }     
                        });
                        elem.on('blur', function () {                      
                            for (var i = 0; i < valMessages.length; i++){
                                var vm = valMessages[i];
                                vm.removeClass('ai-validate-message-focus');
                            }     
                        });
                     }

                    /* check validation tag types */
                    if (hasValidation(type)) {

                        msg = buildMessage(type, fieldName, null);

                        msgElem = buildExpression(formName, fieldName, type, msg, true);

                        /* compile */
                        msgElem = $(msgElem);
                        if (!msgElem.hasClass('ai-validate-message')) msgElem.addClass('ai-validate-message');
                        if (options.summary) msgElem.addClass('summary');
                        else msgElem.removeClass('summary');

                        elem.after(msgElem);
                        valMessages.push(elem.next());
                        $compile(elem.next())(scope);

                    }

                    /* check for validation attributes. */
                    $.each(this.attributes, function (k, v) {

                        if (this.name && hasValidation(this.name)) {

                            var attrName = this.name;

                            msg = buildMessage(attrName, fieldName, this.value);

                            msgElem = buildExpression(formName, fieldName, attrName, msg);

                            /* compile */
                            msgElem = $(msgElem);
                            if (!msgElem.hasClass('ai-validate-message')) msgElem.addClass('ai-validate-message');
                            if (options.summary) msgElem.addClass('summary');
                            else msgElem.removeClass('summary');

                            elem.after(msgElem);
                            valMessages.push(elem.next());
                            $compile(elem.next())(scope);

                        }

                    });
               
                });

                /* apply scope for form submission */
                if (options.validateOnSubmit) {
                    form.on('submit', function () {
                        scope.$apply(function () {
                            ctrl.submitted = true;
                        });
                    });
                }

                if (options.pristineOnReset) {
                    form.on('reset', function () {
                        scope.$apply(function () {
                            ctrl.reset = true;
                        });
                    });
                }

           
            }

            /* create the options object */
            if (attrs.aiValidateSummary === 'false') {
                options = { summary: false };
            } else if (attrs.aiValidateSummary === 'true') {
                options = { summary: true };
            } else {
                options = scope.$eval(attrs.aiValidateSummary) || {};
            }
   
            options = angular.extend({}, defaults, options); 

            init();

        }
    };
}]);

/* VALIDATE MESSAGE
*********************************************************
* 

*/

summary.directive("aiValidateMessage", [function () {

    return {
        restrict: "A",
        require: "^form",
        link: function (scope, element, attrs, ctrl) {

            var exp, msg, watcher;

            /* get the element text */
            msg = element.text();

            /* validation expression */
            exp = attrs.ngShow;

            /* element must have a name value */        
            ctrl.validateSummary(exp, msg);       
          
        }

    };


}]);
