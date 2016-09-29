/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
 ;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
 zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
 b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
 function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
 function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
 !s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
 a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%",
 "float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
 0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
 setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
 d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
 d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
 f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():
 a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
 keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),
 i.start&&i.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);;
/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/
(function($) {
    function Placeholder(input) {
        this.input = input;
        if (input.attr('type') == 'password') {
            this.handlePassword();
        }
        // Prevent placeholder values from submitting
        $(input[0].form).submit(function() {
            if (input.hasClass('placeholder') && input[0].value == input.attr('placeholder')) {
                input[0].value = '';
            }
        });
    }
    Placeholder.prototype = {
        show : function(loading) {
            // FF and IE saves values when you refresh the page. If the user refreshes the page with
            // the placeholders showing they will be the default values and the input fields won't be empty.
            if (this.input[0].value === '' || (loading && this.valueIsPlaceholder())) {
                if (this.isPassword) {
                    try {
                        this.input[0].setAttribute('type', 'text');
                    } catch (e) {
                        this.input.before(this.fakePassword.show()).hide();
                    }
                }
                this.input.addClass('placeholder');
                this.input[0].value = this.input.attr('placeholder');
            }
        },
        hide : function() {
            if (this.valueIsPlaceholder() && this.input.hasClass('placeholder')) {
                this.input.removeClass('placeholder');
                this.input[0].value = '';
                if (this.isPassword) {
                    try {
                        this.input[0].setAttribute('type', 'password');
                    } catch (e) { }
                    // Restore focus for Opera and IE
                    this.input.show();
                    this.input[0].focus();
                }
            }
        },
        valueIsPlaceholder : function() {
            return this.input[0].value == this.input.attr('placeholder');
        },
        handlePassword: function() {
            var input = this.input;
            input.attr('realType', 'password');
            this.isPassword = true;
            // IE < 9 doesn't allow changing the type of password inputs
            if ($.browser.msie && input[0].outerHTML) {
                var fakeHTML = $(input[0].outerHTML.replace(/type=(['"])?password\1/gi, 'type=$1text$1'));
                this.fakePassword = fakeHTML.val(input.attr('placeholder')).addClass('placeholder').focus(function() {
                    input.trigger('focus');
                    $(this).hide();
                });
                $(input[0].form).submit(function() {
                    fakeHTML.remove();
                    input.show()
                });
            }
        }
    };
    var NATIVE_SUPPORT = !!("placeholder" in document.createElement( "input" ));
    $.fn.placeholder = function() {
        return NATIVE_SUPPORT ? this : this.each(function() {
            var input = $(this);
            var placeholder = new Placeholder(input);
            placeholder.show(true);
            input.focus(function() {
                placeholder.hide();
            });
            input.blur(function() {
                placeholder.show(false);
            });

            // On page refresh, IE doesn't re-populate user input
            // until the window.onload event is fired.
            if ($.browser.msie) {
                $(window).load(function() {
                    if(input.val()) {
                        input.removeClass("placeholder");
                    }
                    placeholder.show(true);
                });
                // What's even worse, the text cursor disappears
                // when tabbing between text inputs, here's a fix
                input.focus(function() {
                    if(this.value == "") {
                        var range = this.createTextRange();
                        range.collapse(true);
                        range.moveStart('character', 0);
                        range.select();
                    }
                });
            }
        });
    }
})(jQuery);;
/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});;
/**
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * CardTable by: Justin McNally (2015)
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 * Requires jQuery version 1.7 or above
 *
 */
!function(t){t.fn.cardtable=function(a){var s,d=this,e={headIndex:0},l=t.extend({},e,a)
return s=a&&a.headIndex?a.headIndex:0,d.each(function(){var a=t(this)
if(!a.hasClass("stacktable")){var s=t(this).prop("class"),d=t("<div></div>")
"undefined"!=typeof l.myClass&&d.addClass(l.myClass)
var e,n,i,h,r,c=""
a.addClass("stacktable large-only"),e=a.find("caption").clone(),n=a.find("tr").eq(0),a.siblings().filter(".small-only").remove(),a.find("tbody tr").each(function(){i="",h="",r=t(this).prop("class"),t(this).find("td,th").each(function(a){""!==t(this).html()&&(h+='<tr class="'+r+'">',h+=n.find("td,th").eq(a).html()?'<td class="st-key">'+n.find("td,th").eq(a).html()+"</td>":'<td class="st-key"></td>',h+='<td class="st-val '+t(this).prop("class")+'">'+t(this).html()+"</td>",h+="</tr>")}),c+='<table class=" '+s+' stacktable small-only"><tbody>'+i+h+"</tbody></table>"}),a.find("tfoot tr td").each(function(a,d){""!==t.trim(t(d).text())&&(c+='<table class="'+s+' stacktable small-only"><tbody><tr><td>'+t(d).html()+"</td></tr></tbody></table>")}),d.prepend(e),d.append(t(c)),a.before(d)}})},t.fn.stacktable=function(a){var s,d=this,e={headIndex:0},l=t.extend({},e,a)
return s=a&&a.headIndex?a.headIndex:0,d.each(function(){var a=t(this).prop("class"),d=t('<table class="'+a+' stacktable small-only"><tbody></tbody></table>')
"undefined"!=typeof l.myClass&&d.addClass(l.myClass)
var e,n,i,h,r,c,o=""
e=t(this),e.addClass("stacktable large-only"),n=e.find("caption").clone(),i=e.find("tr").eq(0),e.find("tr").each(function(a){h="",r="",c=t(this).prop("class"),0===a?o+='<tr class=" '+c+' "><th class="st-head-row st-head-row-main" colspan="2">'+t(this).find("th,td").eq(s).html()+"</th></tr>":(t(this).find("td,th").each(function(a){a===s?h='<tr class="'+c+'"><th class="st-head-row" colspan="2">'+t(this).html()+"</th></tr>":""!==t(this).html()&&(r+='<tr class="'+c+'">',r+=i.find("td,th").eq(a).html()?'<td class="st-key">'+i.find("td,th").eq(a).html()+"</td>":'<td class="st-key"></td>',r+='<td class="st-val '+t(this).prop("class")+'">'+t(this).html()+"</td>",r+="</tr>")}),o+=h+r)}),d.prepend(n),d.append(t(o)),e.before(d)})},t.fn.stackcolumns=function(a){var s=this,d={},e=t.extend({},d,a)
return s.each(function(){var a=t(this),s=a.find("tr").eq(0).find("td,th").length
if(!(3>s)){var d=t('<table class="stacktable small-only"></table>')
"undefined"!=typeof e.myClass&&d.addClass(e.myClass),a.addClass("stacktable large-only")
for(var l=t("<tbody></tbody>"),n=1;s>n;)a.find("tr").each(function(a){var s=t("<tr></tr>")
0===a&&s.addClass("st-head-row st-head-row-main")
var d=t(this).find("td,th").eq(0).clone().addClass("st-key"),e=n
if(t(this).find("*[colspan]").length){var i=0
t(this).find("td,th").each(function(){var a=t(this).attr("colspan")
return a?(a=parseInt(a,10),e-=a-1,i+a>n&&(e+=i+a-n-1),i+=a):i++,i>n?!1:void 0})}var h=t(this).find("td,th").eq(e).clone().addClass("st-val").removeAttr("colspan")
s.append(d,h),l.append(s)}),++n
d.append(t(l)),a.before(d)}})}}(jQuery)
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
var combine_text='';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

/** Test if the device is a touchdevice **/
if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    jQuery('html').addClass('touch');
} else {
	jQuery('html').addClass('no-touch');
}

})(jQuery, Drupal, this, this.document);

//gobal vars for resizing /phone/tablette/desktop
var small_screen_max_width = 640;
var large_screen_min_width = 960;
var extralarge_screen_min_width = 1280;
var isMobile = null;


