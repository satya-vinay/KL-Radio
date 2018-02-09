$("document").ready(function() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $(window).stop(true).scrollTo(this.hash, {
            duration: 800,
            interrupt: true
        });
    });

    var navbar = document.getElementById("nav");
    window.addEventListener("scroll", function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 100) {
            navbar.style["background-color"] = "#222";
        }
        else {
            navbar.style["background-color"] = "transparent";
        }
    });
});
