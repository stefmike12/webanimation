$(document).ready(function () {
    TweenMax.to($('#oranje-lijn'), 5, {
        x: -250,
        ease: Linear.easeInOutQuint,
        yoyoEase: true,
        repeat: -1
    })
    TweenMax.to($('#oranje-balk-boven'), 3, {
        x: 250,
        ease: Linear.easeInOutQuint,
        yoyoEase: true,
        repeat: -1
    })
    TweenMax.to($('#zwarte-balk-3'), 4, {
        x: 120,
        ease: Linear.easeInOutQuint,
        yoyoEase: true,
        repeat: -1
    })
    TweenMax.to($('#zwarte-balk-2'), 3, {
        x: 400,
        ease: Linear.easeInOutQuint,
        yoyoEase: true,
        repeat: -1
    })
    TweenMax.to($('#zwarte-balk-1'), 4, {
        x: -400,
        ease: Linear.easeInOutQuint,
        yoyoEase: true,
        repeat: -1
    })
    TweenMax.to($('#oranje-balk-onder'), 2, {
        x: -200,
        ease: Linear.easeInOutQuint,
        yoyoEase: true,
        repeat: -1
    })
});



function changeOverlay() {
    var randomNum = Math.round(Math.random() * 150) - 8;
    $('#Artboard-Copy path:eq(' + randomNum + ')').animate({
        "opacity": 0
    });
    setTimeout(function () {
        $('#Artboard-Copy path:eq(' + randomNum + ')').animate({
            "opacity": 1
        });
        changeOverlay();
    }, 200);
    setTimeout(function () {
        $('#Artboard-Copy path:eq(' + randomNum + ')').animate({
            "opacity": 1
        });
        // setTimeout();
    }, 200);

}

$(document).ready(function () {
    changeOverlay();
});


var hueRotate = 0;
var toggle = false;

function onButtonClick() {
    var body = document.getElementsByTagName('body')[0];
    toggle = !toggle;
    var css = toggle ? 'filter: invert(100%)' : 'filter: invert(0%)';
    css += 'hue-rotate(' + hueRotate + 'deg);';
    body.style = css;
}

// Wanneer de pagina geladen is en alle elementen er zijn
$(document).ready(function () {

    // Wanneer de gebruiker zijn muiswiel beweegt
    $(document).on("mousewheel", function () {
        // Voeg dan de CSS animation property aand de .door-left en -right toe
        $(".door-left, .door-right").css("WebkitAnimation", "doors 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards")
    });

    // Wanneer de gebruiker klikt
    $(document).on("click", function () {
        // Voeg dan de CSS animation property aand de .door-left en -right toe
        $(".door-left, .door-right").css("WebkitAnimation", "doors 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards")
    });

    // Wanneer de gebruiker scrollt
    $(document).on("mousewheel", function () {
        // Voeg dan de CSS animation property aand de .scroll titels scroll up
        $(".scroll").css("WebkitAnimation", "scroll 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards")
        $(".up").css("WebkitAnimation", "up 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards")
        setTimeout(function () {
            $(".scroll").css("display", "none");
        }, 1000);
        setTimeout(function () {
            $(".up").css("display", "none");
        }, 1000);
    });

    // Wanneer de gebruiker klikt
    $(document).on("click", function () {
        // Voeg dan de CSS animation property aand de .scroll titels scroll up
        $(".scroll").css("WebkitAnimation", "scroll 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards")
        $(".up").css("WebkitAnimation", "up 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards")
        setTimeout(function () {
            $(".scroll").css("display", "none");
        }, 1000);
        setTimeout(function () {
            $(".up").css("display", "none");
        }, 1000);
    });


    // fix voor mobiel?

    // $(document).click('.scroll', function () {
    //     $('.door-left, .door-right').css("display", "none");
    // });


    // Wanneer de slider bewogen is
    $('#slider').on('input', function (event) {
        // Krijg de nieuwe waarde van de slider
        var value = event.target.value;
        // Maak hueRotate ook deze waarde, zodat onButtonClick() de waarde ook kan gebruiken
        hueRotate = value;

        // Geef de hue rotate
        var css = 'hue-rotate(' + value + 'deg) ';
        // Voeg de invert hier aan toe
        css += toggle ? 'invert(100%)' : 'invert(0%)';

        // en geef de body deze CSS
        $('body').css('filter', css);
    });

    $('.glitch').draggable({
        grid: [40, 40],
        containment: 'document'
    });

    $('.footer').draggable({
        grid: [40, 40],
        containment: 'document'
    });

    $('svg').draggable({
        grid: [40, 40],
        containment: 'document'
    });





});