function addBodyDeviceClass(width) {
	// Useful global vars for device support
	isMobile = isTablette = isDesktop = false;
	// Mobile
	if(width < small_screen_max_width + 1) {
		jQuery('body').removeClass('tablette_scale');
		jQuery('body').addClass('mobile_scale');
		isMobile = true;
	// Tablet
	} else if(width < large_screen_min_width + 1) {
		jQuery('body').removeClass('mobile_scale');
		jQuery('body').addClass('tablette_scale');
		isTablette = true;
	// Desktop
	} else {
		jQuery('body').removeClass('mobile_scale');
		jQuery('body').removeClass('tablette_scale');
		isDesktop = true;
	}
}




// Enable mobile search

function enableMobileSearch() {
	var searchBtn = jQuery('#icon-search');
	searchBtn.click(function(e) {
		e.preventDefault();
		jQuery('.meganav_bloc > a').removeClass('mobileEnabled');
		jQuery('#mobileMenu').remove();
		if(jQuery('#mobileArrow').length == 0) {
			jQuery('#header').append('<div id="mobileArrow"></div>');
		}
		jQuery('#mobileArrow').css({
			'right': '45px',
			'zIndex': 0
		});
		if(jQuery('#mobileSearch').length == 0) {
			jQuery('#header').append('<div id="mobileSearch"></div>');
			var cloneFormSearch = jQuery('#search-block-form').clone();
			jQuery('#mobileSearch').append(cloneFormSearch);
		} else {
			jQuery('#mobileSearch, #mobileArrow').remove();
		}
	});
	// TODO: touch event
	// jQuery('#header').mouseleave(function() {
	// 	jQuery('#mobileSearch, #mobileArrow, #mobileMenu').remove();
	// });
}

// Enable mobile menu
function enableMobileMenu() {
	if(!isMobile) {
		jQuery('#mobileMenu').remove();
		jQuery('#mobileArrow').remove();
		jQuery('#mobileSearch').remove();
		return;
	}

	if(jQuery('#page').hasClass('is_location')){
		jQuery('.meganav_location_btn').click(function(e) {
			e.preventDefault();
			var mobileLocationBtn = jQuery(this);
			if(!mobileLocationBtn.hasClass('mobileEnabled')) {
				mobileLocationBtn.addClass('mobileEnabled');

				// Construct a clean mobile menu
				originalNode = '<li></li>';
				var cloneFormSearch = jQuery('#search-block-form--2').clone();
				// console.log(cloneFormSearch)
				// originalNode += jQuery('li').append(cloneFormSearch);
				// console.log(originalNode)
				// originalNode += '<li>'+jQuery(cloneFormSearch)+'</li>';
				originalNode += '<li>'+jQuery('#back_to_main_menu_mobile').parent().html()+'</li>';

				// Create mobile menu from original menu
				var mobileMenu = jQuery('<div id="mobileMenu"></div>').append('<ul></ul>');
				jQuery('ul', mobileMenu).append(originalNode);

				jQuery('header').append(mobileMenu);

				// Remove original classes & unwanted content
				jQuery('*', jQuery('#mobileMenu')).removeClass();
				jQuery('li:first', mobileMenu).append(cloneFormSearch);
				jQuery('#edit-submit--2',jQuery('#mobileMenu')).attr('src','/sites/all/themes/technicolor/images/search_location_mobile_go.png')
				jQuery('li > div a', jQuery('#mobileMenu')).each(function(index, element) {
					var title = jQuery(element).text();
					jQuery(element).parent().parent().html(jQuery(element));
				});

				// Div for asides (languages,...)
				jQuery('<div class="subItems clearfix"></div>').insertAfter(jQuery('ul:first', mobileMenu));
				// @TODO : Language à gérer quand la fonctionnalité sera OP...
				var choice_location = jQuery('#change_location_block select option:first', '#header_location').text();
				var textLanguage = jQuery('.languesite label', '#header_location').text();
				jQuery('.subItems', mobileMenu).append('<ul></ul>');
				if(textLanguage.length != 0) jQuery('.subItems ul', mobileMenu).append('<li><a onclick="jQuery(\'#block-general-langue-switcher-2\').show();jQuery(\'#mobileArrow\').hide();jQuery(\'#mobileMenu\').hide();jQuery(\'#mobileArrow\').css(\'z-index\',\' 99\');" >' + textLanguage + '</a></li>');
				jQuery('.subItems ul', mobileMenu).append('<li class="last"><a onclick="jQuery(\'#topbar-location\').show();jQuery(\'#change_location_block\').show();jQuery(\'#mobileArrow\').hide();jQuery(\'#mobileMenu\').hide();jQuery(\'#mobileArrow\').css(\'z-index\', \'99\');" >' + choice_location + '</a></li>');

				// Mobile arrow
				if(jQuery('#mobileArrow').length == 0) {
					jQuery('header').append('<div id="mobileArrow"></div>');
				}
				jQuery('#mobileArrow').css('right', '5px');
				jQuery('#mobileArrow').css('z-index', 100);

				// Correction de bug lié au Z-index
				jQuery('.is_location .mobile_change_location_bloc a, .is_location .mobile_langue_bloc a').each(function(e){
					jQuery(this).click(function(){
						jQuery('#mobileArrow').css('z-index', '100');
					});
				});
				
			} else {
				mobileLocationBtn.removeClass('mobileEnabled');
				jQuery('#mobileMenu').remove();
				jQuery('#mobileArrow').remove();
			}
		});
	} else {
		jQuery('.meganav_btn').click(function(e) {
			var mobileBtn = jQuery(this);
			e.preventDefault();
			if(!mobileBtn.hasClass('mobileEnabled')) {

				mobileBtn.addClass('mobileEnabled');

				// Construct a clean mobile menu
				originalNode = '';
				jQuery('#block-system-main-menu > ul').each(function(index, element) {
					originalNode += jQuery(element).html();
				});

				// Create mobile menu from original menu
				var mobileMenu = jQuery('<div id="mobileMenu"></div>').append('<ul></ul>');
				jQuery('ul', mobileMenu).append(originalNode);
				jQuery('header').append(mobileMenu);

				// Remove original classes & unwanted content
				jQuery('.mega_focus_bg', jQuery('#mobileMenu')).remove();
				jQuery('*', jQuery('#mobileMenu')).removeClass();
				jQuery('li > div a', jQuery('#mobileMenu')).each(function(index, element) {
					var title = jQuery(element).text();
					jQuery(element).parent().parent().html(jQuery(element));
				});
				// cas term sans page
				jQuery('li > div span', jQuery('#mobileMenu')).each(function(index, element) {
					var title = jQuery(element).text();
					jQuery(element).parent().parent().html(jQuery(element));
				});

				// Div for asides (languages,...)
				jQuery('<div class="subItems clearfix"></div>').insertAfter(jQuery('ul:first', mobileMenu));
				// @TODO : Language à gérer quand la fonctionnalité sera OP...
				var socialMedia = jQuery('.social_media_hub_header_mobile', '#header').html();
				var textLanguage = jQuery('.languesite label', '#header').text();
				jQuery('.subItems', mobileMenu).append('<ul></ul>');
				jQuery('.subItems ul', mobileMenu).append('<li><a onclick="jQuery(\'#block-general-langue-switcher\').show();" >' + textLanguage + '</a></li>');
				jQuery('.subItems ul', mobileMenu).append('<li>' + socialMedia + '</li>');
				jQuery('.subItems', mobileMenu).append(jQuery('#block-menu-menu-shortcut-header').html());

				// Mobile arrow
				if(jQuery('#mobileArrow').length == 0) {
					jQuery('#header').append('<div id="mobileArrow"></div>');
				}
				jQuery('#mobileArrow').css('right', '5px');

				// Interactions
				jQuery('#mobileMenu > ul > li > a').click(function(e) {
					e.preventDefault();
					jQuery('#mobileMenu > ul > li').removeClass();
					jQuery(this).parent().addClass('selected');
					// Toggle next ul
					jQuery('#mobileMenu ul ul').hide();
					if(jQuery(this).next().is(':visible')) {
						jQuery(this).next().hide();
					} else {
						jQuery(this).next().show();
					};
					jQuery('body').animate({scrollTop: jQuery(this).offset().top});
				});
			} else {
				mobileBtn.removeClass('mobileEnabled');
				jQuery('#mobileMenu').remove();
				jQuery('#mobileArrow').remove();
			}
		});
	}
}

