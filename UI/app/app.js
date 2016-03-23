'use strict';

angular.module('app', [
    'frapontillo.bootstrap-duallistbox',
    'kendo.directives',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
  
    'ui.utils',
    'ui.load',
    'toaster',
    'pascalprecht.translate',
    'ai.validate.summary',
    'multipleDatePicker',
    'uxGenie'
]);



//size of page
var pageSize = 20;





//function for clearing uneditadable datepicker

function clearMeOnBack(that) {
    event.preventDefault();
    if (event.keyCode == 8 || event.keyCode == 46)
        that.value = null

}

//END



//Tweak to manage action bar responsiveness temporary till I find a better way

function resizeMe() {
    if ($('.navbar-collapse.collapse').height() < 200) {
        $('.app-header-fixed').css('padding-top', $('.navbar-collapse.collapse').height() + 'px');
    } else {
        $('.app-header-fixed').css('padding-top', '50px');
    }

}
setInterval(function() {
    resizeMe()
}, 100);

// E N D 



// To Top 


//function toTop(elem){
//var elem=elem||'html';
//  $('html, body').animate({
//        scrollTop: $('html').offset().top
//    }, 100);


//}


function toTop(elem, diff) {
    var elem = elem || 'html';
    var diff = diff || 0;
    $('html, body,.modal').animate({
        scrollTop: $(elem).eq(0).offset().top - diff
    }, 200);


}


function scrollToTop(selector) {


    $(selector).animate({
        scrollTop: 0
    }, 100);

}
//for using on modal you must provide 2 arguments otherwise it will animate html and body not modal 
function focusOn(elem, diff) {

    var elem = elem || '.modal';
    var diff = diff || 0;

    if (arguments.length == 2) {
        $('.modal').animate({
            scrollTop: $(elem).eq(0).position().top + diff
        }, 100);

    } else {
        console.log($(elem).length);
        $('html,body').animate({
            scrollTop: $(elem).eq(0).offset().top - 100
        }, 100);
    }


}



// E N D



function animateLogo() {
    // $('#loader').css('height',window.innerHeight);
    $('.loaderIcon').animate({

        'opacity': '0.3'
    }, 900).animate({
        'opacity': '1'
    }, 900, function() {
        animateLogo()
    });
};



function tooltip(field) {
    if (field.indexOf('{{') != -1 || field.indexOf('}}') != -1)
        throw new Error('You must provide only field name');

    return '<span tooltip="#:' + field + '#" tooltip-placement="bottom">#:' + field + '#</span>';

}

function tooltipHeader(title) {

    return '<a class="k-link "  tooltip="' + title + '">' + title + '</a>';

}

function tooltipAltHeader(title) {

    return '<a class="k-link "  tooltipAlt="' + title + '">' + title + '</a>';

}

function header(title, disable, classnames) {

    var disable = disable ? 'disable' : ''
    var classes;
    if (classnames && classnames.length > 0) {
        classnames.forEach(function(classname) {
            classes += " " + classname;
        })
    }
    return '<a class="k-link ' + disable + " "+classes + ' "  >' + title + '</a>';

}



function fixDate(date) {

    return date.setHours(((date).getTimezoneOffset() / 60) * -1);
}


// $(document).ready(function() {
//   function setHeight() {
//     windowHeight = $(window).innerHeight();
//     $('.app-content-body').css('min-height', windowHeight);
//   };
//   setHeight();

//   $(window).resize(function() {
//     setHeight();
//   });
// });



//for preventing kendo dropdownlists from closing on scrolling
$(document).bind('mousewheel DOMMouseScroll', function(e) {
        // console.log($(e.toElement).is('.k-animation-container .k-list-container ul'));
        var elem = $(e.toElement).is('.k-animation-container .k-list-container ul') ? $(e.toElement) : $(e.toElement).closest('.k-animation-container .k-list-container ul');
        if (elem.scrollTop() == 0 && (e.originalEvent.wheelDelta > 0))
            e.preventDefault()

        //console.log(elem.scrollTop()+elem.height()==elem.prop('scrollHeight'))
        if (elem.scrollTop() + elem.height() >= elem.prop('scrollHeight') - 10 && (e.originalEvent.wheelDelta < 0))
            e.preventDefault()


    })
    //End


