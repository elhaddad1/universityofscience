'use strict';
app.factory('DateValidationService', function () {
    return {
        MaxShiftDurationHours : 0,
        isGreaterThanToday: function (date) {
            var dateFormated = moment(date).format();
            return this.isGreaterThanDate(dateFormated, new Date());
        },
        isGreaterThanDate: function (date1, date2) {
            var date1Formated = moment(date1).format();
            var date2Formated = moment(date2).format();
            return moment(date1Formated).isAfter(date2Formated) ;
        },
        isExist: function (date, datesList) { 
            var dateFormated = moment(date).format();
            var existingDate = $.grep(datesList, function (dateInList) {
                return moment(dateFormated).isSame(dateInList);
            });
            return (existingDate != null && existingDate.length > 0) ? true : false;
        },
        isExceed24Hours: function (date1, date2) {
            var date1Formated = moment(date1).format();
            var date2Formated = moment(date2).format();
            return Math.abs(moment(date1Formated).diff(date2Formated)) > (this.MaxShiftDurationHours * 60 * 60 * 1000);
        },
        isSame: function (date1, date2) {
            var date1Formated = moment(date1).format();
            var date2Formated = moment(date2).format();
            return moment(date1Formated).isSame(date2Formated);
        },
        isValidDate: function (dateString) {
            var dateFormated = moment(dateString).format();
            return moment(dateFormated).isValid();
        }
    }
});