/* Slider related people */

function relatedPeopleSlider() {
    var blocToSlide = jQuery('section.related_people .view-people-reseach-area-and-service, .view-related-people');

	if(blocToSlide.length>0 && isMobile && jQuery('#slider-people').length == 0) {

		var slider = blocToSlide.clone().attr('id', 'slider-people').insertAfter(blocToSlide);
		blocToSlide.hide();

		jQuery(slider).flexslider({
			animation: "slide",
			controlNav: false,
			directionNav: true,
			animationLoop: true,
			slideshow: false,
			selector: ".view-content > .views-row",
			minItems: 1,
			maxItems: 1,
			itemWidth: 300,
			itemMargin: 0,
			prevText: "&nbsp;",
			nextText: "&nbsp;"
		});
	}
	if(blocToSlide.length>0 && isMobile && jQuery('#slider-people').length > 0) {
		jQuery('section.related_people .view-people-reseach-area-and-service, .view-related-people').hide();
		jQuery('#slider-people').show();
	}
	if(blocToSlide.length>0 && !isMobile && jQuery('#slider-people').length > 0) {		
		jQuery('section.related_people .view-people-reseach-area-and-service, .view-related-people').show();
		jQuery('#slider-people').hide();
	}
}

/*
 * Slider our people
 */

sliderPeople = false;

function peopleSlider() {

	// verification de l'existence d'un bloc Our people
	if(jQuery('.js-tab-pane').length > 0) {
		if(!sliderPeople) {

			var tabItem = jQuery('.js-tab-item'),
				tabPane = jQuery('.js-tab-pane');

			/* by default */
			tabPane.first().css('left','0');

			/* on click */
			jQuery(tabItem).children('a').click(function(e) {
				e.preventDefault();
			    jQuery(tabItem).removeClass('active');
			    jQuery(this).parent().addClass('active');
			    /* Ouvrir les 'tab content' */
			    var idTab = jQuery(this).attr('href');
			    idTab = idTab.substr(idTab.indexOf('#') + 1);
			    tabPane.css('left','-10000px');
			    jQuery('#' + idTab).css('left','0');
			});

			/* On adapte flexslider en fonction du support */
			if(isMobile) {
				jQuery('.js-tab-content > .flexslider').css('max-width','280px');
				var items = 1;
			} else if (!isMobile) {
				jQuery('.js-tab-content > .flexslider').width('100%');
				var items = 5,
					width = 140,
					margin = 0;
			};

			/* flexslider */
			/**
			 *	adding conditional check to address issue with flexslider not appearing.
			 */
			if (typeof(jQuery.flexslider) !== 'undefined') {
				tabPane.flexslider({
					animation: 'slide',
					controlNav: false,
					directionNav: true,
					animationLoop: false,
					slideshow: false,
					selector: '.js-slides > li',
					minItems: 1,
					maxItems: items,
					itemWidth: width,
					itemMargin: margin,
					prevText: '&nbsp;',
					nextText: '&nbsp;'
				});
			}

		};		
	}
}


/*
* function used for changing the atttributes of the img or link (galleria) when the height/with of the screen is changing ( mobile, tablette, desktop ) 	
* data_type : the attribute of the image 
* values : data-small data-medium data-large
* elmt : element $(this)
*/
function changeImageAttrSRC( elmt, attr_name ){
	var attr = jQuery(elmt).attr( attr_name );
	
	// For some browsers, `attr` is undefined; for others,
	// `attr` is false.  Check for both.
	if ( typeof attr !== 'undefined' && attr !== false ) {
		jQuery(elmt).attr('src', attr);
	}
}

function image_src(width){
	if( width <= small_screen_max_width ) {//small
		jQuery("img").each(function(index) {
			changeImageAttrSRC( jQuery(this), 'data-small' );
		});
		if (jQuery("#slider")){
			jQuery('.flex-caption').each(function(){
				jQuery(this).css('margin-left','0');
			});
			jQuery("#carousel").css('left','0');
		}
	} else if( width >= large_screen_min_width ){//large
		
		jQuery("img").each(function(index) {
			if( width >= extralarge_screen_min_width && jQuery(this).attr('data-extralarge') !== undefined ) {//extralarge
				changeImageAttrSRC( jQuery(this), 'data-extralarge' );
			} else {
				changeImageAttrSRC( jQuery(this), 'data-large' );
			}
		});
		if (jQuery("#slider")){
			var margin_left = null;
			jQuery('.flex-caption').each(function(){
				if(margin_left==null){
					var width_li = jQuery(this).parent('li').width();
					margin_left = (width_li-940)/2;
				}
				jQuery(this).css('margin-left',margin_left+'px');
			});
			jQuery("#carousel").css('left',margin_left+'px')
		}
	} else {//medium
		jQuery("img").each(function(index) {
			changeImageAttrSRC( jQuery(this), 'data-medium' );
		});
		if (jQuery("#slider")){
			jQuery('.flex-caption').each(function(){
				jQuery(this).css('margin-left','0');
			});
			jQuery("#carousel").css('left','0');
		}
	}
}



/*
 *= MEGANAV
 */

function megaNav() {

	// Création des variables (performance)
	var liExpanded = jQuery('body:not(.mobile_scale) #block-system-main-menu > ul > li'),
		liExpandedA = liExpanded.children('a'),
		liExpandedASpan = liExpandedA.find('span');

	// Remove Meganav when needed
	function removeMegaNav() {
		jQuery('.subMenu, #header .meganav-arrow').remove();
		liExpandedASpan.css('display', 'block');
	}
	liExpandedA.append('<span></span>');
	liExpanded.click(function(e) {

		e.preventDefault();
		// Remove old Meganav if there's one
		removeMegaNav();

		// On vérifie sur l'IL cliqué à la classe 'active'
		if ( jQuery(this).hasClass('active') ) {
			// Si oui,
			// Le menu est déjà ouvert, on le ferme et on retire la classe
			jQuery(this).removeClass('active');
			removeMegaNav();
		} 
		else {
			// Le menu est fermé, on l'ouvre :
			// On retire la classe 'active' à tous les IL
			liExpanded.removeClass('active');
			// Puis on l'ajoute à l'IL cliqué
			jQuery(this).addClass('active');

			// Hide black arrow when meganav is displayed
			liExpandedASpan.css('display', 'none');

			var subMenu = jQuery('.menu:first, .mega_focus_bg', jQuery(this)).clone();
			var columns = jQuery('li.expanded', subMenu);
			if(columns.length > 2) {
				subMenuClass = 'extended';
				columns.each(function(index, element) {
					jQuery(element).addClass('subColumn');
					if(index == columns.length - 1) {
						jQuery(element).parent().addClass('columns');
					}
				});
			} else {
				subMenuClass = 'normal';
			}
			// Manage when meganav should be removed
			jQuery('#header').mouseleave(function() {
				removeMegaNav();
				liExpanded.removeClass('active');
			});

			var nodeSubMenu = jQuery('<div class="subMenu"><div class="subMenu-inside"></div></div>');
			jQuery('.subMenu-inside', nodeSubMenu).addClass(subMenuClass).append(subMenu);
			nodeSubMenu.insertAfter(jQuery('#header_bg'));
			jQuery(this).append('<div class="meganav-arrow"></div>');

		}
	});
}

