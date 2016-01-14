if ($(&#39;#back-to-top&#39;).length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop &gt; scrollTrigger) {
                $(&#39;#back-to-top&#39;).addClass(&#39;show&#39;);
            } else {
                $(&#39;#back-to-top&#39;).removeClass(&#39;show&#39;);
            }
        };
    backToTop();
    $(window).on(&#39;scroll&#39;, function () {
        backToTop();
    });
    $(&#39;#back-to-top&#39;).on(&#39;click&#39;, function (e) {
        e.preventDefault();
        $(&#39;html,body&#39;).animate({
            scrollTop: 0
        }, 700);
    });
}