//for tooltip fixation
var lastText;
$(document).mousemove(function(e) {

    //if($(e.toElement).closest('th[data-field]').length>0){

    var elem = $(e.toElement)
    var elemLink = elem.closest('th[data-field]').children('a');
    if (elem.is('.k-grid th.k-header a[tooltipAlt]')) {
        $('#rr').css('top', mouseY(e) - $(document).scrollTop() - 36).css('left', mouseX(e) - 25);
        $('#rr .tooltip-inner').html(elemLink.text());
        // if (lastText != elemLink.text())
        //     $('#rr').fadeOut('fast').fadeIn('slow');
        // else
        $('#rr').show();

        lastText = elemLink.text();


    } else {
        $('#rr').hide();

    }



})



function mouseX(evt) {
    if (evt.pageX) {
        return evt.pageX;
    } else if (evt.clientX) {
        return evt.clientX + (document.documentElement.scrollLeft ?
            document.documentElement.scrollLeft :
            document.body.scrollLeft);
    } else {
        return null;
    }
}

function mouseY(evt) {
    if (evt.pageY) {
        return evt.pageY;
    } else if (evt.clientY) {
        return evt.clientY + (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
    } else {
        return null;
    }
}
//END

//fix for kendo grid on empty data to scroll horizontal
function emptyGridScroll(that, message) {

    var colspan = that.thead.find("th").length;
    var emptyRow = "<tr><td colspan='" + colspan + "'><div class='noRecordDiv '><span class='bolder smaller-90'>" + message + "</span></div></td></tr>";
    that.tbody.html(emptyRow);

}
//END


//Overriding Kendo lists Open to prevent it if it's parent is grid
//to prevent suggestions
var KendoInit = kendo.ui.Widget.fn.init;

kendo.ui.Widget.fn.init = function(e, w) {
    // console.log('init');
    if (w && w.suggestDataSource) {
        w.suggestDataSource.transport = null;
        console.info('suggestion is disabled')
            // var KendoOpen = w.open;
            // w.open = function(e) {

        //     // console.log('open');
        //     if (this.options.anchor)
        //         if ($(this.options.anchor[0]).parents('.k-filtercell').length > 0&&$(this.options.anchor[0]).parents('.k-filter-row').length > 0)
        //             e.preventDefault();
        //     if (KendoOpen)
        //         KendoOpen.apply(this, arguments);
        // }
    }
    KendoInit.apply(this, arguments);

}

//E N D



function getProp(obj, prop) {
    var parts = prop.split('.');
    while (parts.length > 1) {
        obj = obj[parts.shift()];
    }
    return obj[parts.shift()]
}

function setProp(obj, prop, val) {
    var parts = prop.split('.');
    while (parts.length > 1) {
        obj = obj[parts.shift()];
    }
    obj[parts.shift()] = val;
}



// // OVerriding change method to change the optionlabel color

// var orgDropSelect=kendo.ui.DropDownList.prototype._selectValue
// kendo.ui.DropDownList.prototype._selectValue=function(){

// // console.log('_select')
// var val;
// try{
//  val=angular.isObject(this.$angular_getLogicValue())?getProp(this.$angular_getLogicValue(),this.options.dataValueField):this.$angular_getLogicValue();
    
// }catch(e){

// val=this.value();
// }
// var input=this.wrapper.find('.k-input');
// // console.log(val)
// if(val||val===0){
// input.addClass('noPlaceholder')
// }else{
// input.removeClass('noPlaceholder')
// }

// orgDropSelect.apply(this,arguments)
// }


// var orgMultiSelect=kendo.ui.MultiSelect.prototype._selectValue
// kendo.ui.MultiSelect.prototype._selectValue=function(){

// // console.log('_select')

// var val=angular.isObject(this.$angular_getLogicValue())&&!angular.isArray(this.$angular_getLogicValue())?getProp(this.$angular_getLogicValue(),this.options.dataValueField):this.$angular_getLogicValue();
// var input=this.wrapper.find('[role="listbox"]+.k-input');
// // console.log(val)
// if((val&&!angular.isArray(val))||val.length>0||val===0){
   
// input.addClass('noPlaceholder')
// }else{
// input.removeClass('noPlaceholder')
// }

// orgMultiSelect.apply(this,arguments)
// }


// // END