/*
 * Etats hover home
 */

function hoverMosaic() {
	mosaicImages = jQuery('.node-home-slider .field-collection-container').find('img');
	jQuery(mosaicImages).parent().parent().parent().mouseenter(function() {
		jQuery(this).addClass('hover centerDetails');
	});
	jQuery(mosaicImages).parent().parent().parent().mouseleave(function() {
		jQuery(this).removeClass('hover centerDetails');
	});
}

/*
 * Gestion de la mosaïque sur la home
 */

function adaptMosaic() {

	var mosaicContainer = jQuery('.node-home-slider .field-collection-container');
	var mosaicImages = mosaicContainer.find('img');
	var isMobile = jQuery('body').hasClass('mobile_scale');
	var isTablette = jQuery('body').hasClass('tablette_scale');
	controlLine = 0;	

	function addMargin(imgContainer) {
		if(jQuery(imgContainer).hasClass('col2') && controlLine == 0.5) {
			jQuery(imgContainer).css('margin-right', '10px');
		}
		if((jQuery(imgContainer).hasClass('col_2_3') || jQuery(imgContainer).hasClass('col_1_3')) && controlLine == 2/3) {
			jQuery(imgContainer).css('margin-right', '10px');
		}
		if(jQuery(imgContainer).hasClass('col_1_3') && (controlLine == 1/3 || controlLine == 0.5)) {
			jQuery(imgContainer).css('margin-right', '10px');
		}
		/* Line end */
		if (controlLine == 1) { controlLine = 0; }
	}

	// Calcul par défaut de la taille des images hors marges éventuelles

	mosaicImages.each(function(imgIndex, imgElt) {

		/* Image container */
		var imgContainer = jQuery(imgElt).parent().parent().parent();

		/* Set height */
		jQuery(imgContainer).height(mosaicContainer.width()*(330/1280));
		if(isMobile ||isTablette) {
			jQuery(imgContainer).css('height', 'auto');
		}

		/* Set default margins */
		if(isMobile) {
			var marginBottom = '5px';
		} else {
			var marginBottom = '10px';
		}
		jQuery(imgContainer).css({
			margin: '0',
			marginBottom: marginBottom,
			overflow: 'hidden'
		});

		/* Calculate sizes without margins */
		var size13 = (mosaicContainer.width() - 20) / 3 + "px";
		var size12 = (mosaicContainer.width() - 10) / 2 + "px";
		var size23 = 2 * ((mosaicContainer.width() - 20) /3) + 10 + "px";

		if (isMobile) {
			size13 = size12 = size23 = "100%";
		}
		if (isTablette) {
			size13 = size12;
			size23 = "100%";
		}

		/* Format 1/2 */
		if(imgContainer.hasClass('col2')) {
			controlLine = controlLine + 0.5;
			jQuery(imgContainer).css('width', size12);
		}
		/* Format 2/3 */
		if(imgContainer.hasClass('col_2_3')) {
			(!isTablette) ? controlLine = controlLine + 2/3 : controlLine = controlLine + 1;
			jQuery(imgContainer).css('width', size23);
		}
		/* Format 1/3 */
		if(imgContainer.hasClass('col_1_3')) {
			(!isTablette) ? controlLine = controlLine + 1/3 : controlLine = controlLine + 0.5;
			jQuery(imgContainer).css('width', size13);
			
			/* Cas particulier du 1/3 seul (nombre impair) */
			if(isTablette && 
				(
					(
						jQuery(mosaicImages[imgIndex+1]).parent().parent().parent().hasClass('col_2_3') && 
						jQuery(mosaicImages[imgIndex-1]).parent().parent().parent().hasClass('col_2_3')
					)
					|| jQuery(imgContainer).hasClass('last')
					// && jQuery('.col_1_3').length % 2 == 1
				)
				&& controlLine % 1 != 0
			) {
				jQuery(imgContainer).css('width', '100%');
				controlLine = 0;
			}
		}
		addMargin(imgContainer);
	});
}

/*
 * ONLOAD
 */

jQuery(window).load(function() {
	adaptMosaic();
});

