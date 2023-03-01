$(document).ready(function () {
    let leftIcon = $("main .slider").children().eq(0);
    let rightIcon = $("main .slider").children().eq(1);

    rightIcon.click(function () {
        let activeImage = $("main .slider .images .active");

        if (activeImage.next().length != 0) {
            activeImage.removeClass("active");
            activeImage.next().addClass("active");
        }

        else {
            activeImage.removeClass("active");
            activeImage.parent().first().addClass("active");
        }
    })

    leftIcon.click(function () {
        let activeImage = $("main .slider .images .active");

        if (activeImage.prev().length != 0) {
            activeImage.removeClass("active");
            activeImage.prev().addClass("active");
        }

        else {
            activeImage.removeClass("active");
            activeImage.parent().last().addClass("active");
        }
    })
})