//From Kendo Documentation  http://docs.telerik.com/kendo-ui/web/dropdownlist/how-to/prevent-close-on-scroll
function stopScroll(element) {
    var activeElement;

    $(document).bind('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;

        if (!$(activeElement).closest(".k-popup").length) {
            return;
        }

        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo) {
          //  e.preventDefault();
           // element.scrollTop(scrollTo + element.scrollTop());
        }
    });

    $(document).on('mouseover', function (e) {
        activeElement = e.target;
    });
}


(function ($, undefined) {
    var kendo = window.kendo,
        ui = kendo.ui,
        extend = $.extend;

    //extend the base MultiDayView
    var CustomDateRangeView = ui.MultiDayView.extend({
        init: function (element, options) {
            ui.MultiDayView.fn.init.call(this, element, options); //call the base init method
            if (options.swipe) {
                this._bindSwipe(); //bind the swipe event
            }
        },
        options: { //set default values of the options
            numberOfDays: 14,
            swipe: true
        },
        calculateDateRange: function () {
            var selectedDate = this.options.date,
                numberOfDays = Math.abs(this.options.numberOfDays),
                start = selectedDate,
                idx, length,
                dates = [];

            for (idx = 0, length = numberOfDays; idx < length; idx++) {
                dates.push(start);
                start = kendo.date.nextDay(start);
            }
            this._render(dates);
        },
        nextDate: function () {
            return kendo.date.nextDay(this.endDate());
        },
        previousDate: function () {
            var daysToSubstract = -Math.abs(this.options.numberOfDays); //get the negative value of numberOfDays
            var startDate = kendo.date.addDays(this.startDate(), daysToSubstract); //substract the dates
            return startDate;
        },
        _bindSwipe: function () { //bind the swipe event
            var that = this;
            var scheduler = that.element.closest("[data-role=scheduler]").data("kendoScheduler"); //get reference to the scheduler
            that.content.kendoTouch({ //initialize Kendo Touch on the View's content
                enableSwipe: true,
                swipe: function (e) {
                    var action,
                    date;

                    if (e.direction === "left") {
                        action = "next";
                        date = that.nextDate();
                    } else if (e.direction === "right") {
                        action = "previous";
                        date = that.previousDate();
                    }

                    //navigate with the scheduler
                    if (!scheduler.trigger("navigate", { view: scheduler._selectedViewName, action: action, date: date })) {
                        scheduler.date(date);
                    }
                }
            });
        }
    });

    //extend UI
    extend(true, ui, {
        CustomDateRangeView: CustomDateRangeView
    });

})(window.kendo.jQuery);