jQuery(document).ready(function() {
	image_src(width);

	// Create Video tag >IE8
	var elements = ['video', 'source'];
	for (var i = 0; i < elements.length; i++) {
	    document.createElement(elements[i]);
	}


	//place holder for combined filter
	if(jQuery('html').hasClass('lt-ie10') || jQuery('html').hasClass('lt-ie9')){
		jQuery("#edit-combine").attr("title", combine_text);  
	}
	else{
		jQuery("#edit-combine").attr("placeholder", combine_text);  
	}

	var width = jQuery(window).width();

	addBodyDeviceClass(width);
	image_src(width);
	hoverMosaic();
	//mobileNewsSlider();
	peopleSlider();
	megaNav();
	enableMobileSearch();
	enableMobileMenu();
	relatedPeopleSlider();
	// breadcrumb();
	mobileForm(width);
	
	gmap_marker(width);

	//accordeon_open_close();
	right_menu_hide_link();


	jQuery('.animation #header_location').delay(2000).animate({top:'0'},2000);
	// Location header animation
	if(jQuery('#header_location').length > 0 && !isMobile){
		
		if( jQuery('html').hasClass('no-touch')){
			jQuery('#back_to_main_menu').click(function(event){
				event.preventDefault();
				jQuery('#header_location').animate({top:'-127px'},2000,function(){ jQuery(this).css('z-index','0');});
			});

			jQuery('#header_background').mouseleave(function(e){
				if(jQuery('#header_location').css('top')=='-127px'){
					jQuery('#header_location').css('z-index','6')
					jQuery('#header_location').delay(3000).animate({top:'0'},2000);
				}
			})
		}
	}

	// If mobile case
	if(isTablette){
		jQuery('#back_to_main_menu').click(function(event){
			event.preventDefault();
			jQuery('#header_location').animate({top:'-127px'},2000,function(){ jQuery(this).css('z-index','0');});
		});		
	}

	//reset des filtres SHPNews/EVENT/PR
	jQuery("#edit-term-node-tid-depth").val(jQuery("#edit-term-node-tid-depth").find('option[selected]').val());
	jQuery("#edit-field-event-category-tid").val(jQuery("#edit-field-event-category-tid").find('option[selected]').val());
	jQuery("#edit-field-news-date-value-value-year").val(jQuery("#edit-field-news-date-value-value-year").find('option[selected]').val());
	jQuery("#edit-field-pr-date-value-value-year").val(jQuery("#edit-field-pr-date-value-value-year").find('option[selected]').val());
	jQuery("#edit-field-pr-type-tid").val(jQuery("#edit-field-pr-type-tid").find('option[selected]').val());
	

	// Handler for .ready() called.
	jQuery('input[placeholder], textarea[placeholder]').placeholder();

	// Hide message pop-in
	jQuery('.pop_in_messsages_close').each(function(index){
		// console.log(jQuery(this));
		jQuery(this).click(function(e){
			// console.log(jQuery(this));
			jQuery(this).parent('.pop_in_messsages').parent('.pop_in_bg').hide();
		});
	});

	/* Assign functions to onresize */
	jQuery(window).resize(function() {
		
		var width = jQuery(window).width();

		addBodyDeviceClass(width);
		adaptMosaic();
		//mobileNewsSlider();
		peopleSlider();
		//enableMobileMenu(); 
		relatedPeopleSlider();
		// breadcrumb();
		mobileForm(width);

		if(width>small_screen_max_width) { 
			jQuery('.meganav_bloc .meganav').show();
		}
	});
		
	/*SSSHP
	* If no product in the product core range list(view) than the description linked to the content ssshp is hidden / same for smart range list 
	*/	

	if ( jQuery('.panel-pane.pane-views-panes.pane-ssshp-list-ecom-bloc-core-range-ssshp').length == 0 ) {
		jQuery('.views-field-field-core-range-description').hide();
	} else {
		var html_text = jQuery('#ssshp_ecom_content .views-field-field-core-range-description .field-content').html();
		jQuery('#core_range_bloc .pane-content').before('<p>'+html_text+'</p>');
		jQuery('#ssshp_ecom_content .views-field.views-field-field-core-range-description .field-content').empty();
	}
	if ( jQuery('.panel-pane.pane-views-panes.pane-ssshp-list-ecom-bloc-smart-range-ssshp').length == 0 ) {
		jQuery('.views-field-field-smart-range-description').hide();
	} else {
		var html_text = jQuery('#ssshp_ecom_content .views-field-field-smart-range-description .field-content').html();
		jQuery('#smart_range_bloc .pane-content').before('<p>'+html_text+'</p>');
		jQuery('#ssshp_ecom_content .views-field.views-field-field-smart-range-description .field-content').empty();
		
	}
	
	/*FORMS JS*/
	/*for form error message checkbox*/
	jQuery(".form-item input[type=checkbox].error").each(function(index) {
		jQuery(this).next().css('color', 'red');
		jQuery(this).parent().parent().parent().children('label').css('color', 'red');
		jQuery(this).parent().parent().parent().children('label').children().css('color', 'red');
	});
	/*jQuery(".form-item .error").each(function(index) {
		//label colored in red
		jQuery(this).prev().css('color', 'red');
		//alert(jQuery(this).prev().text());
		if( width <= small_screen_max_width ) {
			if( jQuery(this).parent().hasClass('form-type-textfield') )
					jQuery(this).prev().hide();
			jQuery(this).attr("placeholder", jQuery(this).prev().text());  
		}
		//add a class to color asterix in red
		jQuery(this).prev().addClass('error');
	});*/
	
	jQuery(".form-item .error").each(function(index) {
		//label colored in red
		jQuery(this).prev().css('color', 'red');
		//add a class to color asterix in red
		jQuery(this).prev().addClass('error');
	});
	

	/*
	* changes the atttributes of the img when the height/with of the screen is changing ( mobile, tablette, desktop ) 	
	*/
	if(!jQuery('html').hasClass('lt-ie9'))	{
		jQuery(window).resize(function() {
			var width = jQuery(window).width();	
			image_src(width);
		});
	}
	
	
	
	/*
	 * News slider for mobile and tablet
	 * on SHP Edito
	 */
	function mobileNewsSlider() {

		// Pour les blocs coming events
		if(jQuery('.event-bloc').length > 1 && jQuery('#latest_news_slider').length == 0 && !jQuery('body').hasClass('section-investor-center')) {
			jQuery('.event-bloc').attr('id', 'latest_news_slider');
		}

		var newsSlider = jQuery('#latest_news_slider');
		var tempSlider = jQuery('#latest_news_slider_temp');
		var minItems = 2;
		var maxItems = 2;

		if(jQuery(newsSlider).length > 0) {

			// If we ever set a news slider we check it is adapted to the good device
			if(isMobile && jQuery(tempSlider).length > 0 && !jQuery(tempSlider).hasClass('mobile')) {
				jQuery(tempSlider).remove();
			}
			if(isTablette && jQuery(tempSlider).length > 0 && !jQuery(tempSlider).hasClass('tablette')) {
				jQuery(tempSlider).remove();
			}

			if(jQuery('#latest_news_slider_temp').length == 0) {
				var tempSlider = newsSlider.clone().attr('id', 'latest_news_slider_temp');
				tempSlider.insertAfter(newsSlider);
			}

			if(isMobile || isTablette) {
				jQuery(newsSlider).css('display', 'none');
				jQuery(tempSlider).css('display', 'block');
			}
			if(isMobile) {
				jQuery(tempSlider).addClass('mobile');
				minItems = 1;
				maxItems = 1;
			}
			if(isTablette) {
				jQuery(tempSlider).addClass('tablette');
			}
			if(isDesktop) {
				jQuery(tempSlider).css('display', 'none');
				jQuery(newsSlider).css('display', 'block');
			}

			var width = jQuery('#latest_news_slider_temp').width() / 2;

			/**
			 *	adding conditional check to address issue with flexslider not appearing.
			 */
			if (typeof(jQuery.flexslider) !== 'undefined') {
				tempSlider.css('position', 'relative').flexslider({
					animation: "slide",
					controlNav: false,
					directionNav: true,
					animationLoop: true,
					slideshow: false,
					selector: ".view-content > .views-row",
					minItems: minItems,
					maxItems: maxItems,
					itemWidth: width,
					itemMargin: 0,
					prevText: "&nbsp;",
					nextText: "&nbsp;",
					start: function(slider) {
						if(slider.slides) {
							slider.slides.each(function(index, element) {
								if(jQuery(element).hasClass('views-row-even')) {
									jQuery(element).css('width', jQuery(element).width() + 1);
								}
							});
						}
					}
				});
			}
		}
	}

	/* Governance & Management accordeon */
	if(jQuery('.accordeon_effect').length > 0) {
		jQuery('.team_header').click(function(e) {
			var clickedElt = jQuery(this);
			jQuery(this).toggleClass('active');
			jQuery(this).next('div').slideToggle();
			jQuery('.team_header').not(this).removeClass('active').next('div').slideUp(250, function() {
				scrollTop = clickedElt.offset().top;
				jQuery('html, body').animate({scrollTop: scrollTop }, 250);
			});
		});
	}

	/* Regulatory Information accordeon */
	if(jQuery('.view-faq-filtered-list').length > 0) {
		jQuery('.views-field-titles').click(function(e) {
			e.preventDefault();
			jQuery(this).toggleClass('active');
			jQuery(this).next('div').slideToggle();
			jQuery('.views-field-titles').not(this).removeClass('active').next('div').slideUp();
		});
	}
	/*** MENU SECONDAIRE ***/
	if(jQuery("nav.pane-term-list, div.pane-term-list, .pane-menu-menu-faq-group .pane-content, div.pane-nav-location-panel-pane-1 .pane-content").length>0) {
		// Create the dropdown base
		jQuery("<select />").attr('class', 'form-select').appendTo("nav.pane-term-list, div.pane-term-list, .pane-menu-menu-faq-group:last, div.pane-nav-location-panel-pane-1");

		// Create default option "Go to..."
		jQuery("<option />", {
		   "selected": "selected",
		   "value"   : "",
		   "text"    : "- Menu -"
		}).appendTo("nav.pane-term-list select, div.pane-term-list select, .pane-menu-menu-faq-group select, div.pane-nav-location-panel-pane-1 select");
		
		var count_item=0;
		// Populate dropdown with menu items
		jQuery("nav.pane-term-list a, div.pane-term-list a, .pane-menu-menu-faq-group .pane-content a, div.pane-nav-location-panel-pane-1 .pane-content a").each(function() {
			
			var el = jQuery(this);
			if( !el.hasClass("menu_hide")  ) {//links with class menu_hide are hiden maincategory =>hide link true
				jQuery("<option />", {
					"value"   : el.attr("href"),
					"text"    : el.text()
				}).appendTo("nav.pane-term-list select, div.pane-term-list select, .pane-menu-menu-faq-group select, div.pane-nav-location-panel-pane-1 select");
				count_item=count_item+1;
			}
		});
		//console.log(count_item);
		if(count_item==0) {
			jQuery("nav.pane-term-list, div.pane-term-list, .pane-menu-menu-faq-group , div.pane-nav-location-panel-pane-1").hide();
		}
		jQuery("nav.pane-term-list select, div.pane-term-list select, .pane-menu-menu-faq-group select, div.pane-nav-location-panel-pane-1 select").change(function() {
		 	window.location = jQuery(this).find("option:selected").val();
		});
	}
	/*** /MENU SECONDAIRE ***/

	/* Location */
	jQuery("#change_location").change(function() {
	 	window.location = jQuery(this).find("option:selected").val();
	});
	/* /Location*/

	/*** FORMULAIRE TOOLTIP ***/
	if(jQuery('.webform-client-form').length > 0) {
		Opentip.styles.tag = {
			target: true,
			showOn: 'click',
			fixed: true,
			hideTrigger: 'closeButton',
			background: '#ffffff',
			borderColor:'#cccccc',
			// borderWidth:'1',
			borderRadius: '2',
			closeButtonCrossColor:'#cccccc',
			/*closeButtonOffset:[9, 9],
			closeButtonRadius:'9',*/
		  	tipJoint: 'top left',
		  	targetJoint: 'right',
			group: jQuery('.webform-client-form').attr('id') // Ensures that only one tag Opentip is visible
		};
		if(isMobile){
			console.log(isMobile);
			jQuery('.webform-client-form .description').each(function(index,element){
				var more_detail = jQuery('<span class="show_more_detail"><img src="/sites/all/themes/technicolor/images/form_more_detail.png" alt="Show help" /></span>');
				var title = jQuery(element).parent().children('label').clone();
				jQuery('span', title).remove();
				
				if(jQuery(element).parent().hasClass('form-type-checkboxes') || jQuery(element).parent().hasClass('form-item-captcha-response')){
					jQuery(element).parent().children('label').append(more_detail);
					var myOpentip = new Opentip(
						jQuery('.show_more_detail',jQuery(element).parent()),
						jQuery(element).text(),
						{
							title: jQuery(title).text(),
							style: 'tag',
							tipJoint: 'top',
				  			targetJoint: 'bottom'
						}
					);
				} else { 
					jQuery(element).parent().append(more_detail);
					var myOpentip = new Opentip(
						jQuery('.show_more_detail',jQuery(element).parent()),
						jQuery(element).text(),
						{
							title: jQuery(title).text(),
							style: 'tag'
						}
					); 
				}
			});
		} else{
			jQuery('.webform-client-form .description').each(function(index,element){
				var more_detail = jQuery('<span class="show_more_detail"><img src="/sites/all/themes/technicolor/images/form_more_detail.png" alt="Show help" /></span>');
				var title = jQuery(element).parent().children('label').clone();
				jQuery('span', title).remove();

				if(jQuery(element).parent().hasClass('form-type-checkboxes') || jQuery(element).parent().hasClass('form-item-captcha-response')){
					jQuery(element).parent().children('label').append(more_detail);
				} else { 
					jQuery(element).parent().append(more_detail);
				}
				
				var myOpentip = new Opentip(
					jQuery('.show_more_detail',jQuery(element).parent()),
					jQuery(element).text(),
					{
						title: jQuery(title).text(),
						style: 'tag'
					}
				); 
			});
		}
	}
	/*** /FORMULAIRE TOOLTIP ***/


	/* -- CONTACTS -- */
		/* Accordéon */
			/* -- variables definitions -- */
			var formBtn = jQuery('.js-form-item-title');
			/* -- Open the first one on load -- */
			formBtn.next().first().show();
			/* -- Slide on click -- */
			formBtn.click( function() {
				var jQueryThis = jQuery(this);
				if ( jQueryThis.hasClass('open') ) {
					jQueryThis.removeClass('open').next().slideUp(200);
				} else {
					formBtn.removeClass('open').next().slideUp(200);
					jQueryThis.addClass('open').next().slideDown(200);
				}		
			});
		/* PopPin */
		var modalBox = {

			config: {
				speed : '200'
			},

			init : function() {
				jQuery('#contact_popin').click( this.show );
			},	// end : init

			show : function() {
				var height = jQuery(window).height();
				jQuery('.modal-body').css('max-height', height - 100 + 'px' );

				modalBox.switcher();
				modalBox.close();
			},	// end : show

			switcher : function() {
				var box = jQuery('.modal-box'),
					backdrop = jQuery('.modal-backdrop'),
					config = modalBox.config;

				if ( backdrop.is(':visible') ) {
					backdrop.fadeOut(config.speed).queue(function() {
						jQuery(this).remove().dequeue();
					});
					box.fadeOut(config.speed);
					// Enable Scroll
					jQuery('html').css('overflow','auto');
					document.ontouchmove = function(e){ return true; }
				} else {
					jQuery('<div class=modal-backdrop></div>').insertAfter(box).fadeIn(config.speed);
					box.fadeIn(config.speed);
					// Disable Scroll
					jQuery('html').css('overflow','hidden');
					document.ontouchmove = function(e) {e.preventDefault()};
				}
			},	// end : backdrop

			close : function() {
				jQuery('.close').click(function() {
					modalBox.switcher();
				});
			}	// end : close
		} // end : modalBox

		modalBox.init();
});



