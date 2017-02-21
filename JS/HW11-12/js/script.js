(function($, undefined) {
    $(function() {
        var leftArr = $('.carousel-arrow-left'),
            rightArr = $('.carousel-arrow-right'),
            carList = $('.carousel-list');

        var elementsCount = carList.find('li').length,
            IMGWIDTH = 640,
            IMGHEIGHT = 480,
            IMGMARGIN = 15,
            pixelsStep = IMGWIDTH + IMGMARGIN,
            currentLeftValue = parseInt(carList.css('left')),
            minLeftValue = -((IMGWIDTH + IMGMARGIN) * 10 -IMGMARGIN - document.querySelector('.carousel-wrapper').getBoundingClientRect().width),
            maxLeftValue = 0;

        leftArr.on('click', function () {
            var targetLeftValue = currentLeftValue > minLeftValue + pixelsStep ? currentLeftValue - pixelsStep : minLeftValue;
            currentLeftValue = targetLeftValue;
            carList.stop().animate({
                left: targetLeftValue
            }, 500)

        });

        rightArr.on('click', function() {
            var targetLeftValue = currentLeftValue < -pixelsStep ? currentLeftValue + pixelsStep : maxLeftValue;
            currentLeftValue = targetLeftValue;
            carList.stop().animate({
                left: targetLeftValue
            }, 500)
        });
    });
})(jQuery);