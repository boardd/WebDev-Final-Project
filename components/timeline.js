(function ($) {
 
    $(window).on('scroll', function () {
        onScroll();
    });
  
    var timeline = $('.history-timeline');
    var timeline_line = $('.history-timeline_line');
    var timeline_animation = $('.history-timeline_line-progress');
    var timeline_point = $('.history-timeline-card_point-box');
    var timeline_card = $('.history-timeline_item');
    var windowHeight = $(window).outerHeight();
    var windowInnerHeight = $(window).height();
    var windowScrollTop = -1;
    var maxHeight = 0;

    function onScroll() {
        agPosY = $(window).scrollTop();
        requestAnimationFrame(updateWindow);
    }

    function updateWindow() {
        timeline_line.css({
            top: timeline_card.first().find(timeline_point).offset().top - timeline_card.first().offset().top,
            bottom: timeline.offset().top + timeline.outerHeight() - timeline_card.last().find(timeline_point).offset().top
        }); 
        windowScrollTop !== agPosY && (windowScrollTop = agPosY, windowInnerHeight, updateProgress());
    }

    function updateProgress() {
        var agTop = timeline_card.last().find(timeline_point).offset().top;

        i = agTop + agPosY - $(window).scrollTop();
        a = timeline_animation.offset().top + agPosY - $(window).scrollTop();
        
        
        n = Math.max(agPosY - a + windowHeight / 2, maxHeight);
        maxHeight = Math.max(maxHeight, n)

        i <= agPosY + windowHeight / 2 && (n = i - a);
        timeline_animation.css({height: n + "px"});

        timeline_card.each(function () {
            var itemTop = $(this).find(timeline_point).offset().top;
            if ((itemTop + agPosY - $(window).scrollTop()) < agPosY + 0.5 * windowHeight) {
            $(this).addClass('js-ag-active');
            }
        })
    }
    
})(jQuery);
  