/*function breadcrumb(){
	var breadcrumb_width = jQuery('.breadcrumb').width();
	var ol_width=0;
	var last_visible = null;
	var dots = jQuery('<span>...</span>');
	jQuery('.breadcrumb ol li').each(function(index, element){
		// jQuery(element).removeClass('last_breadcrumb');
		jQuery('span', element).remove();
		// var element_width = jQuery(element).width();
		ol_width+=jQuery(element).outerWidth(true);
		if(ol_width>=breadcrumb_width) {
			jQuery(element).hide();
		} else {
			last_visible = element;
		}
	});

	if(jQuery(last_visible).text() != jQuery('.breadcrumb ol li:last-child').text()){
		jQuery(last_visible).append(dots);
	}
}*/

/**video function**/
function showVideo( id, fid , type ){
	jQuery('#video_'+fid).show(); 
	document.getElementById('fade').style.display = 'block';
	if( type == 'youtube' ){
		var swfobject_yt_p = document.getElementById(id);
		/*if( typeof playVideo =='undefined' ){
			jQuery.getScript("/sites/all/libraries/swfobject/swfobject.js", function(){
				swfobject_yt_p.playVideo();
			});	
		} else {*/
			//swfobject_yt_p.playVideo();
	//	}
	} else if( type == 'vimeo' ){
		var swfobject_vm = document.getElementById(id);
		swfobject_vm.api_play();
	} else if(  type == 'jwplayer' ) {
		var id_jwplayer = jQuery('#video_'+fid+' object').attr("id");
		jwplayer(id_jwplayer).play();
	}
}
function stopVideo( id, fid , type ){
	document.getElementById('video_'+fid).style.display='none'; 
	document.getElementById('fade').style.display='none';
	if( type == 'youtube' ){
		var swfobject_yt = document.getElementById(id);
		swfobject_yt.seekTo(0);
		swfobject_yt.stopVideo();
	} else if( type == 'vimeo' ){
		var swfobject_vm = document.getElementById(id);
		swfobject_vm.api_seekTo(0);
		swfobject_vm.api_pause();
	} else if(  type == 'jwplayer' ) {
		var id_jwplayer = jQuery('#video_'+fid+' object').attr("id");
		jwplayer(id_jwplayer).stop();
	}
}

/*function play_video_html5(video_id) {
	var video = document.getElementById(video_id);
	video.play();
}

function play_video_html5() {
	jQuery('#video_html5_2241').play();
}
*/
function play_video_html5(video_id) {
	jQuery('#'+video_id).get(0).play();
}

/** formulaire mobile */
function mobileForm( width ){
	if(width<=small_screen_max_width) { // mobile
		/*FORMS JS*/
		jQuery(".form-item .form-text").each(function(index) {
			if( jQuery(this).parent().hasClass('form-type-textfield') )
				jQuery(this).prev().hide();
			if( !jQuery(this).parent().hasClass('form-item-combine') )
			jQuery(this).attr("placeholder", jQuery(this).prev().text());  
		});

		jQuery(".form-item .form-textarea").each(function(index) {
			jQuery(this).attr("placeholder", jQuery(this).parent().prev('label').text());  
		});
	} 
	else if( width < large_screen_min_width  ) {//medium
		jQuery(".form-item .form-text").each(function(index) {
			if( jQuery(this).parent().hasClass('form-type-textfield') )
				jQuery(this).prev().show();
			if( !jQuery(this).parent().hasClass('form-item-combine') )
				jQuery(this).attr("placeholder", "");  
		});

		jQuery(".form-item .form-textarea").each(function(index) {
			jQuery(this).attr("placeholder","");  
		});
	}
}
function gmap_marker( width  ){
	if( width <= small_screen_max_width || width < large_screen_min_width ) { // mobile
			jQuery(".openlayers-views-map image").each(function(index){
				jQuery(this).bind("gesturechange", function(){
					jQuery(this).hide();
				});
				jQuery(this).bind("gestureend", function(){
					jQuery(this).show();
				});
			
			});
	}
	
}

function accordeon_open_close() {

	jQuery(document).delegate(".view-lab-publications-filtered-list .panel-col-first",'click', function(e) {

		e.preventDefault();

		var parent_col_first = jQuery(this);

		parent_col_first
			.toggleClass('active')
			.next('div')
			.slideToggle()
			.not(parent_col_first)
			.removeClass('active')
			.next('div')
			.slideUp();
	});
    var bib_button = jQuery('.views-field-field-lab-pub-bib-text').children('div').children('.bib_button');
    bib_button.click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery(this).next('div').slideToggle();
    });

}
function right_menu_hide_link () {

	jQuery('a.menu_hide').each(function(e){
		if( jQuery(this).parents(".pane-term-list").length > 0 ){//only for the right menu
			jQuery(this).parent("li").hide();
		}
	});
	jQuery('span.menu_hide').each(function(e){
		if( jQuery(this).parents(".pane-term-list").length > 0 ){//only for the right menu
			jQuery(this).parent("li").hide();
		}
	});
}

function getLinkMap(lat, lon, zoom, id, url) {
	var map = new OpenLayers.Map('mymap');
	var center = new OpenLayers.LonLat(lon,lat);

	var projFrom = new OpenLayers.Projection('EPSG:4326');
	var projTo = new OpenLayers.Projection('EPSG:900913')

	var cproj = center.transform(projFrom, projTo);
	newlat=cproj.lat;
	newlon=cproj.lon;
	newlink=url+"?zoom="+zoom+"&lat="+newlat+"&lon="+newlon;
	jQuery("a#linkmap"+id).attr("href", newlink);

}
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($,sr){
 
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;
 
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null; 
          };
 
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
 
          timeout = setTimeout(delayed, threshold || 100); 
      };
  }
	// smartresize 
	jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
 
})(jQuery,'smartresize');

(function ($, Drupal, window, document, undefined) {

  //@dev: Build out toggle functionality for search 
  Drupal.behaviors.toggleSearch = {
    attach: function (context, settings) {
    }
  }

  /**
   *  @function:
   *    used on location pages such as los angeles and london
   */
  Drupal.behaviors.locationHeader = {
    attach: function (context, settings) {
      //ensure we only bind once to the block
      $('.technicolor-location-block').once(function() {
        //does a compare on first click
        $('.technicolor-location-block .first').on('click', function(e) {
          //prevent default behavior on first item
          e.preventDefault();
          
          //check to see if we are open or closed
          if (!$(this).parent().hasClass('open')) {
            $(this).parent().addClass('open');
            $(this).parent().find('.hide').removeClass('hide');
          }
          else {
            $(this).parent().removeClass('open');
            $(this).parent().find('li:not(.first)').addClass('hide');
          }
        });
      });
    }
  }
  
  //@de: Build out mobile menu functionality
  Drupal.behaviors.mobileMenu = {
    attach: function (context, settings) {
    }
  }
  
  Drupal.behaviors.technicolorSlider = {
    attach: function (context, settings) {
      var mobile_width = 400;
      
      $(window).smartresize(function(){ 
        if ($(window).width() > mobile_width) {
          $('.technicolor-slider').each(function(i, v) {
            if (typeof $(this).data('owlCarousel') == 'undefined') {
              Drupal.attachBehaviors.apply('owlcarousel');
            }
          });
        }
        else {
          $('.owl-carousel').each(function(i, v) {
            $(this).data('owlCarousel').destroy();
          });
        }
        
        if ($('.views-field-field-header-carrousel ul li').length > 1) {
          var autoplay = true;
          var transitionstyle = 'fade';
        }
        else {
          var autoplay = false;
          var transitionstyle = false;
        }
        
        $('.views-field-field-header-carrousel ul').owlCarousel({
          singleItem:true,
          transitionStyle: transitionstyle,
          autoPlay: autoplay
        });
      });
      
      //built for bottom-left-top-right
      //used on homepage
      if ($(window).width() > mobile_width) {
        $('.view-display-id-technicolor_front_slider .slider-wrapper.bottom-left-top-right').hover(
          function() {
            //we just want to check if it has a parent on not
            if ($(this).parent().parent().parent().parent().parent().find('a').length === 0) {
              return;
            }

            $('.left', this).stop().animate({
              left: "0",
              bottom: "0",
            }, 500);
            $('.right', this).stop().animate({
              right: "-20%",
              top: "-20%",
            }, 500);
            
            //moves the right side
            $(this).parent().parent().parent().parent().find('.views-field-field-mailto-link').stop().animate({
              right: "5%",
              top: "5%",
            }, 500);
            
            $(this).parent().parent().parent().parent().find('.views-field-title').stop().animate({
              left: "5%",
              bottom: "7%",
            }, 500);
          },
          function() {
            //we just want to check if it has a parent on not
            if ($(this).parent().parent().parent().parent().parent().find('a').length === 0) {
              return;
            }

            $('.left', this).stop().animate({
              left: "-5%",
              bottom: "-5%",
            }, 500);
            $('.right', this).stop().animate({
              right: "-25%",
              top: "-25%",
            }, 500);
            
            //moves the right side
            $(this).parent().parent().parent().parent().find('.views-field-field-mailto-link').stop().animate({
              right: "15",
              top: "10",
            }, 500);
            
            $(this).parent().parent().parent().parent().find('.views-field-title').stop().animate({
              left: "3%",
              bottom: "5%",
            }, 500);
          }
        );
  
        $('.technicolor-slider-overlay.top-left-bottom-right').hover(
          function() {
            //we just want to check if it has a parent on not
            if ($(this).parent().parent().parent().parent().parent().find('a').length === 0) {
              return;
            }
            $('.left', this).stop().animate({
              left: "-15%",
              top: "-15%",
            }, 500);
            $('.right', this).stop().animate({
              right: "-15%",
              bottom: "-15%",
            }, 500);
            $(this).parent().parent().parent().parent().parent().parent().find('.subtitle').stop().animate({
              right: "5%",
              bottom: "5%",
            }, 500);
          },
          function() {
            //we just want to check if it has a parent on not
            if ($(this).parent().parent().parent().parent().parent().find('a').length == 0) {
              return;
            }
            $('.left', this).stop().animate({
              left: "-20%",
              top: "-20%",
            }, 500);
            $('.right', this).stop().animate({
              right: "-5%",
              bottom: "-25%",
            }, 500);
            $(this).parent().parent().parent().parent().find('.subtitle').stop().animate({
              right: "15",
              bottom: "10",
            }, 500);
          }
        );
      }
    }
  }
  
  //document ready function
  $(document).ready(function() {
    
    
    $('#block-technicolor-support-technicolor-tax-mobile-menu h2').on('click', function() {
      $(this).parent().find('.view').toggle();
      $(this).toggleClass('technicolor_open_icon');
    });
    
    var bib_button = jQuery('.views-field-field-lab-pub-bib-text').children('div').children('.bib_button');
    bib_button.click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery(this).next('div').slideToggle();
    });

    var bib_button_person = jQuery('.views-field-field-lab-pub-bib-text').children('div').children('.technicolor-more-link');
    bib_button_person.click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery(this).next('div').slideToggle();
    });
    
    /**
     *  Only fire this on mobile for homepage feature item hover
     */
    var mobile = 480;
    var tablet = 980;
    
    //makes table responsive
    $('.trade_table_full').stacktable();
    
    //animate the feature item only above mobile
    $('.view-technicolor-homepage-feature-item .views-row').hover(
      function() {
        if ($(window).width() > mobile) {
          $('.hover-state', this).stop().animate({
            bottom: '40px',
            duration:'slow',
            easing: 'easeOutBack'
          }, 300);
        }
      },
      function() {
        if ($(window).width() > mobile) {
          $('.hover-state',this).stop().animate({
            bottom: '0',
            duration:'slow',
            easing: 'easeOutBack'
          }, 300);
        }
      }
    );
    
    //animate the front-banner on hover only above mobile
    $('#boxes-box-front_banner .full-height').hover(
      function() {
        if ($(window).width() > mobile) {
          $('.label', this).stop().animate({
            marginTop: '-22%'
          }, 100);
        }
      },
      function() {
        if ($(window).width() > mobile) {
          $('.label', this).stop().animate({
            marginTop: '23%'
          }, 100);
        }
      }
    );
    
    $('.technicolor-view-hover-panels .views-row, .view-id-category_list .views-row, .view-id-offers .view-id-offers').hover(
      function() {
        var technicolor_readmore = $(this).find('.more-link.technicolor-more-link').length;
        if ($(window).width() > tablet && (technicolor_readmore >0)) {
          var technicolor_hover_offset = $(this).find('.views-field-name-field, .views-field-title').height();
          technicolor_hover_offset = technicolor_hover_offset + 30;

          if ($(this).parent().hasClass('technicolor-ff')) {
            var defined_offset = 50;
          }
          else {
            var defined_offset = 31;
          }
          
          var technicolor_image_height = $(this).find('.panel-col-first img').height();
          var technicolor_readmore_offset = (technicolor_image_height - defined_offset)/2; 
          $(this).addClass('readmore');
          $('.views-field-title, .views-field-field-prod-description, .views-field-name-field, .views-field-description-field, .views-field-field-event-description', this).stop().animate({
              top: '-'+technicolor_hover_offset+'px',
              duration:'slow',
              easing: 'easeOutBack'
          }, 400);
          $('.more-link.technicolor-more-link', this).stop().animate({
              top: technicolor_readmore_offset +'px',
              duration:'slow',
              easing: 'easeOutBack'
          }, 400);
        }
      },
      function() {
        var technicolor_readmore = $(this).find('.more-link.technicolor-more-link').length;
        if ($(window).width() > tablet && (technicolor_readmore >0)) {
          var technicolor_image_height = $(this).find('.panel-col-first img').height();
          var technicolor_readmore_offset = (technicolor_image_height - 31)/2; 

          $(this).removeClass('readmore');
          $('.views-field-title, .views-field-field-prod-description, .views-field-name-field, .views-field-description-field, .views-field-field-event-description', this).stop().animate({
              top: '-20px',
              duration:'slow',
              easing: 'easeOutBack'
          }, 400);
          $('.more-link.technicolor-more-link', this).stop().animate({
              top: '-50px',
              duration:'slow',
              easing: 'easeOutBack'
          }, 400);
        }
      }
    );
    
    /**
     *  On smartresize
     */
    $(window).smartresize(function() {
      //remove the styling added so that it doesn't bounce on resize
      $('#boxes-box-front_banner .full-height .label').removeAttr('style');
      
      $('.galleryFF').each(function(i) {
        var maxHeight = -1;
        
        $('.gallery', this).each(function() {
          maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });
        
        $('.gallery', this).each(function() {
          $(this).height(maxHeight);
        });
      });
      
      $('.technicolor-excom,.technicolor-committee, .technicolor-board').each(function(i) {
        var maxHeight = -1;
        
        $('.technicolor-team-row', this).each(function() {
          maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });
        
        $('.technicolor-team-row', this).each(function() {
          $(this).height(maxHeight + 10);
        });
      });
      
      //allows all height to become the same
      $('.technicolor-height-handler').each(function(i) {
        var maxHeight = -1;
        
        $('.views-row, .entity-field-collection-item', this).each(function() {
          maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });
        
        $('.views-row, .entity-field-collection-item', this).each(function() {
          $(this).css('min-height', maxHeight + 10);
        });
      });

      //by code we are fixing the half values for pixels with the readmore link
      $('.technicolor-more-link').each(function() {
        //we we just set the width by 1
        $(this).css('width', '');
        $(this).width($(this).width() + 1);
      });
    });
    
    setTimeout(function() {
      $('.nav > li, li.mega').unbind('mouseenter mouseleave mouseover mouseout');
    }, 2000);
    
    $('.nav > li, li.mega').click(function(event) {
      if (!$(this).hasClass('open-fix')) {
        $("ul.tb-megamenu-nav li").removeClass("open-fix");
        $(this).addClass('open-fix');
        $('.nav > li, li.mega').removeClass('open');
        if (!$(this).hasClass('open')) {
          $(this).addClass('open');
        }
      }
      else {
        $(this).removeClass('open-fix');
        $(this).removeClass('open');
      }
    });
    
    //menu 
    $('.tb-megamenu-nav li a.dropdown-toggle').on('click', function(event) {
      //only do this if its in mobile view
      if ($(window).width() < 980) {
        if ($(this).parent().find('.tb-megamenu-submenu').is(':visible')) {
          //display none using important to override the default styling provided from tb_megamenu.
          $(this).parent().find('.tb-megamenu-submenu').attr('style', 'display: none !important;');
        }
        else {
          //display block
          $(this).parent().find('.tb-megamenu-submenu').attr('style', 'display: block !important;')
        }
      }
    });
      
    //search
    $('#block-search-form #edit-submit, #block-search-form #edit-submit--2').on('click', function() {
      //toggle the search input
      $(this).parent().parent().find('.form-item-search-block-form').toggle();
      
      //only stop the serach if the input value is empty
      if ($(this).parent().parent().find('.form-item-search-block-form input').val() == '') {
        return false;
      }
    });
    
    //triggers a resize on document load
    setTimeout(function() {
      $(window).trigger('resize');
    }, 500);

    // Implement matchHeight for all needed block sections
    var width = $(window).width(); 
    if(width>=400) {
      //$('.view-category-list .view-content .views-row').matchHeight({
      //  property: 'min-height',
      //  remove: true
      //});
    }
    
    //we want to target front homepage slider to adjust its font size by code
    $('.view-display-id-technicolor_front_slider .owl-item .views-field-title').each(function() {
      var this_height = $(this).outerHeight();
      
      if (this_height > 72) {
        if (this_height < 108) {
          $(this).css('font-size', '26px');
        }
        else if (this_height < 144) {
          $(this).css('font-size', '24px');
        }
        else {
          $(this).css('font-size', '20px');
        }
      }
    });
    
    //$('.view-id-technicolor_browse_your_network .views-row').hover(
    //  function() {
    //    $(this).css('background-color', '#000');
    //  },
    //  function() {
    //    $(this).removeAttr('style');
    //  }
    //);
    
    $(document).ajaxComplete(function() {
      $(window).trigger('resize');
    });
  });

})(jQuery, Drupal, this, this.document);
;
